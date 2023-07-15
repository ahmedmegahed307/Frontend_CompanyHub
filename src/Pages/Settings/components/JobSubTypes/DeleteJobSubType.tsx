import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import useJobSubTypeMutation from "../../hooks/JobSubType/useJobSubTypeMutation";

interface DeleteJobSubTypeProps {
  isOpen: boolean;
  jobSubTypeId: number;
  onClose: () => void;
}

const DeleteJobSubType = ({
  onClose,
  isOpen,
  jobSubTypeId,
}: DeleteJobSubTypeProps) => {
  const cancelRef = useRef<HTMLButtonElement>(null);
  const deleteJobSubType = useJobSubTypeMutation(() => {
    onClose();
  }, false);
  return (
    <AlertDialog
      motionPreset="slideInBottom"
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <AlertDialogOverlay />

      <AlertDialogContent>
        <AlertDialogHeader>Discard Changes?</AlertDialogHeader>
        <AlertDialogBody>
          Are you sure you want to delete JobSubType deleted.
        </AlertDialogBody>
        <AlertDialogFooter>
          <Button ref={cancelRef} onClick={onClose}>
            No
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              deleteJobSubType.mutate(jobSubTypeId);
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

export default DeleteJobSubType;
