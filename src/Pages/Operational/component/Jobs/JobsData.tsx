import { Stat, StatLabel, StatNumber, StatHelpText } from "@chakra-ui/stat";

const JobsData = () => {
  return (
    <>
      <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
        <StatLabel fontWeight={"extrabold"}>Open Jobs</StatLabel>
        <StatNumber fontSize={"xl"} fontWeight={"extrabold"} color={"#416D77"}>
          0
        </StatNumber>
        <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
      </Stat>
      <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
        <StatLabel fontWeight={"extrabold"}>Pending Jobs</StatLabel>
        <StatNumber fontSize={"xl"} fontWeight={"extrabold"} color={"#416D77"}>
          0
        </StatNumber>
        <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
      </Stat>
      <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
        <StatLabel fontWeight={"extrabold"}>Assigned Jobs</StatLabel>
        <StatNumber fontSize={"xl"} fontWeight={"extrabold"} color={"#416D77"}>
          0
        </StatNumber>
        <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
      </Stat>
      <Stat size={"xs"} border={"1px"} borderColor={"gray.200"} p={2}>
        <StatLabel fontWeight={"extrabold"}>Resolved Jobs</StatLabel>
        <StatNumber fontSize={"xl"} fontWeight={"extrabold"} color={"#416D77"}>
          0
        </StatNumber>
        <StatHelpText fontSize={"sm"}>Comparison (0)</StatHelpText>
      </Stat>
    </>
  );
};

export default JobsData;
