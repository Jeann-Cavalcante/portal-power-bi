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
import { useEffect } from "react";

const TableBi = ({dashs, title, users, thTile}) => {
  const ThTile = thTile.split(',');
  let items = dashs || users;
  useEffect(() => {
    const ThTile = thTile.split(',');
    console.log(ThTile);
  }, []);
  return (
    <div className="flex flex-col">
      <TableContainer>
        <Table variant="simple">
          <TableCaption>{title}</TableCaption>
          <Thead>
            <Tr>
              {ThTile?.map((item) => (
                <Th key={item}>{item}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {items?.map((item) => (
              <Tr key={item.id}>
                <Td>{item.name}</Td>
                <Td>{item.category ? item.category : item.email}</Td>
                {item.role ? <Td>{item.role}</Td> : (
                <Td>
                  <Link href={`/dashboards/${item.id}`}>
                    <div className="bg-emerald-700 p-2 inline-block rounded-md">
                      <ChartBar size={28} weight="bold" />
                    </div>
                  </Link>
                </Td>
                )}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableBi;
