"use client";

import { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMe, MeResponse } from "@/services/auth.service";

type UserContextType = {
  user: MeResponse;
};

const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isError } = useQuery({
    queryKey: ["me"],
    queryFn: getMe,
    retry: false,
  });

  if (isError || !data) {
    window.location.href = "/login";
    return null;
  }

  return (
    <UserContext.Provider value={{ user: data }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used inside UserProvider");
  return ctx;
};
