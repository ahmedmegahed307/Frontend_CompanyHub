import {
  Flex,
  useDisclosure,
  Drawer,
} from "@chakra-ui/react";

import CreateResolution, { FormCreateValidation } from "./CreateResolution";
import UpdateResolution, { FormUpdateValidation } from "./UpdateResolution";
import DeleteResolution from "./DeleteResolution";
import ResolutionList from "./ResolutionList";

import useCreateResolution from "../../hooks/Resolution/useCreateResolution";
import useResolution from "../../hooks/Resolution/useResolution";
import useResolutionMutation from "../../hooks/Resolution/useResolutionMutation";
import useResolutionStore from "../../hooks/Resolution/ResolutionStore";
import { useEffect } from "react";
import { Resolutions } from "../../../../services/ResolutionService/resolution-service";
import usePageTitleStore from "../../../NavBar/hooks/PageTitleStore";

const ResolutionMain = () => {
  // get resolutionList
  const { data: resolutionList } = useResolution();
  const { updateResolutionId, updateResolutionInput, deleteResolutionId } =
    useResolutionStore();

  //create
  const createModal = useDisclosure();
  const createResolution = useCreateResolution(() => {
    createModal.onClose();
  });
  
  const handleCreateForm = async (data: FormCreateValidation) => {
      
    await createResolution({
      name: data.name,
    } as Resolutions);
    
   console.log("data", data);
  };

  //update
  const updateModal = useDisclosure();

  const updateResolution = useResolutionMutation(() => {
    updateModal.onClose();
  }, true);
  const handleUpdateForm = (data: FormUpdateValidation) => {
    console.log("data", data);
    // console.log("data", data);
    // updateResolution.mutate({
    //   name: data.name,
    //   id: updateResolutionId,
    //   isActive: true,
    // } as Resolutions);
  };

  //delete

  const deleteModal = useDisclosure();
  const pageTitleStore = usePageTitleStore();

  useEffect(() => {
    pageTitleStore.setPageTitle("Resolutions List");
  }, []);
  return (
    <>
      <Flex direction={"column"} w={"full"} alignItems="center">
        <ResolutionList
          data={resolutionList?.filter(item => item.isActive) ?? []}
          updateModal={updateModal}
          deleteModal={deleteModal}
          createModal={createModal}
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
        resolutionId={parseInt(deleteResolutionId)}
      />
    </>
  );
};

export default ResolutionMain;
