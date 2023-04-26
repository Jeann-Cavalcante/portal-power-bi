import Image from "next/image";
import Logo from "./ui/Logo";
import Link from "next/link";
import { menuItems } from "@/utils/menuItems";
import { useRouter } from "next/router";

const Sidebar = () => {
  const menu = menuItems;
  const router = useRouter().pathname;
  return (
    <aside className="h-screen hidden lg:flex flex-col bg-zinc-900 w-1/4 max-w-[300px] items-center p-4">
      <div className="fixed">
        <div>
          <Logo />
        </div>

        <div className="my-8 hidden md:flex">
          <img
            width={60}
            height={60}
            className="rounded-full "
            src="https://avatars.githubusercontent.com/u/83246183?v=4"
          />
        </div>

        <nav className="w-full">
          <ul className="flex flex-col gap-1 mt-4 text-zinc-400">
            {menu.map((item) => (
              <li
                key={item.id}
                className={`
              ${router === item.path ? "bg-zinc-700" : ""}
              hover:bg-zinc-700 duration-300 rounded-md py-3 px-2`}
              >
                <Link className="flex gap-x-2 items-center" href={item.path}>
                  {item.icon}
                  <span className=" font-semibold">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
