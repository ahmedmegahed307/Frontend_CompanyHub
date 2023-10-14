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
import { useEffect, useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

import DeleteJobType from "./DeleteJobType";
import { BsSearch } from "react-icons/bs";
import ExportToExcel from "../../../Excel/ExportToExcel";
import useJobTypeStore from "../../../../hooks/Settings/JobType/store";
import useCreateJobType from "../../../../hooks/Settings/JobType/useCreateJobType";
import useJobType from "../../../../hooks/Settings/JobType/useJobType";
import useJobTypeMutation from "../../../../hooks/Settings/JobType/useJobTypeMutation";
import CreateJobType, { FormCreateValidation } from "./CreateJobType";
import UpdateJobType, { FormUpdateValidation } from "./UpdateJobType";
import JobType from "../../../../models/JobType";
import JobTypeList from "./JobTypeList";
import usePageTitleStore from "../../../../hooks/NavBar/PageTitleStore";
const JobTypesMain = () => {
  const pageTitleStore = usePageTitleStore();

  useEffect(() => {
    pageTitleStore.setPageTitle("JobTypes List");
  }, []);
  // get jobTypeList
  const { data: jobTypeList } = useJobType();
  console.log("dataJobType", jobTypeList);
  const { updateJobTypeId, updateJobTypeInput } = useJobTypeStore();
  //create

  const createJobTypeQuery = useCreateJobType(() => {
    createModal.onClose();
  });

  const createModal = useDisclosure();

  const handleCreateForm = (data: FormCreateValidation) => {};

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
            Create JobType
          </Button>
        </Flex>

        <JobTypeList
          jobTypeList={jobTypeList || []}
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
