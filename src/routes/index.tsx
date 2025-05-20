import { createFileRoute } from "@tanstack/react-router";
import CharacterSelectMenu from "../components/CharacterSelectMenu";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return <CharacterSelectMenu />;
}
