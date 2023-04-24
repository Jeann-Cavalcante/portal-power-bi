import Layout from "@/components/Layout";
import { authOptions } from "../api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

const Config = () => {
  return (
    <Layout>
      <h1>Config</h1>
    </Layout>
  );
}

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

  return {
    props: {
      session,
    },
  };
}

export default Config;