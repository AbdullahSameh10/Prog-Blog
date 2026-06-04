import { useFormattedDate } from "@Hooks/index";
import { type BlogDetailsTypes } from "@Types/index";
import Blog from "./Blog";

export default function BlogContent(props: { blogDetails: BlogDetailsTypes }) {
  const { blogDetails } = props;

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {blogDetails?.tags?.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-[#4b6bfb] px-[10px] py-1 text-sm text-white"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="mb-5 mt-4 text-4xl font-semibold text-[#181A2A]">
        {blogDetails?.title}
      </h1>

      <div className="flex items-center gap-6 text-sm font-medium text-[#97989F]">
        <div className="flex items-center gap-3">
          <img
            src={
              blogDetails?.user.profile_image || "../Assets/default-avatar.png"
            }
            alt={`${blogDetails?.user.name} avatar`}
            className="h-8 w-8 rounded-full object-cover"
            loading="lazy"
          />
          <span>{blogDetails?.user.name}</span>
        </div>
        <time dateTime={blogDetails?.created_at}>
          {useFormattedDate(blogDetails?.created_at)}
        </time>
      </div>
      {blogDetails?.cover_image && (
        <img
          src={blogDetails?.cover_image}
          alt="cover image"
          className="my-8 h-[462px] w-full rounded-xl"
        />
      )}
      <hr className="my-3" />
      <Blog html={blogDetails.body_html}/>
    </>
  );
}
