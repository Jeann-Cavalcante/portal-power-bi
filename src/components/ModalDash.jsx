import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Input,
  Spinner,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const ModalDash = ({isOpen, onClose}) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {
    try {
      
      setLoading(true);
      const response = await fetch("/api/post/dashs/create", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      })
  
      const api = await response.json();
  
      if (api.error) {
        toast.error(api.message);
          if(api.message === "Slug já cadastrado"){
            setError("slug", {
              type: "manual",
              message: api.message,
            });
  
          }
        setLoading(false);
  
        return;
      }
  
      toast.success(api.message);
  
      setLoading(false);
  
      onClose();
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar o dashboard");
      setLoading(false);      
    }
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="rgba(0, 0, 0, 0.9)" />
      <ModalContent
        style={{
          background: "#18181b",
          color: "#f4f4f5",
          width: "600px",
          maxWidth: "90%",
        }}
      >
        <ModalHeader>Novo Dashboard</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex my-3 flex-col w-full"
          >
            <div>
              <label>Nome</label>
              <Input
                style={errors?.name && { borderColor: "#ff0000" }}
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
              <label>Categoria</label>
              <Input
                style={errors?.category && { borderColor: "#ff0000" }}
                focusBorderColor="#047857"
                type="text"
                placeholder="Ex: Vendas, Marketing, Financeiro"
                borderColor="#a1a1aa"
                {...register("category", { required: "Campo obrigatório" })}
              />
              <div className="h-[30px]">
                {errors.category && (
                  <span className="text-red-500 text-sm">
                    {errors.category?.message}
                  </span>
                )}
              </div>
            </div>

            <div>
              <label>Slug</label>
              <Input
                style={errors?.slug && { borderColor: "#ff0000" }}
                focusBorderColor="#047857"
                type="text"
                placeholder="Digite a url do seu dashboard"
                borderColor="#a1a1aa"
                {...register("slug", {
                  required: "campo obrigatório",
                  minLength: {
                    value: 3,
                    message: "O nome deve conter pelo menos 3 caracteres",
                  },
                })}
              />
              <div className="h-[30px]">
                {errors?.slug && (
                  <span className="text-red-500 text-sm">
                    {errors.slug.message}
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
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ModalDash;
