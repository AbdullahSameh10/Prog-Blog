import type { BlogsTypes } from "./BlogsTypes";

export type CardsContainerPropsTypes = {
  blogs: BlogsTypes[] | undefined;
  isLoading: boolean;
};