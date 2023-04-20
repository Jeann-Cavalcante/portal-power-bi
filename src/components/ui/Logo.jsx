import { ChartBar } from "@phosphor-icons/react";

const Logo = () => {
  return (
    <div className="bg-zinc-800 p-2 rounded-lg shadow-2xl flex flex-col items-center justify-center text-emerald-700">
      <ChartBar size={34} weight="fill" />
      <span className="text-lg font-black">Dashe's</span>
    </div>
  );
}

export default Logo;