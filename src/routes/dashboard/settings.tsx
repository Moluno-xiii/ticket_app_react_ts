import { createFileRoute } from "@tanstack/react-router";
import useSetPageName from "../../hooks/useSetPageName";
import useAuth from "../../hooks/useAuth";
import type { FormEvent } from "react";
import Button from "../../components/UI/Button";

export const Route = createFileRoute("/dashboard/settings")({
  component: RouteComponent,
});

function RouteComponent() {
  useSetPageName("Ticketier | Dashboard (Settings)");

  return (
    <div className="flex flex-col gap-y-5 h-full w-full">
      <h2 className="text-xl md:text-2xl text-primary font-grotesk">
        Settings
      </h2>
      <UserDetailsForm />
    </div>
  );
}

const UserDetailsForm = () => {
  const { userDetails, updateUserDetails } = useAuth();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData) as { name: string };
    updateUserDetails(data.name);
  };
  return (
    <form
      action=""
      onSubmit={handleSubmit}
      className="flex flex-col gap-y-3 md:gap-y-6"
    >
      <div className="flex flex-col gap-y-2">
        <label htmlFor="name">Enter your name</label>
        <input
          type="text"
          className="border border-dark bg-white text-dark rounded-md px-3 py-2 min-w-2xs md:min-w-md active:border-primary focus:outline-none"
          name="name"
          required
          defaultValue={userDetails?.name}
        />
      </div>
      <Button title="Submit" type="submit" />
    </form>
  );
};
