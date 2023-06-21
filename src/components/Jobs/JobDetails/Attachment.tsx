import React, { useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

interface AttachmentProps {
  onFileSelect: (file: File | null) => void;
}

const Attachment: React.FC<AttachmentProps> = ({ onFileSelect }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file);
    onFileSelect(file);
  };

  return (
    <div>
      <Text>Add Attachment:</Text>
      <Input type="file" w={250} onChange={handleFileSelect} />
      {selectedFile && <Text>Selected File: {selectedFile.name}</Text>}
    </div>
  );
};

export default Attachment;
