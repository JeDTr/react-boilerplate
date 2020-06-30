import React, { useState } from "react";

const Hello = () => {
  const [text] = useState("Helloo!");

  return <h1>{text}</h1>;
};

export default Hello;
