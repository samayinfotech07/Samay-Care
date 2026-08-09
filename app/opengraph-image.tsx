import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #005E59 0%, #087F73 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "rgba(255,255,255,0.18)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 26, height: 26, borderRadius: "50%", border: "4px solid white" }} />
          </div>
          <span style={{ fontSize: 48, fontWeight: 700 }}>Samay Care</span>
        </div>
        <p style={{ fontSize: 30, marginTop: 28, opacity: 0.9 }}>Making Healthcare Convenient.</p>
        <p style={{ fontSize: 22, marginTop: 8, opacity: 0.75 }}>
          Meet CareBuddy — coming soon to your city.
        </p>
      </div>
    ),
    size
  );
}
