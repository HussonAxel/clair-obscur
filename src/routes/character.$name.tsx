import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/character/$name')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/character/character/$name"!</div>
}
