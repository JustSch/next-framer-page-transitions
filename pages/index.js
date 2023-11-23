import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <Link href="/explore" legacyBehavior>
        <a className="explore-btn">EXPLORE</a>
      </Link>
    </div>
  );
}
