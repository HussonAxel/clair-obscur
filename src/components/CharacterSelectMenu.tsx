import { characters } from "../data/characters";
import { useState } from "react";

// Define a basic Character type for clarity, assuming structure from usage
interface Character {
  id: number | string; // Assuming id can be number or string based on usage
  name: string;
  video: string;
}

export default function CharacterSelectMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 3;

  // Function to get the characters to display, handling wrap-around
  const getVisibleCharacters = (): Character[] => {
    if (characters.length === 0) {
      return [];
    }
    const visible: Character[] = [];
    for (let i = 0; i < displayCount; i++) {
      const charIndex = currentIndex + i;
      // Handles positive and negative currentIndex correctly for wrapping
      const actualIndex =
        ((charIndex % characters.length) + characters.length) %
        characters.length;
      visible.push(characters[actualIndex]);
    }
    return visible;
  };

  const visibleCharacters = getVisibleCharacters();

  const handleScroll = (event: React.WheelEvent) => {
    event.preventDefault(); // Prevent page from scrolling
    if (event.deltaY > 0) {
      // Scroll down
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (event.deltaY < 0) {
      // Scroll up
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section
      className="min-h-screen bg-black flex flex-col justify-center overflow-hidden"
      onWheel={handleScroll}
    >
      <div className="w-full mx-auto group">
        {visibleCharacters.map((character, idx) => {
          const isCenter = idx === 1; // L'élément central est l'élément actif

          const containerScale = isCenter ? "scale-100" : "scale-90";
          const containerOpacity = isCenter ? "opacity-100" : "opacity-60";
          const containerZIndex = isCenter ? "z-10" : "z-0";

          const videoOpacityClass = isCenter
            ? "opacity-100"
            : "opacity-0 group-hover/item:opacity-100";

          const idFontSizeClass = isCenter ? "text-lg" : "text-base";
          const nameFontSizeClass = isCenter
            ? "text-[3vw] md:text-[4vw]"
            : "text-[2.5vw] md:text-[3.5vw]";

          return (
            <div
              key={character.id.toString()}
              className={`relative group/item overflow-hidden border-b-2 border-white/20 transition-all duration-300 ${containerScale} ${containerOpacity} ${containerZIndex} w-full`}
            >
              <video
                src={character.video}
                className={`absolute inset-0 w-full h-full object-cover object-[center_30%] ${videoOpacityClass} transition-opacity duration-500 z-0`}
                autoPlay
                loop
                muted
                playsInline // Important pour l'autoplay sur mobile
              />
              <div className="grid grid-cols-2 items-start w-full py-8 transition-opacity duration-300 opacity-100 group-hover:opacity-30 group-hover/item:!opacity-100 relative z-10">
                <span
                  className={`text-white ${idFontSizeClass} font-extralight pl-8 md:pl-16 tracking-widest select-none transition-all duration-300`}
                >
                  {String(character.id).padStart(2, "0")}
                </span>
                <span
                  className={`text-white ${nameFontSizeClass} font-trajan text-right pr-8 md:pr-16 leading-none select-none font-extralight transition-all duration-300`}
                >
                  {character.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}