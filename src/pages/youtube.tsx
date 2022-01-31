import React, { useEffect } from "react";

function youtube() {
  useEffect(() => {
    window.location.href =
      "https://www.youtube.com/channel/UCiXfqEzOefUJZ_okGDffqBQ";
  }, []);

  return <div></div>;
}

export default youtube;
