import React, { createContext, useContext, ReactNode } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";

type ArweaveMPCContextType = string | undefined;

const ArweaveMPCContext = createContext<ArweaveMPCContextType>(undefined);

type ProviderProps = {
  clientId: string;
  children: ReactNode;
};

export const ArweaveMPCProvider = ({ clientId, children }: ProviderProps) => {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <ArweaveMPCContext.Provider value="">
        {children}
      </ArweaveMPCContext.Provider>
    </GoogleOAuthProvider>
  );
};

export const useArweaveMPC = () => {
  const context = useContext(ArweaveMPCContext);
  if (context === undefined) {
    throw new Error("useArweaveMPC must be used within an ArweaveMPCProvider");
  }
  return context;
};
