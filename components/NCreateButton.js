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
    <button id="start-button" onClick={scrollToNCreate}>
      Start here
    </button>
  );
}
