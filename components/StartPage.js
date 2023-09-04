import Link from "next/link";

export default function StartPage() {
//   if (localStorage.getItem("id")) {
//     localStorage.removeItem("id");
//   }
  return (
    <div className="start-page">
      <video autoPlay loop muted className="background-video">
        <source src="/images/backgroundVideo.mp4" type="video/mp4" />
      </video>
      <div className="content">
        <Link  href="/">
          <button className="signin-button">LogIn</button>
        </Link>
      </div>
    </div>
  );
}
