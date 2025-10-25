import { Link } from "@tanstack/react-router";

const NotFound = () => {
  return (
    <div
      className="flex flex-col justify-center w-full font-inter items-center gap-y-3"
      aria-labelledby="Error 404 page"
    >
      <p className="text-red-600 text-xl md:text-2xl text-center">
        Error, page not found
      </p>
      <Link
        className="px-4 max-sm:text-sm py-2 bg-primary text-white w-fit rounded-md font-grotesk hover:bg-primary/80 transition-all duration-300"
        to="/"
      >
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
