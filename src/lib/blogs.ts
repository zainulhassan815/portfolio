import blogs from "@/../blogs.json";

export type Blog = {
  title: string;
  description: string;
  url: string;
  tags: string[];
};

export const getBlogs = (): Blog[] => {
  return blogs;
};
