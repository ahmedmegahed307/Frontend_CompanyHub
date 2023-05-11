import { Stack,Box,Text,Image, HStack, Divider, Spacer } from '@chakra-ui/react';

import NavBarLİnk from './NavBarLink';

const SideBar = () => {
  return (
    <Box w={"60"} height={"full"} bg={"#F3F4F6"}>
    <Stack
      height={"100vh"}
      //   divider={<StackDivider borderColor='gray.200' />}
      spacing={4}
    >
      <Image
        p={6}
        w={200}
        src="src/assets/img/uk_field_service_darkblue-darkblue-premium.svg"
        alt="Dan Abramov"
      />

      <Box px={2}>
        <HStack bg={"white"} boxShadow={"sm"} borderRadius={10} py={2.5}>
          <Image
            pl={6}
            src="src/assets/img/spotify/Icon.svg"
            alt="Dan Abramov"
          />
          <Text color={"blue.700"} fontWeight={"500"} fontSize={"md"}>
            {" "}
            Home
          </Text>
        </HStack>
      </Box>

      <NavBarLİnk
        onClick={() => {
          console.log("click");
        }}
        iconUrl="src/assets/img/spotify/search.svg"
      >
        Sreach
      </NavBarLİnk>

      <NavBarLİnk
        onClick={() => {
          console.log("click");
        }}
        iconUrl="src/assets/img/spotify/library.svg"
      >
        Your Library
      </NavBarLİnk>

      <NavBarLİnk
        onClick={() => {
          console.log("click");
        }}
        iconUrl="src/assets/img/spotify/PlusCircle.svg"
      >
        Create Playlist
      </NavBarLİnk>
      <NavBarLİnk
        onClick={() => {
          console.log("click");
        }}
        iconUrl="src/assets/img/spotify/heart.svg"
      >
        Liked Songs
      </NavBarLİnk>
      <Box px={6}>
        <Divider></Divider>
      </Box>
      <Text color={"gray.500"} px={6} fontWeight={"400"} fontSize={"md"}>
        {" "}
        Welcome to Premium
      </Text>

      <Spacer></Spacer>
      <NavBarLİnk
        onClick={() => {
          console.log("click");
        }}
        iconUrl="src/assets/img/spotify/Download.svg"
      >
        Install App
      </NavBarLİnk>
    </Stack>
  </Box>

  )
}

export default SideBar