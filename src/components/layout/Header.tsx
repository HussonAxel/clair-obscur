import { Link } from "@tanstack/react-router";

export default function Header() {
  return (
    <header>
        <nav className="flex flex-row justify-between px-24 items-center border-b-2 border-white/20 text-white py-4">
            <Link to="/">
            <h2 className="font-trajan text-white text-2xl">
                clair obscur
            </h2>
            </Link>
                <ul className="flex flex-row gap-8">
                    <Link to="/characters">
                        <li>Weapons</li>
                    </Link>
                    <Link to="/skills">
                        <li>Skills</li>
                    </Link>
                    <Link to="/characters">
                        <li>Characters</li>
                    </Link>
                    <Link to="/pictos">
                        <li>Pictos</li>
                    </Link>
                </ul>
        </nav>
    </header>
  )
}
