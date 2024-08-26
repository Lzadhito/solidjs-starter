import { toast } from "@/components/ui/Toast";
import { House } from "lucide-solid";
import Button from "ui/Button";

export default function HelloWorld() {
  return (
    <Button onClick={() => toast.success("HELLO WORLD!")}>
      <House />
      Try Me!
    </Button>
  );
}
