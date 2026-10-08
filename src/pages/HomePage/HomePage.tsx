import { FeaturedPosts } from "@/components/Article/components/FeaturedPosts/FeaturedPosts.tsx";
import { LatestPosts } from "@/components/Article/components/LatestPosts/LatestPosts.tsx";

export const HomePage = () => {
  return (
    <>
      <FeaturedPosts />
      <LatestPosts className="my-8" />
    </>
  );
};
