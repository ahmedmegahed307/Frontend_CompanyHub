import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { BsSearch, BsX } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClearInput = () => {
    setInputValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form style={{ width: "50%" }} onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <BsSearch />
        </InputLeftElement>
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={handleInputChange}
          borderRadius={20}
          placeholder="Enter a job ID (e.g. 70) or client name.."
          variant="filled"
        />
        {inputValue && (
          <InputRightElement>
            <IconButton
              aria-label="Clear input"
              icon={<BsX />}
              borderRadius={20}
              variant="ghost"
              onClick={handleClearInput}
            />
          </InputRightElement>
        )}
      </InputGroup>
    </form>
  );
};

export default SearchInput;
