import { Flex, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

interface SubTypeListProps {
  subTypeList: (string | null)[]; // Update the type annotation to allow null values
  onRemoveSubType: (index: number) => void;
}

const SubTypeRemoval = ({ subTypeList, onRemoveSubType }: SubTypeListProps) => {
  return (
    <Flex wrap="wrap">
      {subTypeList.map((subType, index) => (
        <Tag
          key={index}
          borderRadius="full"
          variant="solid"
          colorScheme="green"
          mr={2}
          mb={2}
        >
          <TagLabel>{subType}</TagLabel>
          <TagCloseButton onClick={() => onRemoveSubType(index)} />
        </Tag>
      ))}
    </Flex>
  );
};

export default SubTypeRemoval;
