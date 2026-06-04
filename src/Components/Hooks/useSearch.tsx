import { useEffect, useMemo } from "react";
import useDataContext from "./useDataContext";
import type { DataTypes } from "@Types/index";

export default function useSearch(query: string) {
  const { allBlogs, setAllBlogs, setIsLoading } = useDataContext();

  useEffect(() => {
    const loadAllBlogs = async () => {
      if (allBlogs?.length) return;

      setIsLoading(true);
      const res = await fetch("https://dev.to/api/articles?per_page=1000");
      const data: DataTypes[] = await res.json();

      const mapped = data.map((blog) => ({
        id: blog.id,
        cover: blog.cover_image,
        title: blog.title,
        slug: blog.slug,
        created_at: blog.created_at,
        tag_list: blog.tag_list,
        publisher: blog.user.name,
        avatar: blog.user.profile_image,
      }));

      setAllBlogs(mapped);
      setIsLoading(false);

    };

    loadAllBlogs();
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return allBlogs;

    return allBlogs?.filter((blog) =>
      blog.title.toLowerCase().includes(query.toLowerCase()),
    );
  }, [query, allBlogs]);

  return { results };
}
