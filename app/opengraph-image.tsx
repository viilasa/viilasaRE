import { ImageResponse } from "next/og";

export const alt =
  "Viilasa — WhatsApp lead qualifier and real estate automation for UAE teams";
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
          WhatsApp lead qualifier & real estate automation for Dubai & UAE
          brokerages — filter inquiries before they reach your phone.
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
          Lead qualification · UAE · Automation
        </div>
      </div>
    ),
    { ...size },
  );
}
