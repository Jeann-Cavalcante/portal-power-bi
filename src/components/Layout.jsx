import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="bg-zinc-900 min-h-screen md:p-3 md:pb-3 text-zinc-100 flex">
      <Sidebar />

      <div className="flex flex-col min-h-full max-w-screen flex-1">
        <Header />
        <main className="bg-zinc-950 max-w-screen flex-1 md:rounded-2xl p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
