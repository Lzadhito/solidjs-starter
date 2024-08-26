import { toast } from "@/components/ui/Toast";
import Button from "ui/Button";

export default function HelloWorld() {
  return <Button onClick={() => toast.success("HELLO WORLD!")}>Try Me!</Button>;
}
