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
import { ChartBar } from "@phosphor-icons/react";
import Link from "next/link";

const TableBi = ({dashs}) => {
  return (
    <div className="flex flex-col">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Todos os dashboards</TableCaption>
          <Thead>
            <Tr>
              <Th>Nome</Th>
              <Th>Categoria</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {dashs.map((dash) => (
              <Tr key={dash.id}>
                <Td>{dash.name}</Td>
                <Td>{dash.category}</Td>
                <Td>
                  <Link href={`/dashboards/${dash.id}`}>
                    <div className="bg-emerald-700 p-2 inline-block rounded-md" >
                      <ChartBar size={28} weight="bold" />
                    </div>
                  </Link>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableBi;
