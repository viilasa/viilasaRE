import { ImageResponse } from "next/og";

export const alt =
  "Viilasa — Real estate website builder and luxury brokerage web design";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          paddingLeft: 72,
          paddingRight: 72,
        }}
      >
        <div
          style={{
            fontSize: 58,
            fontWeight: 600,
            color: "#f5f5f0",
            letterSpacing: -2,
          }}
        >
          Viilasa
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 32,
            fontWeight: 400,
            color: "#a3a3a3",
            maxWidth: 960,
            lineHeight: 1.4,
          }}
        >
          Real estate website builder & luxury web design for brokerages and
          developers — fast builds, WhatsApp‑ready conversion.
        </div>
        <div
          style={{
            marginTop: 42,
            fontSize: 20,
            fontWeight: 600,
            color: "#c9a84c",
            textTransform: "uppercase",
            letterSpacing: "0.22em",
          }}
        >
          Dubai aesthetic · Worldwide delivery
        </div>
      </div>
    ),
    { ...size },
  );
}
