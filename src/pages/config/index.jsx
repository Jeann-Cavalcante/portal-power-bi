import Layout from "@/components/Layout";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { PrismaClient } from "@prisma/client";
import { useForm } from "react-hook-form";
import { Input, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Config = ({ user }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    console.log("🚀 ~ file: index.jsx:24 ~ onSubmit ~ user:", user);
    console.log("🚀 ~ file: index.jsx:24 ~ onSubmit ~ data:", data);
    setLoading(true);
    if(user.email === data.email && !data.password && user.name === data.name ){      
      toast.error("Nenhum dado foi alterado");
      setLoading(false);
      return;
    }
    const dataItem = {
      id: user.id,
      name: data.name,
      email: data.email,
    }
    if(data.password) {
      dataItem.password = data.password;
    }

    const response = await fetch("/api/patch/update", {
      headers: { "Content-Type": "application/json" },
      method: "PATCH",
      body: JSON.stringify(dataItem),
    });

    const dataResponse = await response.json();

    if (dataResponse.error) {
      toast.error(dataResponse.message);
      setLoading(false);
      return;
    }

    window.location.reload();

    toast.success(dataResponse.message);
    setLoading(false);
  }

  useEffect(() => {
    setValue("name", user.name);
    setValue("email", user.email);
  }, []);

  return (
    <Layout>
      <h1 className=" text-center text-2xl mb-4 font-bold">
        Editar informações do usuário
      </h1>
      <div className="h-full flex justify-center items-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="  w-full max-w-[1000px]  bg-zinc-900 px-5 py-12 rounded-lg "
        >
          <h2 className="text-center mb-8 text-2xl font-bold">Meus dados</h2>
          <div className="max-w-[600px] flex flex-col justify-center gap-4 mx-auto">
            <div>
              <label>Nome</label>
              <Input
                focusBorderColor="#047857"
                type="text"
                id="name"
                placeholder="Digite seu Nome"
                borderColor="#a1a1aa"
                {...register("name", {
                  required: "campo obrigatorio",
                  minLength: {
                    value: 3,
                    message: "O nome deve conter pelo menos 3 caracteres",
                  },
                })}
              />
              <div className="h-[30px]">
                {errors?.name && (
                  <span className="text-red-500 text-sm">
                    {errors.name.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label>Email</label>
              <Input
                focusBorderColor="#047857"
                type="email"
                placeholder="Digite seu E-mail"
                borderColor="#a1a1aa"
                {...register("email", { required: "Campo obrigatório" })}
              />
              <div className="h-[30px]">
                {errors.email && (
                  <span className="text-red-500 text-sm">
                    {errors.email?.message}
                    {errorEmail?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label>Nova Senha</label>
              <Input
                focusBorderColor="#047857"
                type="password"
                placeholder="Digite sua senha"
                borderColor="#a1a1aa"
                {...register("password", {
                  minLength: {
                    value: 3,
                    message: "O nome deve conter pelo menos 3 caracteres",
                  },
                })}
              />
              <div className="h-[30px]">
                {errors?.password && (
                  <span className="text-red-500 text-sm">
                    {errors.password.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label>Confirmar a senha</label>
              <Input
                focusBorderColor="#047857"
                type="password"
                placeholder="Digite sua senha novamente"
                borderColor="#a1a1aa"
                {...register("passwordConfirmation", {
                  validate: (value) =>
                    value === watch("password") || "As senhas não são iguais",
                })}
              />
              <div className="h-[30px]">
                {errors?.passwordConfirmation && (
                  <span className="text-red-500 text-sm">
                    {errors.passwordConfirmation.message}
                  </span>
                )}
              </div>
            </div>

            <button
              className="bg-emerald-700 p-2 flex justify-center items-center gap-2 hover:bg-emerald-900 duration-300 rounded-md text-lg mt-4 font-bold"
              type="submit"
              disabled={loading}
            >
              {loading && <Spinner size="sm" />}

              <span className="">Cadastrar</span>
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user.id,
    },
    select: {
      id: true,
      name: true,
      email: true,
    },
  });

  return {
    props: {
      session,
      user,
    },
  };
}

export default Config;
