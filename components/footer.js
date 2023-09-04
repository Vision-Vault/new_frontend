

function Footer() {
  return (
    <div
      style={{
        background: "white",
        color: "black",
        height: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <p>&copy; {new Date().getFullYear()} VisionVault. All Rights Reserved.</p>
    </div>
  );
}

export default Footer;
