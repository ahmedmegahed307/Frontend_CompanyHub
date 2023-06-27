import React, { useEffect, useState } from "react";
import {
  Tabs,
  TabPanels,
  TabPanel,
  Flex,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Card,
} from "@chakra-ui/react";
import { DataStore } from "aws-amplify";
import { Jobs } from "../../../models";

interface Job {
  id: string;
  jobNumber: string | null | undefined;
  adress: {
    name: string;
  } | null;
  createdAt: string;
}

interface DraggableRowProps {
  children: React.ReactNode;
  job: Job | undefined;
}

const DraggableRow: React.FC<DraggableRowProps> = ({ children, job }) => {
  const handleDragStart = (e: React.DragEvent<HTMLTableRowElement>) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(job));
  };

  const rowStyle = {
    cursor: "move",
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#f8f8f8",
  };

  return (
    <Tr draggable onDragStart={handleDragStart} style={rowStyle}>
      {children}
    </Tr>
  );
};

const SchedulerJobs = () => {
  const [jobsList, setJobsList] = useState<Job[]>([]); // Use Job[] instead of Jobs[]

  useEffect(() => {
    const sub = DataStore.observeQuery(Jobs).subscribe(({ items }) => {
      const jobsData = items as Job[]; // Explicit casting to Job[] type
      setJobsList(jobsData);
    });

    return () => {
      sub.unsubscribe();
    };
  }, []);

  return (
    <div style={{ width: "180vh" }}>
      <Flex
        direction="column"
        alignItems="center"
        maxW="7xl"
        mx="auto"
        px="4"
        w="full"
      >
        <Tabs w="full">
          <Flex w="full" direction="row"></Flex>
          <TabPanels pt={5} h="50vh">
            <TabPanel>
              <TableContainer borderRadius="xl">
                <Card p={0} borderRadius="" variant="outline">
                  <Table variant="simple">
                    <Thead bg="gray.100" rounded="xl">
                      <Tr>
                        <Th>Request No.</Th>
                        <Th>Client</Th>
                        <Th>Site</Th>
                        <Th>Description</Th>
                        <Th>Logged</Th>
                        <Th></Th>
                      </Tr>
                    </Thead>
                    <Tbody>
                      {jobsList &&
                        jobsList.map((job, index) => (
                          <DraggableRow key={job.id} job={job}>
                            <Td>{job.jobNumber ?? "00" + index}</Td>
                            <Td>Clint1</Td>
                            <Td>inches</Td>
                            <Td>{job.adress?.name}</Td>
                            <Td>{job.createdAt}</Td>
                            <Td> </Td>
                          </DraggableRow>
                        ))}
                    </Tbody>
                  </Table>
                </Card>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </div>
  );
};

export default SchedulerJobs;
