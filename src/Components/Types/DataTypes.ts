export type DataTypes = {
  id: number;
  cover_image: string | null;
  title: string;
  slug: string;
  created_at: string;
  tag_list: string[];
  user: {
    name: string;
    profile_image: string;
  };
};