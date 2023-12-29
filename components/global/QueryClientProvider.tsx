"use client";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

const QueryClientComponent = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export default QueryClientComponent;
