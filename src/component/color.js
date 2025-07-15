import React, { useState } from "react";

function FavoriteColor() {
  const [color, setColor] = useState("red");

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("pink")}>Pink</button>
      <button onClick={() => setColor("green")}>Green</button>
    </>
  );
}

export default FavoriteColor; // ✅ THIS LINE is required
