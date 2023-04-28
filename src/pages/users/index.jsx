import Layout from "@/components/Layout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import TableBi from "@/components/TableBi";
import { PrismaClient } from "@prisma/client";

const Users = ({ users }) => {
  return (
    <Layout>
      <h1 className="text-3xl mb-6 font-bold">Usuários</h1>

      <div className="rounded-xl w-full p-2 sm:p-4 bg-zinc-900 lg:max-w-[1200px] mx-auto">
        <TableBi
          title="Todos usuários ativos"
          users={users}
          thTile="Nome, Email, Role"
        />
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

  const users = await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
    },

    where: {
      active: true,
    },
  });

  return {
    props: {
      session,
      users,
    },
  };
}

export default Users;