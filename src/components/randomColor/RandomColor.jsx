import { useState } from "react";

export default function RandomColor() {
  const [typeColor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function utilityRandomColor(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[utilityRandomColor(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = utilityRandomColor(256);
    const g = utilityRandomColor(256);
    const b = utilityRandomColor(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        margintop: "10px",
      }}
    >
      <button onClick={() => setTypeColor("hex")}>Create HEX Color</button>
      <button onClick={() => setTypeColor("rgb")}>Create RGB Color</button>
      <button
        onClick={
          typeColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "40px",
          fontWeight: "bold",
          marginTop: "50px",
        }}
      >
        {`${typeColor}\n${color}`}
      </div>
    </div>
  );
}
