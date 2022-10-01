import fs from "fs";
import path from "path";
import matter from "gray-matter";

const TWEET_RE = /<StaticTweet\sid="[0-9]+"\s\/>/g;


const getPost = (slug: any) => {
  const fileContents = fs.readFileSync(path.join(`posts/${slug}.mdx`), "utf8");
  const { data, content } = matter(fileContents);
  const tweetMatch = content.match(TWEET_RE);
  const tweetIDs = tweetMatch?.map((mdxTweet) => {
    const id = mdxTweet.match(/[0-9]+/g)![0];
    return id;
  });
  return {
    data,
    content,
    tweetIDs: tweetIDs || []
  };
};

export default getPost;
