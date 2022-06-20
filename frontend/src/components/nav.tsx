import Link from "next/link";

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <li>
          <img className="inline nav-logo" src="/images/qunomedical-logo.svg" />
        </li>
        <li>
          <img className="inline w-4 mx-2" src="/images/search.svg" />
        </li>
      </ul>
    </nav>
  );
}
