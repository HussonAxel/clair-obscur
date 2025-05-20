import { createFileRoute } from '@tanstack/react-router'
import { characters } from '@/data/characters'
import { useParams } from '@tanstack/react-router'
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
  return <div>Hello "/character/character/$name"!</div>
}
