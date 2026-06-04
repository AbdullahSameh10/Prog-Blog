export type BlogCardProps = {
  id: number;
  cover: string | null;
  title: string;
  slug: string;
  createdAt: string;
  tags: string[];
  publisher: string;
  avatar?: string;
};