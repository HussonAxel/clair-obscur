interface CharacterBiographyProps {
  characterName: string;
  characterPortrait: string;
  characterBiography: string;
  characterWeapon?: string;
  characterStats?: {
    health: number;
    attackPower: number;
    speed: number;
    defense: number;
    criticalRate: number;
  };
  characterStartingSkills?: string[];
}

export default function CharacterBiography({
  characterName,
  characterPortrait,
  characterBiography,
  characterStats,
  characterStartingSkills,
}: CharacterBiographyProps) {
  return (
    <article className="flex flex-row gap-16 text-white/80 w-3/4 m-auto my-32">
      <img
        src={characterPortrait}
        alt={characterName}
        className="w-2/5 h-auto"
      />
      <div>
        <div>
          <h2 className="text-6xl font-trajan">{characterName}</h2>
        </div>
        <hr className="opacity-25 my-4" />
        <div>
          <h3 className="text-2xl font-trajan pb-4">Biography</h3>
          <p>{characterBiography}</p>
        </div>
        <hr className="opacity-25 my-4" />
        <div>
          <h3 className="text-2xl font-trajan pb-4">Base Stats</h3>
          {Object.entries(characterStats ?? {}).map(([name, value]) => (
            <div key={name} className="grid grid-cols-2 mb-2">
              <p>{name}</p>
              <p>{value}</p>
            </div>
          ))}
        </div>
        <hr className="opacity-25 my-4" />
        <div>
          <h3 className="text-2xl font-trajan pb-4">Starting Skills</h3>
          <p>{characterStartingSkills?.join(", ")}</p>
        </div>
      </div>
    </article>
  );
}
