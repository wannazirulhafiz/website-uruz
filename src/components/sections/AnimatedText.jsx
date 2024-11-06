import { useState, useEffect } from "react";

export const AnimatedText = () => {
  const phrases = [
    "Jimat Masa, Produktiviti Meningkat",
    "Segalanya dalam Satu Platform",
    "Membuat Keputusan Dengan Lebih Baik",
    "Kerja Lebih Sistematik & Teratur",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setIsVisible(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length);
        setIsVisible(true);
      }, 500);
    }, 3000);

    return () => clearInterval(textInterval);
  }, [phrases.length]);

  return (
    <div className="py-8 bg-nusuk-light">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-center text-2xl">
          <span className="font-bold text-nusuk-primary">URUZ</span>
          <span className="mx-1"></span>
          <span
            className={`text-nusuk-dark/80 font-semibold transition-opacity duration-500 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {phrases[currentIndex]}
          </span>
        </div>
      </div>
    </div>
  );
};