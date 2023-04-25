import Layout from "@/components/Layout";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../api/auth/[...nextauth]";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

const Dashboards = () => {
  // console.log(session);
  return (
    <Layout>
      <h1 className="mb-8 text-2xl font-bold">Dashboards</h1>

      <div className="rounded-xl p-4 bg-zinc-900">
        <div className="flex mb-10 justify-between items-center">
          <h2 className="text-xl font-semibold">Relatórios</h2>
          <button className="bg-emerald-700 p-3 rounded-xl font-semibold">
            Cadastrar
          </button>
        </div>

        <TableContainer>
          <Table variant="simple">
            <TableCaption>Todos os dash </TableCaption>
            <Thead>
              <Tr>
                <Th>Nome</Th>
                <Th>Categoria</Th>
                <Th isNumeric>Link</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>inches</Td>
                <Td>millimetres (mm)</Td>
                <Td isNumeric>25.4</Td>
              </Tr>
              <Tr>
                <Td>feet</Td>
                <Td>centimetres (cm)</Td>
                <Td isNumeric>30.48</Td>
              </Tr>
              <Tr>
                <Td>yards</Td>
                <Td>metres (m)</Td>
                <Td isNumeric>0.91444</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
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
