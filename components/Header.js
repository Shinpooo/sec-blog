import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
    <Link href="/">
      <a className="font-medium text-xl">Pooshin</a>
    </Link>
      <div>
        <a
          href="https://twitter.com/MarkSShenouda"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4"
        >
          Twitter
        </a>
        <a
          href="https://github.com/markshenouda"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Header;
