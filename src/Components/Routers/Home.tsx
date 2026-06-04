import { useCallback, useEffect } from "react";
import { CardsContainer } from "@Layouts/index";
import { useDataContext, useSearch } from "@Hooks/index";
import { type DataTypes } from "@Types/index";
import { NoResults, PageNumber } from "@Elements/index";

export default function Home() {
  const {
    blogs,
    setBlogs,
    isLoading,
    setIsLoading,
    setSearchParams,
    query,
    page,
  } = useDataContext();

  const { results } = useSearch(query);

  const fetchData = useCallback(
    async (page: number) => {
      setIsLoading(true);
      try {
        window.scrollTo({ top: 0 });
        const response = await fetch(
          `https://dev.to/api/articles?per_page=24&page=${page}`,
        );
        const data: DataTypes[] = await response.json();

        return data.map((blog) => ({
          id: blog.id,
          cover: blog.cover_image,
          title: blog.title,
          slug: blog.slug,
          created_at: blog.created_at,
          tag_list: blog.tag_list,
          publisher: blog.user.name,
          avatar: blog.user.profile_image,
        }));
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [setIsLoading],
  );

  useEffect(() => {
    const loadBlogs = async () => {
      if (results) {
        setBlogs(results);
      } else {
        const result = await fetchData(page);
        setBlogs(result);
      }
    };

    loadBlogs();
  }, [page, fetchData, setBlogs, results]);

  useEffect(() => {
    const start = (page - 1) * 24;
    const end = start + 24;
    setBlogs(results?.slice(start, end));
  }, [results, page, setBlogs]);

  const nextPageHandler = (): void => {
    setSearchParams({ page: String(page + 1) });
  };

  const previousPageHandler = (): void => {
    setSearchParams({ page: String(page - 1) });
  };

  return (
    <div className="m-auto mb-10 flex max-w-[1216px] flex-col">
      {results?.length && query ? (
        <p className="mx-10 text-lg font-bold">
          There are {results?.length} results:
        </p>
      ) : null}
      
      <CardsContainer blogs={blogs} isLoading={isLoading} />

      {!blogs?.length && query && !results?.length && <NoResults />}

      <footer className="flex justify-between px-11">
        <button
          className="rounded-md border-none bg-sky-900 px-5 py-2 font-semibold text-white outline-none transition-colors hover:bg-sky-950 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-300"
          onClick={previousPageHandler}
          disabled={isLoading || page < 2}
        >
          ⇦ Previous
        </button>

        <PageNumber
          currentPage={page}
          totalPages={results?.length ? Math.ceil(results.length / 24) : 1}
          onPageChange={(p) => setSearchParams({ page: String(p) })}
        />

        <button
          className="rounded-md border-none bg-sky-900 px-5 py-2 font-semibold text-white outline-none transition-colors hover:bg-sky-950 disabled:cursor-not-allowed disabled:bg-gray-700 disabled:text-gray-300"
          onClick={nextPageHandler}
          disabled={isLoading || (blogs && blogs.length < 24) || page >= Math.ceil((results?.length || 0) / 24)}
        >
          Next ⇨
        </button>
      </footer>
    </div>
  );
}
