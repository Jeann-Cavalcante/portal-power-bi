import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ModalDash = ({isOpen, onClose}) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data) {}

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent style={{ background: "#18181b", color: "#f4f4f5" }}>
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
                  focusBorderColor="#047857"
                  type="text"
                  placeholder="Digite o slug do dashboard"
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
    </>
  );
};

export default ModalDash;
