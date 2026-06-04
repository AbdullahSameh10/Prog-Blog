import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { BlogContent, LoadingBlog } from "@Elements/index";
import { type BlogDetailsTypes } from "@Types/index";

export default function Details() {
  const { id } = useParams<{ id: string }>();
  const [blogDetails, setBlogDetails] = useState<BlogDetailsTypes>();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async (id: string) => {
    setIsLoading(true);
    try {
      const response = await fetch(`https://dev.to/api/articles/${id}`);
      const { tags, title, user, created_at, cover_image, body_html } =
        await response.json();
      setBlogDetails({
        tags,
        title,
        user: {
          name: user.name,
          profile_image: user.profile_image,
        },
        created_at,
        cover_image,
        body_html,
      });
    } catch(error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchData(id);
    }
  }, [id]);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 500);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!blogDetails) return null;

  return (
    <div className="m-auto max-w-[800px] mt-5">
      <button 
        onClick={() => window.history.back()}
        className="mb-8 flex w-fit px-5 py-2 items-center gap-2 text-lg font-bold text-gray-800 rounded-md bg-gray-300 transition-colors hover:text-[#3248ab]"
      >
        ⇐ back
      </button>
      {isLoading? <LoadingBlog /> : <BlogContent blogDetails={blogDetails} />}
      {show && <div 
        className="fixed bottom-10 right-10 flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-zinc-300 text-4xl font-black transition-colors duration-300 hover:bg-zinc-400 hover:shadow-[5px_5px_10px_rgba(0,0,0,0.25)]"
        onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
      >
        <span className="mt-[-5px]">↑</span>
      </div>}
    </div>
  );
}
