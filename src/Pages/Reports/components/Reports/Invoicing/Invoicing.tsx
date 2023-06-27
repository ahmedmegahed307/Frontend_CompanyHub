import React, { useState } from "react";
import { Button, Center, HStack, Heading } from "@chakra-ui/react";

import InvoiceStatusSelect from "./InvoicingSearch/InvoiceStatusSelect";
import InvoiceDateTypeSelect from "./InvoicingSearch/InvoiceDateTypeSelect";
import InvoiceClientContractSelect from "./InvoicingSearch/InvoiceClientContractSelect";
import ClientSelect from "../../GeneralComponents/ClientSelect";
import DateFromSelect from "../../GeneralComponents/DateFromSelect";
import DateToSelect from "../../GeneralComponents/DateToSelect";

const Invoicing = () => {
  const [selectedClients, setSelectedClients] = useState<string[]>([]);

  const handleSelectedDateFrom = (date: Date | undefined) => {
    // Handle selected date from
  };

  const handleSelectedDateTo = (date: Date | undefined) => {
    // Handle selected date to
  };
  const handleSelectedClients = (clients: string[] | undefined) => {
    setSelectedClients(clients || []);
  };

  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Invoicing Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <InvoiceDateTypeSelect />
        <DateFromSelect onSelectedDateFrom={handleSelectedDateFrom} />
        <DateToSelect onSelectedDateTo={handleSelectedDateTo} />
        <InvoiceStatusSelect />
      </HStack>
      <HStack marginLeft={10} spacing={-32}>
        <ClientSelect onSelectedClients={handleSelectedClients} />
        <InvoiceClientContractSelect />
      </HStack>
      <Center>
        <Button
          mt={0}
          px={10}
          py={5}
          colorScheme="blue"
          variant={"solid"}
          size={"md"}
          bg={"#294c58"}
        >
          Search
        </Button>
      </Center>
    </>
  );
};

export default Invoicing;
