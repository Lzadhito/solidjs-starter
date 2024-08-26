import Toast from "@/components/ui/Toast";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import { JSX } from "solid-js";
import queryClient from "./queryClient";

export default function Providers(props: { children?: JSX.Element; hideToast?: boolean; queryClient?: QueryClient }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toast />
      {props.children}
    </QueryClientProvider>
  );
}
