import type { SetURLSearchParams } from 'react-router';
import { createContext } from "react";
import type { BlogsTypes } from '@Types/index';

type DataContextTypes = {
    allBlogs: BlogsTypes[] | undefined;
    setAllBlogs: React.Dispatch<React.SetStateAction<BlogsTypes[] | undefined>>;
    blogs: BlogsTypes[] | undefined;
    setBlogs: React.Dispatch<React.SetStateAction<BlogsTypes[] | undefined>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
    searchParams: URLSearchParams;
    setSearchParams: SetURLSearchParams;
    query: string;
    setQuery: React.Dispatch<React.SetStateAction<string>>;
    page: number;
}

export const DataContext = createContext<DataContextTypes | undefined>(undefined);