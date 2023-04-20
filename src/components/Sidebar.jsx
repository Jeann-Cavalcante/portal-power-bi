import Logo from "./ui/Logo";

const Sidebar = () => {
  return (
    <aside className="h-full flex bg-zinc-900 w-1/5 max-w-[180px]">
      <div>
        <Logo />
      </div>
    </aside>
  );
}

export default Sidebar;