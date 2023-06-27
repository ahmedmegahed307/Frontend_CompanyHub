import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Flex,
  Wrap,
  Tag,
  TagLabel,
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  TagCloseButton,
} from "@chakra-ui/react";

interface Option {
  value: string;
  label: string;
}

const options: Option[] = [
  { value: "Event1", label: "Event 1" },
  { value: "Event2", label: "Event 2" },
  { value: "Event3", label: "Event 3" },
];

const EventSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSelectChange = (selectedValues: string[]) => {
    setSelectedOptions(selectedValues);
  };

  const handleOptionSelect = (option: Option) => {
    if (!selectedOptions.includes(option.value)) {
      setSelectedOptions([...selectedOptions, option.value]);
    }
    setIsMenuOpen(false);
  };

  const handleOptionDeselect = (option: any) => {
    const updatedOptions = selectedOptions.filter((value) => value !== option);
    setSelectedOptions(updatedOptions);
  };

  const filteredOptions = options.filter(
    (option) => !selectedOptions.includes(option.value)
  );

  return (
    <FormControl pb={5} w={"md"}>
      <FormLabel color={"grey"}>Events</FormLabel>
      <Flex direction="column" maxWidth={300}>
        <Menu
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          onOpen={() => setIsMenuOpen(true)}
        >
          <MenuButton
            as={Button}
            color={"grey"}
            rightIcon={
              <Box as="span" fontSize="sm">
                ▼
              </Box>
            }
          >
            Select Events
          </MenuButton>
          <MenuList minWidth="200px">
            <MenuOptionGroup
              value={selectedOptions}
              onChange={(values) => handleSelectChange(values as string[])}
            >
              {filteredOptions.map((option) => (
                <MenuItemOption
                  key={option.value}
                  value={option.value}
                  isChecked={selectedOptions.includes(option.value)}
                  onClick={() => handleOptionSelect(option)}
                >
                  {option.label}
                </MenuItemOption>
              ))}
            </MenuOptionGroup>
          </MenuList>
        </Menu>
        <Wrap mt={2}>
          <Flex wrap="wrap">
            {selectedOptions.map((option, index) => (
              <Tag
                key={index}
                borderRadius="full"
                variant="solid"
                bg={"#1B4D3E"}
                mr={2}
                mb={2}
              >
                <TagLabel>{option}</TagLabel>
                <TagCloseButton onClick={() => handleOptionDeselect(option)} />
              </Tag>
            ))}
          </Flex>
        </Wrap>
      </Flex>
    </FormControl>
  );
};

export default EventSelect;
