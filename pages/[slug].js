import { MDXRemote } from "next-mdx-remote";
import getPost from "../helpers/getPost.ts";
import getPosts from "../helpers/getPosts";
import { serialize } from "next-mdx-remote/serialize";
import Tweet from "../components/Tweet";
import { getTweets } from "../lib/twitter";
import Boop from '../components/Boop';
import Sparkles from '../components/Sparkles';


function Post({ data, content, tweets }) {
  const StaticTweet = ({ id }) => {

    // Use the tweets map that is present in the outer scope to get the content associated with the id passed as prop
    return <Tweet 
      text={tweets[id].text}
      id={tweets[id].id}
      author={tweets[id].author}
      media= { tweets[id].media }
      created_at={ tweets[id].created_at }
      public_metrics={tweets[id].public_metrics }
      referenced_tweets={tweets[id].referenced_tweets} />;
  };
  return (
    <div>
      <h1 className="font-bold text-6xl mt-24 mb-12">{data.title}</h1>
      {/* <time className="text-gray-500 italic dark:text-white">{data.publishedOn}</time> */}
      <article className="prose mt-12 dark:prose-invert">
        <MDXRemote {...content} components={{ StaticTweet, Boop, Sparkles }}/>
      </article>
    </div>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const posts = await getPosts();
  const paths = posts.map((post) => ({ params: { slug: post.slug } }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const post = await getPost(params.slug);
  const mdxSource = await serialize(post.content);
  const tweets = post.tweetIDs.length > 0 ? await getTweets(post.tweetIDs) : {};
  return {
    props: {
      data: post.data,
      content: mdxSource,
      tweets
    },
  };
};

