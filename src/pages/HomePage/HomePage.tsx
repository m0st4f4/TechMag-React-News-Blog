import { FeaturedPosts } from "@/components/Article/components/FeaturedPosts/FeaturedPosts.tsx";
import { LatestPosts } from "@/components/Article/components/LatestPosts/LatestPosts.tsx";

const HomePage = () => {
  return (
    <>
      <FeaturedPosts />
      <LatestPosts className="my-8" />
    </>
  );
};

export default HomePage;
