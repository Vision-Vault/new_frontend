import React from "react";

export default function NCreateButton() {
  const scrollToNCreate = () => {
    const ncreateButton = document.getElementById("ncreate");
    if (ncreateButton) {
      ncreateButton.scrollIntoView({
behavior: "smooth",
        block: "start",
        inline: "start",
        duration: 2000,
       });
    }
  };

  return (
    <>
      <div id="">
        <button
          id="start-button33"
          onClick={scrollToNCreate}
        >
          Start here
        </button>
      </div>
    </>
  );
}
