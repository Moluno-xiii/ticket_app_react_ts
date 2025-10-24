import { createFileRoute } from "@tanstack/react-router";
import toast from "react-hot-toast";

export const Route = createFileRoute("/about")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-y-4">
      Hello "/about"!
      <button onClick={() => toast("something happened")}>Click</button>
      <button onClick={() => toast.success("something happened")}>Click</button>
      <button onClick={() => toast.error("something happened")}>Click</button>
    </div>
  );
}
