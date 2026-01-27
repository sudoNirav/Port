import Link from "next/dist/client/link";

export default function HomePage() {
  return (
    <div>
      <h1>Hi, this is the lander (for now) </h1>
      <button>
        <Link href="/login">Go to login</Link>
      </button>
    </div>
  );
}
