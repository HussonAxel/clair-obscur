import { createFileRoute } from '@tanstack/react-router'
import { characters } from '@/data/characters'
import { useParams } from '@tanstack/react-router'
import FilmGallery from '@/components/ui/FilmGallery'
import CharacterBiography from '@/components/CharacterBiography'
export const Route = createFileRoute('/character/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  const { name } = useParams({ from: '/character/$name' })
  const character = characters.find(c => c.name === name)
  console.log(character)
  if (!character) {
    return <div>Character not found</div>
  }
  return (
    <div>
      <CharacterBiography 
        characterName={character.name} 
        characterPortrait={character.portrait} 
        characterBiography={character.description} 
        characterWeapon={character.weaponType!} 
        characterStats={character.attributes!} 
        characterStartingSkills={character.startingSkills!} 
      />
      <FilmGallery />
    </div>
  )
}
