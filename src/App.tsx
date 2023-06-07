import "./App.css";
import { Box, HStack } from "@chakra-ui/react";

import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <TopNav />

      <HStack align={"start"}>
        <SideBar />

        <Box h={"90vh"} w={"81.4vw"} overflowX={"hidden"}>
          <Outlet></Outlet>
        </Box>
      </HStack>
    </>
  );
}

export default App;
