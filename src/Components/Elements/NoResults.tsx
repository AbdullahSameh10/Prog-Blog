import { type NoResultsPropsTypes } from "@Types/index";

export default function NoResults ({
  title = "No results found",
  description = "We couldn’t find anything matching your search. Try adjusting your filters or keywords.",
  actionLabel,
  onAction,
}: NoResultsPropsTypes) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center py-16 text-center"
    >

      <div className="mb-4 text-5xl opacity-60">🔍</div>

      <h2 className="mb-2 text-xl font-semibold text-gray-800">
        {title}
      </h2>

      <p className="mb-6 max-w-md text-sm text-gray-500">
        {description}
      </p>

      {actionLabel && onAction && (
        <button
          onClick={onAction}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          {actionLabel}
        </button>
      )}
    </div>
  );
};