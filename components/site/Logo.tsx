import Image from "next/image";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const isLight = variant === "light";

  return (
    <span className="inline-flex items-center gap-2.5">
      <Image src="/brand/icon.png" alt="" width={40} height={36} className="h-9 w-10 shrink-0" />
      <span className="flex flex-col leading-tight">
        <span className="text-lg font-bold tracking-tight">
          <span className={isLight ? "text-white" : "text-navy"}>Samay</span>{" "}
          <span className={isLight ? "text-white/90" : "text-teal"}>Care</span>
        </span>
        <span className={`text-[11px] font-medium ${isLight ? "text-white/75" : "text-text-muted"}`}>
          Time. Care. Always.
        </span>
      </span>
    </span>
  );
}
