import React, { useState } from "react";
import { Center, Text, Input, HStack, Button } from "@chakra-ui/react";

interface AddAttachmentProps {
  onFileSelect: (file: File | null) => void;
  onSubmit: () => void;
  disabled: boolean; // Add the 'disabled' prop to the interface
}

const AddAttachement = ({
  onFileSelect,
  onSubmit,
  disabled,
}: AddAttachmentProps) => {
  const [fileSelected, setFileSelected] = useState(false);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    onFileSelect(file);
    setFileSelected(true);
  };

  const handleSubmit = () => {
    if (fileSelected) {
      onSubmit();
    }
  };

  return (
    <Center>
      <Text>Add Attachment: </Text>
      <HStack>
        <Input type="file" w={300} onChange={handleFileSelect} />
        <Button
          onClick={handleSubmit}
          w={"auto"}
          colorScheme="blue"
          alignItems={"center"}
          variant={"solid"}
          size={"sm"}
          bg={"#1396ab"}
          disabled={disabled} // Pass the 'disabled' prop to the Button component
        >
          Submit
        </Button>
      </HStack>
    </Center>
  );
};

export default AddAttachement;
