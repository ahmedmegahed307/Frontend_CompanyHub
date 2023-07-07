import {
  Flex,
  Heading,
  Spacer,
  Button,
  useDisclosure,
  Drawer,
} from "@chakra-ui/react";
import { useState } from "react";
import { AddIcon } from "@chakra-ui/icons";

import CreateResolution, { FormCreateValidation } from "./CreateResolution";
import UpdateResolution, { FormUpdateValidation } from "./UpdateResolution";
import DeleteResolution from "./DeleteResolution";
import ResolutionList from "./ResolutionList";

import useCreateResolution from "../../hooks/Resolution/useCreateResolution";
import useResolution from "../../hooks/Resolution/useResolution";
import useResolutionMutation from "../../hooks/Resolution/useResolutionMutation";
import { Resolutions } from "../../../../services/ResolutionService/resolution-service";

const ResolutionMain = () => {
  // get resolutionList
  const { data: resolutionList } = useResolution();

  //create
  const createResolution = useCreateResolution(() => {
    createModal.onClose();
  });
  const createModal = useDisclosure();
  const handleCreateForm = async (data: FormCreateValidation) => {
    await createResolution({
      name: data.name,
    } as Resolutions);
  };

  //update

  const handleUpdateForm = (data: FormUpdateValidation) => {
    console.log("data", data);
    updateResolution.mutate({
      name: data.name,
      id: updateResolutionId,
      // isActive: true,
    } as Resolutions);
  };
  const updateResolution = useResolutionMutation(() => {
    updateModal.onClose();
  }, true);
  const updateModal = useDisclosure();
  const [updateResolutionInput, setUpdateResolutionInput] = useState("");
  const [updateResolutionId, setUpdateResolutionId] = useState<number>(0);

  //delete

  const [deleteResolutionId, setDeleteResolutionId] = useState<number>(0);
  const deleteModal = useDisclosure();

  return (
    <>
      <Flex
        direction={"column"}
        alignItems="center"
        maxW="7xl"
        mx="auto"
        px="5"
        w={"full"}
      >
        <Flex w={"full"} direction={"row"}>
          <Heading
            size={"lg"}
            w={"full"}
            py={10}
            textAlign={"left"}
            color={"#1396ab"}
          >
            Standard Resolution List
          </Heading>
          <Spacer />

          <Button
            onClick={() => {
              createModal.onOpen();
            }}
            leftIcon={<AddIcon />}
            my={10}
            px={10}
            py={5}
            colorScheme="blue"
            variant={"solid"}
            size={"sm"}
            bg={"#294c58"}
          >
            Add Resolution
          </Button>
        </Flex>

        <ResolutionList
          resolutionList={resolutionList}
          setUpdateResolutionInput={setUpdateResolutionInput}
          setUpdateResolutionId={setUpdateResolutionId}
          updateModal={updateModal}
          setDeleteResolutionId={setDeleteResolutionId}
          deleteModal={deleteModal}
        />
      </Flex>
      {/* create */}
      <Drawer
        onClose={createModal.onClose}
        isOpen={createModal.isOpen}
        size={"lg"}
      >
        <CreateResolution onSubmit={handleCreateForm} />
      </Drawer>

      {/* Update modal  */}

      <Drawer
        onClose={updateModal.onClose}
        isOpen={updateModal.isOpen}
        size={"lg"}
      >
        <UpdateResolution
          onSubmit={handleUpdateForm}
          defaultValue={updateResolutionInput}
        />
      </Drawer>

      {/* Delete Modal  */}
      <DeleteResolution
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.onClose}
        resolutionId={deleteResolutionId}
      />
    </>
  );
};

export default ResolutionMain;
