
import "./App.css";
import {
  HStack,
 
} from "@chakra-ui/react";
import AddJob from "./components/AddJob/AddJob";
import JobList from "./components/JobList/JobList";
import { Outlet, RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import TopNav from "./components/TopNav";
import SideBar from "./components/SideBar";

function App() {
  return (
    <>
    
    <TopNav/>
    <SideBar />

      <HStack>

<Outlet></Outlet>
      </HStack>
    </>
  );
}

export default App;
