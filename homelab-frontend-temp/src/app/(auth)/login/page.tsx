import Link from "next/dist/client/link";

export default function LoginPage() {
  return (
    <div>
      <h3>This is (supposed to be) the Login Page.</h3>
      <br />
      <button>
        <Link href="/">Back</Link>
      </button>
    </div>
  );
}
