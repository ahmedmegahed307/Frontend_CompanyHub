import { Button, Center, HStack, Heading } from "@chakra-ui/react";
import DateFromSelect from "../GeneralComponents/DateFromSelect";
import DateToSelect from "../GeneralComponents/DateToSelect";
import EngineerSelect from "../../Scheduler/EngineerSelect";
import DateTypeSelect from "../GeneralComponents/DateTypeSelect";
import ClientSelect from "../GeneralComponents/ClientSelect";
import InvoiceStatusSelect from "./InvoicingSearch/InvoiceStatusSelect";
import { DateType } from "../../StaticData/StaticData";
import InvoiceDateTypeSelect from "./InvoicingSearch/InvoiceDateTypeSelect";
import InvoiceClientContractSelect from "./InvoicingSearch/InvoiceClientContractSelect";

const Invoicing = () => {
  return (
    <>
      <Heading m={5} color={"#1396ab"} size={"lg"}>
        Invoicing Report
      </Heading>
      <HStack marginTop={10} marginLeft={10}>
        <InvoiceDateTypeSelect />
        <DateFromSelect />
        <DateToSelect />
        <InvoiceStatusSelect />
      </HStack>
      <HStack marginLeft={10} spacing={-32}>
        <ClientSelect />
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
