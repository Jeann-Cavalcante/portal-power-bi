import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen md:p-3 md:pb-3 min-w-screen overflow-hidden text-zinc-100 flex">
      <Sidebar />

      <div className="flex flex-col min-h-screen flex-1 overflow-hidden">
        <Header />
        <main className="bg-zinc-950 min-h-[90%] flex flex-col w-full md:rounded-2xl overflow-hidden p-2 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
