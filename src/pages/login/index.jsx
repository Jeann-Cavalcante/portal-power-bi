import Logo from "@/components/ui/Logo";
import { Input } from "@chakra-ui/react";
import { getServerSession } from "next-auth";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { authOptions } from "../api/auth/[...nextauth]";
import { toast } from "react-toastify";
import { Spinner } from "@phosphor-icons/react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const {data: session} = useSession();
  const router = useRouter();

  
  async function handleLogin (e) {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Preencha todos os campos');
      return;
    }
    setLoading(true);
    
    const request = await signIn('credentials', {redirect: false, email, password});
    
    if (request?.error) {
      toast.error("Usuário ou senha inválidos");
      setLoading(false);
      return;
    }
    
    router.push('/');
    setLoading(false);

  }
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
              disabled={loading}
              placeholder="Digite seu E-mail"
              borderColor="#a1a1aa"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label>Senha</label>
            <Input
              focusBorderColor="#047857"
              type="password"
              name="password"
              disabled={loading}
              placeholder="Digite sua senha"
              borderColor="#a1a1aa"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="flex justify-end">
            <Link href="/registration">
              Não possui conta ? Faça seu cadastro
            </Link>
          </div>

          <button
            className="bg-emerald-700 flex gap-3 justify-center items-center p-2 hover:bg-emerald-900 duration-300 rounded-md text-lg mt-4 font-bold"
            type="submit"
            disabled={loading}  
            onClick={handleLogin}
          >
            {loading && <Spinner className="animate-spin mr-2" size={30} />}
            <span>

            Entrar
            </span>
          </button>
        </form>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);

  if (session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
export default Login;