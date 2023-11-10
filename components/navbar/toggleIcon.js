export default function ToggleIcon1(props) {
  return (
    <div
      className="Group1"
      style={{ width: 40, height: 27, position: "relative" }}
    >
      <div
        className="Rectangle1"
        style={{
          width: 35,
          height: 4.72,
          left: 0,
          top: 11.14,
          position: "absolute",
          background: "#37FF8B",
          borderRadius: 10,
        }}
      ></div>
      <div
        className="Rectangle4"
        style={{
          width: 35,
          height: 4.72,
          left: 0,
          top: 11.14,
          position: "absolute",
          background: "#37FF8B",
          borderRadius: 10,
        }}
      ></div>
      <div
        className="Rectangle3"
        style={{
          width: 35,
          height: 4.72,
          left: 0,
          top: 22.28,
          position: "absolute",
          background: "#37FF8B",
          borderRadius: 10,
        }}
      ></div>
      <div
        className="Rectangle2"
        style={{
          width: 35,
          height: 4.72,
          left: 0,
          top: 0,
          position: "absolute",
          background: "#37FF8B",
          borderRadius: 10,
        }}
      ></div>
    </div>
  );
}

export function ToggleIcon2() {
  return (
    <div className="Group2" style={{ width: 31.63, height: 31.63 }}>
      <div
        className="Rectangle5"
        style={{
          width: 40,
          height: 4.72,
          left: 0,
          top: 28.28,
          position: "absolute",
          transform: "rotate(-45deg)",
          transformOrigin: "0 0",
          background: "#37FF8B",
          borderRadius: 10,
        }}
      ></div>
      <div
        className="Rectangle6"
        style={{
          width: 40,
          height: 4.72,
          left: 3.34,
          top: 0,
          position: "absolute",
          transform: "rotate(45deg)",
          transformOrigin: "0 0",
          background: "#37FF8B",
          borderRadius: 10,
        }}
      ></div>
    </div>
  );
}
