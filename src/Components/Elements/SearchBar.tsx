import { debounce } from "lodash";
import { useDataContext, useSearch } from "@Hooks/index";
import { useMemo, useEffect, type ChangeEvent } from "react";
import { useNavigate } from "react-router";

export default function SearchBar() {
  const { query, setQuery, setSearchParams } = useDataContext();
  const navigator = useNavigate();

  const debouncedSetQuery = useMemo(
    () => debounce((val: string) => {
      setQuery(val);
      setSearchParams({ page: "1" });
      navigator("/");
    }, 500), [setQuery, setSearchParams, navigator]
  );

  useEffect(() => {
    return () => debouncedSetQuery.cancel();
  }, [debouncedSetQuery]);

  const onSearchChanged = (e: ChangeEvent<HTMLInputElement>) => {
    debouncedSetQuery(e.target.value);
  };

  useSearch(query);

  return (
    <div className="relative">
      <input
        onChange={onSearchChanged}
        type="text"
        name="searchBar"
        id="searchBar"
        placeholder="Search"
        className="h-9 w-[166px] rounded-md border-none bg-[#F4F4F5] pl-4 pr-9 outline-none"
      />
      <img
        src="/search-outline.svg"
        alt="search icon"
        className="absolute right-2 top-[10px]"
      />
    </div>
  );
}