import Link from "next/link";

export default function StartPage() {

  return (
    <div className="start-page">
      <div className="content">
        <div>
        <h1 style={{
          fontFamily: 'monospace'
        }} >VISION VAULT</h1>
        <p>Where you can realize your dream or bring convenience</p>
        <p>to running your money</p>
        </div>
        <Link href="/login">
          <button className="signin-button">Login</button>
        </Link>
      </div>
    </div>
  );
}
