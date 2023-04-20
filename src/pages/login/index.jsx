import Logo from "@/components/ui/Logo";
import { Button, Input, TagLabel } from "@chakra-ui/react";
import Link from "next/link";

const Login = () => {
  return (
    <div className="min-h-screen bg-zinc-950 p-2 text-zinc-200 flex justify-center items-center">
      <main className="bg-zinc-900 p-6 rounded-md w-full max-w-[500px] flex flex-col items-center">
        <h1 className="text-3xl mb-6 font-bold">Faça login</h1>
        <div className="w-[120px]">
          <Logo />
        </div>

        <form className="flex gap-y-4 mt-3 flex-col w-full">
          <div>
            <label>Email</label>
            <Input
              focusBorderColor="#047857"
              type="email"
              placeholder="Digite seu E-mail"
              borderColor="#a1a1aa"
            />
          </div>

          <div>
            <label>Senha</label>
            <Input
              focusBorderColor="#047857"
              type="password"
              placeholder="Digite sua senha"
              borderColor="#a1a1aa"
            />
          </div>

          <div className="flex justify-end">
            <Link href="/registration">
              Não possui conta ? Faça seu cadastro
            </Link>
          </div>

          <button
            className="bg-emerald-700 p-2 hover:bg-emerald-900 duration-300 rounded-md text-lg mt-4 font-bold"
            type="submit"
          >
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
};

export default Login;
