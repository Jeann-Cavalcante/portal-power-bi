import Layout from "@/components/Layout";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]";
import TableBi from "@/components/TableBi";
import { PrismaClient } from "@prisma/client";

const Users = ({ users }) => {
  return (
    <Layout>
      <h1>Usuários</h1>

      <div>
        <TableBi 
        title='Todos usuários ativos' 
        users={users}
        thTile='Nome, Email, Role' />
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

  console.log(users);

  return {
    props: {
      session,
      users,
    },
  };
}

export default Users;