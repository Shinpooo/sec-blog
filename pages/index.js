import PostCard from "../components/PostCard";
import getPosts from "../helpers/getPosts";

export default function Home({ posts }) {
  return (
    <div>
      <h1 className="mt-24 mb-12 font-bold text-3xl">Latest Posts</h1>
      {posts.map((post,id) => (
        <PostCard key={id}
          title={post.data.title}
          publishedOn={post.data.publishedOn}
          abstract={post.data.abstract}
          slug={post.slug}
        />
      ))}
    </div>
  );
}

export const getStaticProps = () => {
  const posts = getPosts();

  return {
    props: {
      posts,
    },
  };
};
