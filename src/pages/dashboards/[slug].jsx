import Layout from "@/components/Layout";
import { PrismaClient } from "@prisma/client";

const Dash = ({dash}) => {

  return (
    <Layout>
      <iframe
        title="Serviços Financeiros"
        width="100%"
        height="100%"
        src={dash?.slug}
        frameborder="0"
        allowFullScreen="true"
      ></iframe>
    </Layout>
  );
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();

  const dashs = await prisma.dash.findMany({
    select: {
      id: true,
      name: true,
      category: true,
      slug: true,
    },
  });
  console.log("🚀 ~ file: [slug].jsx:24 ~ getStaticPaths ~ dashs:", dashs)


  const paths = dashs.map((dash) => {
    return {
    params: { slug: dash.id.toString() },
    }
  });
  console.log("🚀 ~ file: [slug].jsx:31 ~ paths ~ paths:", paths);

  return {
    paths,
    fallback: true,  
}
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();

  const dash = await prisma.dash.findUnique({
    where: {
      id: Number(params.slug),
    },
    select: {
      id: true,
      name: true,
      category: true,
      slug: true,
    },
  });
  console.log("🚀 ~ file: [slug].jsx:53 ~ getStaticProps ~ dash:", dash)  

  return {
    props: {
      dash,
    },
  };
}

export default Dash;