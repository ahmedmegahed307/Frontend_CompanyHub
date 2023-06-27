import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";

interface DeleteJobTypeProps {
  deleteModal: any;
  cancelRef: any;
  deleteJobType: any;
  deleteJobTypeId: string;
}

const DeleteJobType: React.FC<DeleteJobTypeProps> = ({
  deleteModal,
  cancelRef,
  deleteJobType,
  deleteJobTypeId,
}) => {
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={deleteModal.onClose}
      isOpen={deleteModal.isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
        <AlertDialogBody>
          Are you sure you want to discard all of your notes? 44 words will be
          deleted.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={deleteModal.onClose}>
            No
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              deleteJobType.mutate(deleteJobTypeId);
            }}
            ml={3}
          >
            Yes
          </Button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteJobType;
