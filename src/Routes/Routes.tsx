import { createBrowserRouter } from "react-router-dom";
import JobList from "../components/Jobs/JobList/JobList";
import App from "../App";
import { Table } from "@chakra-ui/react";
import ForgotPassword from "../components/Authentication/ForgotPassword";
import UsersList from "../components/Settings/Users/UsersList";
import CheckLists from "../components/Settings/CheckLists/CheckLists";
import Statistical from "../components/StatisticalDashboard/Statistical";
import Scheduler from "../components/Scheduler/Scheduler";
import Operational from "../components/OperationalDashboard/Operational";
import PPMTabs from "../components/PPM/PPMTabs";
import AddContract from "../components/PPM/Contracts/AddContract";
import EditContract from "../components/PPM/Contracts/EditContract";
import ClientList from "../components/Settings/Clients/ClientList";
import JobTypeList from "../components/Settings/JobTypes/JobTypeList";
import StandardResolutionList from "../components/Settings/Resolution/StandardResolutionList";
import AddJob from "../components/Jobs/AddJob/AddJob";
import Login from "../components/Authentication/Login";
import JobQuery from "../components/Reports/JobQuery/JobQuery";
import TimeSheet from "../components/Reports/TimeSheet/TimeSheet";
import Survey from "../components/Reports/Survey/Survey";
import Invoicing from "../components/Reports/Invoicing/Invoicing";
import JobDetails from "../components/Jobs/JobDetails/Details/JobDetails";
import CompanyInfo from "../components/Settings/Company/CompanyInfo";
import JobInfo from "../components/Jobs/JobDetails/JobInfo";

const router = createBrowserRouter([
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
        path: "/settings/clients/clientsList",
        element: <ClientList />,
      },
      {
        path: "/settings/users/usersList",
        element: <UsersList />,
      },
      {
        path: "/settings/jobtype/list",
        element: <JobTypeList />,
      },
      {
        path: "/settings/resolution/list",
        element: <StandardResolutionList />,
      },
      {
        path: "/settings/company/info",
        element: <CompanyInfo />,
      },

      {
        path: "/settings/checkLists",
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
        path: "/ppm",
        element: <PPMTabs />,
      },
      {
        path: "/ppm/contracts/addContract",
        element: <AddContract />,
      },
      {
        path: "/ppm/contracts/editContract/:id",
        element: <EditContract />,
      },
      {
        path: "/job/jobInfo",
        element: <JobInfo />,
      },
      {
        path: "/reports/jobQuery",
        element: <JobQuery />,
      },
      {
        path: "/reports/timeSheet",
        element: <TimeSheet />,
      },
      {
        path: "/reports/survey",
        element: <Survey />,
      },
      {
        path: "/reports/invoicing",
        element: <Invoicing />,
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
