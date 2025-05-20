import { characters } from "../data/characters";
import { useState } from "react";

interface Character {
  id: number | string;
  name: string;
  video: string;
}

export default function CharacterSelectMenu() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayCount = 3;

  const getVisibleCharacters = (): Character[] => {
    if (characters.length === 0) {
      return [];
    }
    const visible: Character[] = [];
    for (let i = 0; i < displayCount; i++) {
      const charIndex = currentIndex + i;
      const actualIndex = ((charIndex % characters.length) + characters.length) % characters.length;
      visible.push(characters[actualIndex]);
    }
    return visible;
  };

  const visibleCharacters = getVisibleCharacters();

  const handleScroll = (event: React.WheelEvent) => {
    event.preventDefault(); 
    if (event.deltaY > 0) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (event.deltaY < 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <section
      className="min-h-screen bg-black flex flex-col justify-center overflow-hidden"
      onWheel={handleScroll}
    >
      <div className="w-full mx-auto group">
        {visibleCharacters.map((character) => (
          <div
            key={character.id.toString()}
            className="relative group/item overflow-hidden border-b-2 border-white/20"
          >
            <video
              src={character.video}
              className="absolute inset-0 w-full h-full object-cover object-[center_30%] opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 z-0"
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="grid grid-cols-2 items-start w-full py-8 transition-opacity duration-300 opacity-100 group-hover:opacity-30 group-hover/item:!opacity-100 relative z-10">
              <span className="text-white text-lg font-extralight pl-32 tracking-widest select-none">
                {String(character.id).padStart(2, "0")}
              </span>
              <span className="text-white text-[7vw] font-trajan text-right pr-32 leading-none select-none font-extralight">
                {character.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}