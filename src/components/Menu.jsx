import { menuItems } from "@/utils/menuItems";
import Link from "next/link";
import { useRouter } from "next/router";

const Menu = () => {
  const router = useRouter().pathname;
  return (
    <nav className="w-full">
      <ul className="flex flex-col gap-1 mt-4 text-zinc-400">
        {menuItems?.map((item) => (
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
  );
}

export default Menu;