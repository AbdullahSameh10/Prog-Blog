import { Logo, SearchBar } from "@Elements/index";
import { Link } from "react-router";

export default function Header() {
  return (
    <header className="flex justify-between px-11 py-8">
      <Logo />
      <Link to="/?page=1" className="text-lg font-bold text-[#4B6BFB] transition-colors hover:text-[#3248ab]">
        🏠︎ Home
      </Link>
      <SearchBar />
    </header>
  );
}
