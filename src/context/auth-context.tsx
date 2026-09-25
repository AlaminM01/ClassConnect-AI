"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { CurrentUser, UserRole } from "@/lib/types";
import { DEMO_ACCOUNTS } from "@/lib/auth";

interface AuthContextType {
  user: CurrentUser | null;
  role: UserRole;
  isLoading: boolean;
  loginAs: (role: UserRole) => void;
  login: (email: string, role?: UserRole) => void;
  logout: () => void;
  switchRole: (role: UserRole) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<CurrentUser | null>(DEMO_ACCOUNTS.STUDENT);
  const [role, setRole] = useState<UserRole>("STUDENT");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      const savedRole = localStorage.getItem("classconnect_role") as UserRole | null;
      if (savedRole && DEMO_ACCOUNTS[savedRole]) {
        setRole(savedRole);
        setUser(DEMO_ACCOUNTS[savedRole]);
      } else {
        setUser(DEMO_ACCOUNTS.STUDENT);
        setRole("STUDENT");
      }
    } catch {
      setUser(DEMO_ACCOUNTS.STUDENT);
      setRole("STUDENT");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const loginAs = (targetRole: UserRole) => {
    const selected = DEMO_ACCOUNTS[targetRole] || DEMO_ACCOUNTS.STUDENT;
    setUser(selected);
    setRole(targetRole);
    try {
      localStorage.setItem("classconnect_role", targetRole);
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  const login = (email: string, targetRole: UserRole = "STUDENT") => {
    const base = DEMO_ACCOUNTS[targetRole] || DEMO_ACCOUNTS.STUDENT;
    const customUser: CurrentUser = {
      ...base,
      email,
      name: email.split("@")[0].replace(".", " ") || base.name,
      role: targetRole,
    };
    setUser(customUser);
    setRole(targetRole);
    try {
      localStorage.setItem("classconnect_role", targetRole);
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  const logout = () => {
    setUser(null);
    try {
      localStorage.removeItem("classconnect_role");
    } catch (e) {
      console.error("Storage error:", e);
    }
  };

  const switchRole = (newRole: UserRole) => {
    loginAs(newRole);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        role,
        isLoading,
        loginAs,
        login,
        logout,
        switchRole,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
