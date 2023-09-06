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
        {/* <img id="startpageimg" src="/images/vvlogo.png/" alt="vvlogo"></img> */}
        <h1 style={{
          fontFamily:'monospace'
        }} >Vision Vault</h1>

        <Link href="/login">
          <button className="signin-button">Login</button>
        </Link>
      </div>
    </div>
  );
}
