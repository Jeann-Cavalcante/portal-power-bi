import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({children}) => {
  return (
    <div className="bg-zinc-900 h-screen w-screen p-3 overflow-hidden text-zinc-100 flex">
      <Sidebar />
      
      <div className="flex flex-col min-h-full max-w-screen flex-1">
        <Header />
        <main className="bg-zinc-950 overflow-auto scrollbar-hidden flex-1 rounded-2xl">
          {children}
        </main>
      </div>

    </div>
  );
}

export default Layout;