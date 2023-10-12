import React from "react";

function BackgroundImage() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://source.unsplash.com/random/900×700/?teaching)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%"
      }}
    />
  );
}

export default BackgroundImage;
