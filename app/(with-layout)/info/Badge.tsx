"use client";

import Image from "next/image";

interface BadgeProps {
  id: number;
  fallen: boolean;
  fadeIn: boolean;
  onClick: (id: number) => void;
}

const Badge = ({ id, fallen, fadeIn, onClick }: BadgeProps) => {
  return (
    <Image
      key={`${id}-${fallen}`} // Add this key
      src="/badge.png"
      width={300}
      height={300}
      onClick={() => onClick(id)}
      className={`md:w-80 w-24 cursor-pointer animate__animated transition-all duration-300 ${
        fallen
          ? "animate__hinge invert-[0.3]"
          : fadeIn
          ? "animate__fadeIn"
          : "hover:invert-[0.2]"
      }`}
      alt="Badge"
    />
  );
};

export default Badge;
