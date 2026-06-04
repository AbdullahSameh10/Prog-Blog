import { useSearchParams } from "react-router";
import { useState } from "react";
import { DataContext } from "./DataContext";
import { type BlogsTypes } from "@Types/index";

export function DataProvider({ children }: { children: React.ReactNode }) {
  const [blogs, setBlogs] = useState<BlogsTypes[]>();
  const [allBlogs, setAllBlogs] = useState<BlogsTypes[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  const page = Number(searchParams.get("page") || 1);

  return (
    <DataContext.Provider
      value={{
        blogs,
        setBlogs,
        allBlogs,
        setAllBlogs,
        isLoading,
        setIsLoading,
        searchParams,
        setSearchParams,
        query,
        setQuery,
        page,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
