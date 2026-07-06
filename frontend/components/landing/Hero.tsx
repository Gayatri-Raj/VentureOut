import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">

      <Image
        src="/Images/hero.png"
        alt="VentureOut"
        fill
        priority
        className="object-cover"
      />

      {/* Invisible button over "Plan My Trip" */}

      <Link
        href="/dashboard"
        aria-label="Plan My Trip"
        className="
          absolute
          left-[5.5%]
          bottom-[24.5%]
          h-[9.5%]
          w-[19%]
          rounded-2xl
          z-20
        "
      />

    </section>
  );
}