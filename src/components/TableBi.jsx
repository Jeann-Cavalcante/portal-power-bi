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

const TableBi = () => {
  return (
    <div className="flex flex-col">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Todos os dashboards</TableCaption>
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
  );
};

export default TableBi;
