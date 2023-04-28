import Logo from "./ui/Logo";
import Menu from "./Menu";

const Sidebar = () => {

  return (
    <aside className="h-screen hidden lg:flex flex-col bg-zinc-900 w-1/4 max-w-[300px] items-center p-4">
      <div className="fixed">
        <div className="mb-14">
          <Logo />
        </div>

        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
