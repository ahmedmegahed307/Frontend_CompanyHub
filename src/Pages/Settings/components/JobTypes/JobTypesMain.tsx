import {
  Flex,
  Spacer,
  Button,
  Input,
  useDisclosure,
  Drawer,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

import useCreateJobType from "../../hooks/JobType/useCreateJobType";
import useJobType from "../../hooks/JobType/useJobType";
import useJobTypeMutation from "../../hooks/JobType/useJobTypeMutation";
import DeleteJobType from "./DeleteJobType";
import { JobType } from "../../../../services/JobTypeService/jobtype-service";
import JobTypeList from "./JobTypeList";
import CreateJobType, { FormCreateValidation } from "./CreateJobType";
import UpdateJobType, { FormUpdateValidation } from "./UpdateJobType";
import useJobTypeStore from "../../hooks/JobType/store";
import { BsSearch } from "react-icons/bs";
import ExportToExcel from "../../../Excel/ExportToExcel";
const JobTypesMain = () => {
  // get jobTypeList
  const { data: jobTypeList } = useJobType();
  console.log("dataJobType", jobTypeList);
  const { updateJobTypeId, updateJobTypeInput } = useJobTypeStore();
  //create

  const createJobTypeQuery = useCreateJobType(() => {
    createModal.onClose();
  });

  const createModal = useDisclosure();

  const handleCreateForm = (data: FormCreateValidation) => {
    createJobTypeQuery({
      name: data.name,
      jobSubTypeId: parseInt(data.jobSubTypeId),
    } as JobType);
  };

  //update
  const updateModal = useDisclosure();

  const updateJobType = useJobTypeMutation(() => {
    updateModal.onClose();
  }, true);
  const handleUpdateForm = (data: FormUpdateValidation) => {
    console.log("data", data);
    updateJobType.mutate({
      name: data.name,
      jobSubTypeId: parseInt(data.jobSubTypeId),
      id: updateJobTypeId,
    } as JobType);
  };

  //delete
  const deleteModal = useDisclosure();
  const [deleteJobTypeId, setDeleteJobTypeId] = useState(0);

  return (
    <>
      <Flex direction={"column"} alignItems="center" w={"full"}>
        <Flex w={"full"} direction={"row"}>
          <InputGroup width={"35%"} m={5}>
            <InputLeftElement pointerEvents="none">
              <BsSearch />
            </InputLeftElement>
            <Input
              borderRadius={"xl"}
              placeholder="Enter JobType Name"

              // onChange={(e) => setFiltering(e.target.value)}
            />
          </InputGroup>
          <Spacer />

          <ExportToExcel
            data={[]}
            headers={[]}
            keys={[]}
            sheetName={"JobTypes_List"}
          />

          <Button
            leftIcon={<AddIcon />}
            my={4}
            mx={2}
            variant="solid"
            size="md"
            onClick={() => {
              createModal.onOpen();
            }}
          >
            {"Create JobType"}
          </Button>
        </Flex>

        <JobTypeList
          jobTypeList={jobTypeList}
          setDeleteJobTypeId={setDeleteJobTypeId}
          updateModal={updateModal}
          deleteModal={deleteModal}
        />
      </Flex>

      {/* create */}
      <Drawer
        size={"lg"}
        onClose={createModal.onClose}
        isOpen={createModal.isOpen}
      >
        <CreateJobType onSubmit={handleCreateForm} />
      </Drawer>

      {/* Update modal  */}

      <Drawer
        size={"lg"}
        onClose={updateModal.onClose}
        isOpen={updateModal.isOpen}
      >
        <UpdateJobType
          onSubmit={handleUpdateForm}
          defaultValue={updateJobTypeInput}
        />
      </Drawer>

      {/* Delete Modal  */}
      <DeleteJobType
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        jobTypeId={deleteJobTypeId}
      />
    </>
  );
};

export default JobTypesMain;
