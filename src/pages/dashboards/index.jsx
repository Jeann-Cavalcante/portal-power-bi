import Layout from "@/components/Layout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import { useDisclosure } from "@chakra-ui/react";
import ModalDash from "@/components/ModalDash";
import TableBi from "@/components/TableBi";
import { PrismaClient } from "@prisma/client";

const Dashboards = ({dashs}) => {
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <Layout>
      <div className="w-full  overflow-auto">
        <h1 className="mb-8 text-2xl font-bold">Dashboards</h1>

        <div className="rounded-xl w-full p-2 sm:p-4 bg-zinc-900 lg:max-w-[1200px] mx-auto">
          <div className="flex mb-10 justify-between items-center">
            <h2 className="text-xl font-semibold">Relatórios</h2>
            <button
              onClick={onOpen}
              className="bg-emerald-700 p-3 rounded-xl font-semibold"
            >
              Cadastrar
            </button>
          </div>

          <TableBi
            title="Todos Dashboards"
            thTile="Nome, Categoria, Link"
            dashs={dashs}
          />
        </div>

        {isOpen && <ModalDash isOpen={isOpen} onClose={onClose} />}
      </div>
    </Layout>
  );
};

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  console.log(session);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: true,
      },
    };
  }

  const prisma = new PrismaClient();

  const dashs = await prisma.dash.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      slug: true,
    }
  });


  return {
    props: {
      session,
      dashs,
    },
  };
}

export default Dashboards;
