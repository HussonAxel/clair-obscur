import { characters } from "../data/characters";

export default function CharacterSelectMenu() {
  return (
    <section className="min-h-screen bg-black flex flex-col justify-center">
      <div className="w-full max-w-[1600px] mx-auto group">
        {characters.map((character) => (
          <div
            key={character.id}
            className="relative group/item overflow-hidden border-b-2 border-white/20"
          >
            <video
              src={character.video}
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 z-0"
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
                {character.image}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
