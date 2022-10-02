import Link from "next/link";

function Header() {
  return (
    <div className="flex justify-between my-8 items-center">
    <Link href="/">
      <a className="font-medium text-xl dark:text-white">Pooshin</a>
    </Link>
      <div>
        <a
          href="https://twitter.com/0xtestinprod"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-4 dark:text-white"
        >
          Twitter
        </a>
        <a
          href="https://github.com/shinpooo"
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
