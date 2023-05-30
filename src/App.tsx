import "./App.css";
import { HStack } from "@chakra-ui/react";

import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <TopNav />
      <SideBar />

      <HStack>
        <Outlet></Outlet>
      </HStack>
    </>
  );
}

export default App;
