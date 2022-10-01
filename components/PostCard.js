import Link from "next/link";

function PostCard({ title, publishedOn, abstract, slug }) {
  return (
    <div className="my-4 py-4 border-b">
      <h2 className="font-bold text-2xl my-4">{title}</h2>
      <time className="text-gray-400">{publishedOn}</time>
      <p className="mt-4 italic">{abstract}</p>

      <Link href="/[slug]" as={`/${slug}`}>
        <a className="text-blue-500 mt-4 mb-2 block">Read more</a>
      </Link>
    </div>
  );
}

export default PostCard;
