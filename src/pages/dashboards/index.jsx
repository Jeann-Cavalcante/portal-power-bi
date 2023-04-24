import Layout from "@/components/Layout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";

const Dashboards = () => {
  // console.log(session);
  return (
    <Layout>
      <h1>Dashboard</h1>

      <div>
        <div className="flex justify-between items-center">
          <h2>Relatórios</h2>
          <button>
            Cadastrar
          </button>
        </div>
      </div>
    </Layout>
  );
}

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

  return {
    props: {
      session,
    },
  };
}

export default Dashboards;
