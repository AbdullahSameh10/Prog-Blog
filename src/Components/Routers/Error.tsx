import { Link, useLocation } from "react-router";

export default function Error() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 text-center">

      <h1 className="text-7xl font-extrabold text-sky-900">404</h1>

      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Page not found
      </h2>
      
      <p className="mt-2 max-w-md text-gray-600">
        Sorry, the page <span className="font-mono text-gray-800">{location.pathname}</span> doesn’t exist or may have been moved.
      </p>


      <div className="mt-6 flex gap-4">
        <Link
          to="/"
          className="rounded-md bg-sky-900 px-5 py-2 font-medium text-white transition hover:bg-sky-950"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="rounded-md border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}