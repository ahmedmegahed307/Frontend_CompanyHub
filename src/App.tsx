
import "./App.css";
import {
  HStack,
 
} from "@chakra-ui/react";
import SideBar from "./components/Sidebar/SideBar";
import AddJob from "./components/AddJob/AddJob";

function App() {
  return (
    <>
      <HStack>
        <SideBar />
        <AddJob></AddJob>
      </HStack>
    </>
  );
}

export default App;
