import { createFileRoute } from "@tanstack/react-router";
import withAuth from "../../components/others/withAuth";

export const Route = createFileRoute("/tickets/")({
  component: withAuth(RouteComponent),
});

function RouteComponent() {
  return <div>Hello "/tickets/"!</div>;
}
