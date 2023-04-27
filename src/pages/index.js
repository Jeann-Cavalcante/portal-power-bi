import Layout from "@/components/Layout";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]";
import { PrismaClient } from "@prisma/client";
import logoCard from "../assets/card.svg";
import Image from "next/image";
import Link from "next/link";

export default function Home({ dashs }) {
  return (

    <Layout>
      <h1 className="text-center text-2xl font-bold">Todos os dash's</h1>
      <div className="flex gap-8 mt-8 flex-wrap items-center justify-center" >
        {dashs?.map((dash) => (
          <div className="h-[300px] w-[300px] bg-zinc-900 rounded-b-md hover:translate-y-1.5 duration-300" key={dash.id}>
            <Link href={`/dashboards/${dash.id}`}>
              <div className="bg-white rounded-t-md p-4">
                <Image src={logoCard} alt="Logo" />
              </div>
              <div className="p-2">
                <h2 className="text-center text-xl font-semibold">{dash.name}</h2>
                <p className="text-center text-sm text-gray-500">{dash.category}</p>
              </div>
            </Link>
          </div>

        ))}
      </div>
    </Layout>

  )
}

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  const prisma = new PrismaClient();

  const dashs = await prisma.dash.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      slug: true,
    },
  });
  console.log("🚀 ~ file: index.js:37 ~ getServerSideProps ~ dashs:", dashs)

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
      dashs,
    },
  };
}