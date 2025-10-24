import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Button from "../components/UI/Button";
import useAuth from "../hooks/useAuth";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex-1 font-grotesk flex flex-col justify-center items-center gap-y-2 text-white">
      <h2 className="text-3xl md:text-4xl">Welcome to Ticket-Ify</h2>
      <p className="italic text-center">
        Your number one platform for managing tickets
      </p>

      {isLoggedIn ? (
        <Button
          title="Continue"
          onClick={() => navigate({ to: "/dashboard/overview" })}
        />
      ) : (
        <Button
          title="Get Started"
          onClick={() => navigate({ to: "/auth/signup" })}
        />
      )}
    </div>
  );
}
