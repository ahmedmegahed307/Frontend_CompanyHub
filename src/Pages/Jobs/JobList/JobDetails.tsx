import { Text, Flex, Heading, VStack, Box } from "@chakra-ui/react";
import React from "react";
import { Props } from "recharts/types/container/Surface";

function JobDetails() {
  return (
    <>
      <Flex m={"24"} direction={"column"}>
        <Heading> Job Title </Heading>
        <Text> job disc </Text>

        <VStack spacing={"2"}>
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
          <TextComponent title={"title one "} text={"text item"} />{" "}
        </VStack>
      </Flex>
    </>
  );
}

export default JobDetails;

interface Pros {
  text: String;
  title: String;
}

function TextComponent({ text, title }: Pros) {
  return (
    <Box>
      <Heading size={"md"}> {title} </Heading>
      <Text> {text} </Text>
    </Box>
  );
}
