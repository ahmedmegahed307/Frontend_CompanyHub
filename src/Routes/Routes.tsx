import { createBrowserRouter } from "react-router-dom";
import AddJob from "../components/AddJob/AddJob";
import JobList from "../components/JobList/JobList";
import App from "../App";
import { Table } from "@chakra-ui/react";
import Login from "../Pages/Auth/Login";
import ForgotPassword from "../Pages/Auth/ForgotPassword";
import ClientList from "../components/Clients/ClientList";
import JobTypeList from "../components/JobType/JobTypeList";
import UsersList from "../components/Users/UsersList";
import StandardResolutionList from "../components/StandardResolution/StandardResolutionList";
import CheckLists from "../Pages/Auth/CheckLists";
import Statistical from "../components/StatisticalDashboard/Statistical";
import Scheduler from "../components/Scheduler/Scheduler";
import JobDetails from "../components/JobList/JobDetails";
import Operational from "../components/OperationalDashboard/Operational";

const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Table /> },
      {
        path: "/jobs/addJob",
        element: <AddJob />,
      },
      {
        path: "/jobs",
        element: <JobList />,
      },
      {
        path: "/clients/clientsList",
        element: <ClientList />,
      },
      {
        path: "/users/usersList",
        element: <UsersList />,
      },
      {
        path: "/jobtype/list",
        element: <JobTypeList />,
      },
      {
        path: "/resolution/list",
        element: <StandardResolutionList />,
      },
      {
        path: "/checkLists",
        element: <CheckLists />,
      },
      {
        path: "/statistical",
        element: <Statistical />,
      },
      {
        path: "/operational",
        element: <Operational />,
      },
      {
        path: "/scheduler",
        element: <Scheduler />,
      },
      {
        path: "/job-details",
        element: <JobDetails />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
]);
export default router;
