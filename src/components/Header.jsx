import { List, SignOut } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";


const Header = () => {
  const router = useRouter();

  function handleLogout () {
    signOut();
    router.push('/login');
    
  }
  return (
    <header className="p-4 flex justify-between items-center">
      <List
        className="text-zinc-600 cursor-pointer duration-300 hover:text-emerald-700"
        size={32}
        weight="fill"
      />
      <h1 className="md:text-4xl text-2xl text-center font-black">
        <span className="text-emerald-700">P</span>
        ortal <span className="text-emerald-700">P</span>ower{" "}
        <span className="text-emerald-700">B</span>i
      </h1>

      <div
      onClick={handleLogout}
      className="text-zinc-600 cursor-pointer flex font-semibold gap-x-2 duration-300 hover:text-emerald-700">
        <SignOut size={34} weight="fill" />
        <span className="text-xl font-bold hidden md:flex">Sair</span>
      </div>
    </header>
  );
};

export default Header;
