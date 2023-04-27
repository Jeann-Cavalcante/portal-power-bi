import { List, SignOut, X } from "@phosphor-icons/react";
import { useRouter } from "next/router";
import { signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import Menu from "./Menu";

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);
  const router = useRouter();

  function handleLogout() {
    signOut();
    router.push("/login");
  }

  useEffect(() => {
    setMenuActive(false);
  }, [router.pathname]);
  return (
    <header className="flex flex-col relative duration-500">
      <div className="px-4 h-[80px] flex justify-between items-center bg-zinc-900 z-10">
        <div>
          <List
            onClick={() => setMenuActive(!menuActive)}
            className="text-zinc-600 cursor-pointer duration-300 hover:text-emerald-700 lg:hidden block "
            size={32}
            weight="fill"
          />
        </div>
        <h1 className="md:text-4xl text-2xl text-center font-black">
          <span className="text-emerald-700">P</span>
          ortal <span className="text-emerald-700">P</span>ower{" "}
          <span className="text-emerald-700">B</span>i
        </h1>

        <div
          onClick={handleLogout}
          className="text-zinc-600 cursor-pointer flex font-semibold gap-x-2 duration-300 hover:text-emerald-700"
        >
          <SignOut size={34} weight="fill" />
          <span className="text-xl font-bold hidden md:flex">Sair</span>
        </div>
      </div>

      <div
        className={`${
          menuActive ? "flex" : "hidden"
        } absolute border-b border-y-zinc-500 top-[80px] bg-zinc-900 w-full flex flex-col items-center pb-8 transition-all duration-500 transform z-10 `}
      >
        <div>
          <div
            onClick={() => setMenuActive(false)}
            className="absolute top-0 right-0 mt-4 mr-4"
          >
            <X size={38} weight="fill" />
          </div>
          <Menu />
        </div>
      </div>
      {menuActive && (
        <div
          onClick={() => setMenuActive(false)}
          className="bg-black absolute bg-opacity-50 flex h-screen flex-1 w-full z-9"
        ></div>
      )}
    </header>
  );
};

export default Header;
