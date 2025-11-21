"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { api } from "@/lib/api/axios";
import { User } from "@/lib/types/users";

type AuthContextValue = {
  user: User | null;
  loading: boolean;
  register: (data: {
    email: string;
    password: string;
    name?: string;
  }) => Promise<void>;
  login: (data: { email: string; password: string }) => Promise<User | null>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Restore cached login quickly
  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      try {
        setUser(JSON.parse(stored));
      } catch {
        localStorage.removeItem("user");
      }
    }
  }, []);

  // Validate session unless inside /auth/*
  useEffect(() => {
    if (pathname.startsWith("/auth")) {
      setLoading(false);
      return;
    }

    let active = true;

    api
      .get("/auth/me")
      .then((res) => {
        if (!active) return;
        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
      })
      .catch(() => {
        if (!active) return;
        setUser(null);
        localStorage.removeItem("user");
      })
      .finally(() => {
        if (!active) return;
        setLoading(false);
      });

    return () => {
      active = false;
    };
  }, [pathname]);

  // REGISTER
  const register = async (data: {
    email: string;
    password: string;
    name?: string;
  }) => {
    await api.post("/auth/register", data);
    localStorage.removeItem("user");

    router.replace(
      `/auth/verify-pending?email=${encodeURIComponent(data.email)}`
    );
  };

  // LOGIN — fully fixed 🚀
  const login = async (data: { email: string; password: string }) => {
    try {
      const { data: loginData } = await api.post("/auth/login", data);

      const { data: meData } = await api.get("/auth/me");
      const loggedUser = meData.user;

      // Save user
      setUser(loggedUser);
      localStorage.setItem("user", JSON.stringify(loggedUser));

      // ❗ If user is NOT verified → redirect to verify-pending
      if (loggedUser.needsVerification) {
        router.replace(
          `/auth/verify-pending?email=${encodeURIComponent(data.email)}`
        );
        return null;
      }

      // Otherwise → proceed to dashboard
      router.replace("/dashboard");
      return loggedUser;
    } catch (err) {
      throw err;
    }
  };

  // LOGOUT
  const logout = async () => {
    try {
      await api.post("/auth/logout");
    } finally {
      setUser(null);
      localStorage.removeItem("user");
      router.replace("/auth/login");
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
