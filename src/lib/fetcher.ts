import { toast } from "@/components/ui/Toast";
import { sessionGet } from "./session";

interface APIResponse {
  code: number;
  message: string;
  result: any;
}

interface UnstringifiedBodyInit extends Omit<RequestInit, "body"> {
  body?: any;
}

export default function fetcher(
  input: RequestInfo | URL,
  init?: UnstringifiedBodyInit | undefined
): Promise<APIResponse> {
  const token = sessionGet("user")?.token;

  return fetch(input, {
    ...init,
    headers: {
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(init?.body ? { "Content-Type": "application/json" } : {}),
      ...init?.headers,
    },
    ...(init?.body ? { body: JSON.stringify(init.body) } : {}),
  })
    .then((resp) => resp.json())
    .then((data) => {
      if (data?.code >= 300) {
        toast.error(data?.message);
        throw new Error(data?.message);
      }
      return new Promise((resolve) => resolve(data));
    });
}
