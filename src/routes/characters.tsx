import { createFileRoute } from "@tanstack/react-router";
import { characters } from "@/data/characters";
import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/characters")({
  component: RouteComponent,
});

function RouteComponent() {
  const [selectedWeaponType, setSelectedWeaponType] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const weaponTypes = useMemo(() => {
    const types = characters
      .filter((char) => char.weaponType)
      .map((char) => char.weaponType!);
    return ["all", ...Array.from(new Set(types))];
  }, []);

  const filteredCharacters = useMemo(() => {
    return characters.filter((character) => {
      const matchesWeapon =
        selectedWeaponType === "all" ||
        character.weaponType === selectedWeaponType;
      const matchesSearch =
        character.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        character.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesWeapon && matchesSearch;
    });
  }, [selectedWeaponType, searchTerm]);

  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-6xl font-trajan font-light mb-4 tracking-wider">
            Personnages
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez les héros de l'Expédition 33 qui luttent contre la
            Peintresse pour sauver l'avenir de Lumière
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 mb-12 justify-center items-center">
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Rechercher un personnage..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 backdrop-blur-sm"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex flex-wrap gap-2">
            {weaponTypes.map((type) => (
              <Button
                key={type}
                variant={selectedWeaponType === type ? "default" : "outline"}
                onClick={() => setSelectedWeaponType(type)}
                className="text-sm bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                {type === "all" ? "Toutes les armes" : type}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {filteredCharacters.map((character) => (
            <Link
              key={character.id}
              to="/character/$name"
              params={{ name: character.name }}
              className="group"
            >
              <Card className="bg-white/5 border-white/10 hover:border-white/30 transition-all duration-300 backdrop-blur-sm">
                <CardHeader className="relative overflow-hidden p-0">
                  <div className="aspect-[4/5] relative">
                    <img
                      src={character.portrait}
                      alt={character.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {character.video && (
                      <video
                        src={character.video}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="none"
                      />
                    )}
                    <div className="absolute bottom-2 left-2 right-2">
                      <CardTitle className="text-lg font-trajan text-white drop-shadow-lg">
                        {character.name}
                      </CardTitle>
                      {character.weaponType && (
                        <Badge
                          variant="secondary"
                          className="mt-1 bg-blue-600/80 hover:bg-blue-600 transition-colors duration-200 text-xs"
                        >
                          {character.weaponType}
                        </Badge>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-3">
                  <CardDescription className="text-gray-300 line-clamp-2 leading-relaxed text-sm">
                    {character.description}
                  </CardDescription>

                  {character.attributes && (
                    <div className="mt-3 pt-3 border-t border-white/10">
                      <div className="grid grid-cols-2 gap-1 text-xs">
                        <div className="flex justify-between">
                          <span className="text-gray-400">PV</span>
                          <span className="text-green-400 font-medium">
                            {character.attributes.health}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Att</span>
                          <span className="text-red-400 font-medium">
                            {character.attributes.attackPower}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Vit</span>
                          <span className="text-blue-400 font-medium">
                            {character.attributes.speed}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-400">Crit</span>
                          <span className="text-yellow-400 font-medium">
                            {character.attributes.criticalRate}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {character.startingSkills && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {character.startingSkills
                        .slice(0, 1)
                        .map((skill, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs bg-white/10 border-white/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      {character.startingSkills.length > 1 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-white/10 border-white/20"
                        >
                          +{character.startingSkills.length - 1}
                        </Badge>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {filteredCharacters.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-trajan mb-2">
              Aucun personnage trouvé
            </h3>
            <p className="text-gray-400">
              Essayez de modifier vos critères de recherche ou de réinitialiser
              les filtres
            </p>
            <Button
              onClick={() => {
                setSearchTerm("");
                setSelectedWeaponType("all");
              }}
              className="mt-4 bg-white/10 border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              Réinitialiser les filtres
            </Button>
          </div>
        )}

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-trajan mb-8">
            Aperçu de l'Expédition 33
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-blue-400 mb-2">
                {characters.length}
              </div>
              <div className="text-gray-300">Personnages</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {
                  Array.from(
                    new Set(
                      characters
                        .filter((c) => c.weaponType)
                        .map((c) => c.weaponType)
                    )
                  ).length
                }
              </div>
              <div className="text-gray-300">Types d'armes</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-red-400 mb-2">
                {characters
                  .filter((c) => c.attributes)
                  .reduce(
                    (sum, c) => sum + (c.attributes?.attackPower || 0),
                    0
                  )}
              </div>
              <div className="text-gray-300">Attaque totale</div>
            </div>
            <div className="bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
              <div className="text-3xl font-bold text-yellow-400 mb-2">
                {characters
                  .filter((c) => c.attributes)
                  .reduce((sum, c) => sum + (c.attributes?.health || 0), 0)}
              </div>
              <div className="text-gray-300">PV totaux</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
