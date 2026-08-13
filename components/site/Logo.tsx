import Image from "next/image";

export function Logo() {
  return (
    <Image
      src="/brand/logo.png"
      alt="Samay Care — Making Healthcare Convenient"
      width={1442}
      height={350}
      priority
      className="h-11 w-auto sm:h-12"
    />
  );
}
