import Logo from "@/components/ui/Logo";
import { Input, Spinner } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Registration = () => {
  const [errorEmail, setErrorEmail] = useState({ error: false, message: "" });
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    setLoading(true);
    const body = {
      name: data.name,
      email: data.email,
      password: data.password,
    };

    const response = await fetch("/api/post/users/createuser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }).catch((err) => {
      toast.error("Erro ao cadastrar");
      setLoading(false);
    });

    const result = await response.json();
    if (result.error) {
      toast.error(result.message);
      if(response.status === 409){
        setErrorEmail({ error: true, message: result.message });
      }
      setLoading(false);
      return;
    }

    data.name = "";
    data.email = "";
    data.password = "";
    data.passwordConfirmation = "";

    toast.success("Cadastro realizado com sucesso");
    setLoading(false);
    router.push("/login");
  }

  return (
    <div className="min-h-screen bg-zinc-950 p-2 text-zinc-200 flex justify-center items-center">
      <main className="bg-zinc-900 p-6 rounded-md w-full max-w-[500px] flex flex-col items-center">
        <h1 className="text-3xl mb-6 font-bold">Faça login</h1>
        <div className="w-[120px]">
          <Logo />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex mt-3 flex-col w-full"
        >
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
              {errors.email ||
                (errorEmail && (
                  <span className="text-red-500 text-sm">
                    {errors.email?.message}
                    {errorEmail?.message}
                  </span>
                ))}
            </div>
          </div>

          <div>
            <label>Senha</label>
            <Input
              focusBorderColor="#047857"
              type="password"
              placeholder="Digite sua senha"
              borderColor="#a1a1aa"
              {...register("password", {
                required: "campo obrigatório",
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
                required: "Campo Obrigatório",
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

          <div className="flex justify-end">
            <Link href="/login">Ja tem uma conta? Faça login</Link>
          </div>

          <button
            className="bg-emerald-700 p-2 flex justify-center items-center gap-2 hover:bg-emerald-900 duration-300 rounded-md text-lg mt-4 font-bold"
            type="submit"
            disabled={loading}
          >
            {loading && <Spinner size="sm" />}

            <span className="">Cadastrar</span>
          </button>
        </form>
      </main>
    </div>
  );
};

export default Registration;
