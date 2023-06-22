import { Box, Text, Grid, Image } from "@chakra-ui/react";
import mockupImage from "../../../../assets/react.svg";

interface AttachmentListProps {
  attachments: File[];
}

const AttachmentList = ({ attachments }: AttachmentListProps) => {
  const columns = 2; // Number of columns
  const rows = Math.ceil(attachments.length / columns); // Number of rows based on the number of attachments

  return (
    <Box borderWidth="1px" p={4} mt={4}>
      <Grid templateColumns={`repeat(${columns}, 1fr)`} gap={4}>
        {attachments.map((file, index) => (
          <Box key={index}>
            <Image src={mockupImage} alt="Mockup" />
            <Text>{file.name}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default AttachmentList;
