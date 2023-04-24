import Layout from "@/components/Layout";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="">

        <h1>Home Page</h1>
        </div>
      </Layout>
    </div>
  )
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