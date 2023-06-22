import "./App.css";
import { Box, HStack } from "@chakra-ui/react";

import TopNav from "./components/Navbar/TopNav";
import SideBar from "./components/Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (search: string) => {
    setSearchText(search);
  };

  useEffect(() => {
    console.log("Search text:", searchText);
  }, [searchText]);

  return (
    <>
      <TopNav onSearch={handleSearch} />

      <HStack align="start">
        <SideBar />

        <Box h="90vh" w="81.4vw" overflowX="hidden">
          <Outlet />
        </Box>
      </HStack>
    </>
  );
}

export default App;
