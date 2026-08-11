import { readFileSync } from "fs";
import { join } from "path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const iconBase64 = readFileSync(join(process.cwd(), "public/brand/icon.png")).toString("base64");
  const iconSrc = `data:image/png;base64,${iconBase64}`;

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
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "rgba(255,255,255,0.92)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img src={iconSrc} width={48} height={43} alt="" />
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
