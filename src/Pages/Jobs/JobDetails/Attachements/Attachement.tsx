import { useState } from "react";
import AttachmentList from "./AttachementList";
import AddAttachment from "./AddAttachement";

const Attachment = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
  };

  const handleClearAttachment = () => {
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

      {submitted && selectedFile && (
        <AttachmentList attachments={[selectedFile]} />
      )}
    </>
  );
};

export default Attachment;
