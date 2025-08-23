"use client";

import { useState } from "react";
import AboutText from "./AboutText";
import Badge from "./Badge";
import Background from "./Background";
import ExperienceSection from "./ExperienceSection";

let nextId = 1;

const Info = () => {
  const [badges, setBadges] = useState([
    { id: nextId++, fallen: false, fadeIn: false },
  ]);

  const handleBadgeClick = (id: number) => {
    setBadges((prev) =>
      prev.map((b) => (b.id === id ? { ...b, fallen: true } : b))
    );

    setTimeout(() => {
      setBadges((prev) => prev.filter((b) => b.id !== id));
    }, 2000);

    setTimeout(() => {
      setBadges((prev) => [
        ...prev,
        { id: nextId++, fallen: false, fadeIn: true },
      ]);

      setTimeout(() => {
        setBadges((prev) =>
          prev.map((b) => (b.fadeIn ? { ...b, fadeIn: false } : b))
        );
      }, 1000);
    }, 2500);
  };

  return (
    <div className="md:w-[70%] w-[85vw] md:mt-16 animate__animated animate__fadeIn">
      <AboutText />

      <div className="flex flex-col md:flex-row items-start justify-between w-full mt-10 h-[400px]">
        {/* Badge container */}
        <div className="flex items-center justify-center min-h-[200px]">
          {badges.map((badge) => (
            <Badge key={badge.id} {...badge} onClick={handleBadgeClick} />
          ))}
        </div>

        <Background />
      </div>

      <div className="mt-20">
        <ExperienceSection />
      </div>
    </div>
  );
};

export default Info;
