import { Link, useSearchParams } from "react-router";
import { useFormattedDate } from "@Hooks/index";
import { type BlogCardProps } from "@Types/index";

export default function Card(props: BlogCardProps) {
  const { id, cover, tags, title, slug, avatar, publisher, createdAt } = props;
  const [searchParams] = useSearchParams();
  const page = searchParams.get("page") || "1";
  const formattedDate = useFormattedDate(createdAt);

  return (
    <Link
      to={`${id}/${slug}?page=${page}`}
      className="flex w-[392px] cursor-pointer flex-col gap-4 rounded-xl border border-[#E8E8EA] p-4 transition-shadow duration-300 hover:shadow-md"
    >
      {cover ? (
        <img
          src={cover}
          alt={`Cover image for ${title}`}
          loading="lazy"
          className="h-60 w-[360px] rounded-xl"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-60 w-full items-center justify-center rounded-xl bg-gradient-to-br from-[#EEF1FF] to-[#E4E7FF] text-center text-sm font-medium text-[#4B6BFB]"
        >
          No cover image
        </div>
      )}

      <div className="flex flex-1 flex-col justify-between gap-5">
        <div className="flex flex-col gap-4">
          <div className="flex flex-wrap gap-1">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-md bg-[#4b6bfb0d] px-3 py-[6px] text-sm font-medium text-[#4B6BFB]"
              >
                {tag}
              </span>
            ))}
          </div>

          <h2
            title={title}
            className="line-clamp-2 text-2xl font-semibold leading-7 text-[#181A2A]"
          >
            {title}
          </h2>
        </div>

        <div className="flex items-center justify-between text-sm font-medium text-[#97989F]">
          <div className="flex items-center gap-3">
            <img
              src={avatar || "/default-avatar.png"}
              alt={`${publisher} avatar`}
              className="h-8 w-8 rounded-full object-cover"
              loading="lazy"
            />
            <span>{publisher}</span>
          </div>
          <time dateTime={createdAt}>{formattedDate}</time>
        </div>
      </div>
    </Link>
  );
}
