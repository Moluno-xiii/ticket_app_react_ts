import { createFileRoute, useNavigate } from "@tanstack/react-router";
import Button from "../components/UI/Button";
import useAuth from "../hooks/useAuth";
import useSetPageName from "../hooks/useSetPageName";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { isLoggedIn, userDetails } = useAuth();
  const navigate = useNavigate();
  useSetPageName("Ticketier | Home");

  return (
    <div className="flex-1 text-center font-grotesk flex flex-col justify-center items-center gap-y-3 md:gap-y-5 text-white">
      <h2 className="text-3xl md:text-4xl">
        Welcome to Ticketier,
        <span className="text-amber-400 font-macondo italic">
          {" "}
          {userDetails?.name}
        </span>
      </h2>
      <p className="italic">Your number one platform for managing tickets</p>
      <HeroFeatures />
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

const HeroFeatures = () => {
  return (
    <section
      aria-labelledby="Application features"
      className="border bg-cream/50 border-primary shadow-dark shadow-xl text-dark rounded-md"
    >
      <h2 className="text-center text-xl md:text-2xl font-grotesk">Features</h2>
      <ul
        className="flex list-disc flex-col gap-y-2 text-start py-4 px-4
       sm:px-6 font-macondo text-lg sm:text-xl"
      >
        {features.map((feature) => (
          <li key={feature}>
            <p>{feature}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

const features = [
  "Save tickets seamlessly",
  "Secure Authentication",
  "Manage tickets efficiently with our modern dashboard",
  "Sleek, seamless Interface and Experience",
];
