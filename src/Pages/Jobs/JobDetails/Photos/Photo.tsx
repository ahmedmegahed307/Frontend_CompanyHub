import { useState } from "react";
import AttachmentList from "./PhotoList";
import AddAttachment from "./AddPhoto";
import PhotoList from "./PhotoList";

const Photo = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleClearPhoto = () => {
    setSelectedFile(null);
    setSubmitted(false);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      setSubmitted(true);
    }
  };

  return (
    <>
      <AddAttachment
        onFileSelect={handleFileSelect}
        onSubmit={handleSubmit}
        disabled={submitted}
      />

      {submitted && selectedFile && <PhotoList photos={[selectedFile]} />}
    </>
  );
};

export default Photo;
