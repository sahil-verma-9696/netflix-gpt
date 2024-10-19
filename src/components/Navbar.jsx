import { Link } from "react-router-dom";

function Navbar() {
  return (

    <nav className="w-full h-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-between items-center px-6">
      {/* left part */}
      <ul className="flex gap-8 items-center">
        <h1 className="logo text-white font-extrabold text-3xl [text-shadow:_0_2px_4px_black]">
          Netflix-Gpt
        </h1>
      </ul>

      {/* right part */}
      <ul>
        
        <Link to={"/sign"} className="font-bold text-white text-xl border-2 px-2 py-1 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-40 hover:[text-shadow:_0_2px_4px_black] ">
          Sign in
        </Link>
      </ul>
    </nav>

  );
}

export default Navbar;
