import { Table } from "@chakra-ui/react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ForgotPassword from "../Pages/Authentication/components/ForgotPassword";
import Login from "../Pages/Authentication/components/Login";
import Chat from "../Pages/Chat/components/Chat";

import JobList from "../Pages/Jobs/JobList/JobList";
import GoogleMap from "../Pages/Map/components/GoogleMap";
import Operational from "../Pages/Operational/component/Operational";
import AddContract from "../Pages/PPM/components/PPM/Contracts/AddContract";

import PPMTabs from "../Pages/PPM/components/PPM/PPMTabs";
import Invoicing from "../Pages/Reports/components/Reports/Invoicing/Invoicing";
import JobQuery from "../Pages/Reports/components/Reports/JobQuery/JobQuery";
import Survey from "../Pages/Reports/components/Reports/Survey/Survey";
import TimeSheet from "../Pages/Reports/components/Reports/TimeSheet/TimeSheet";
import Scheduler from "../Pages/Scheduler/components/Scheduler";

import ClientList from "../Pages/Settings/components/Clients/ClientList";
import CompanyInfo from "../Pages/Settings/components/Company/CompanyInfo";
import JobTypeList from "../Pages/Settings/components/JobTypes/JobTypeList";
import ResolutionMain from "../Pages/Settings/components/Resolution/ResolutionMain";
import UserInfo from "../Pages/Settings/components/Users/UserInfo/UserInfo";
import UsersMain from "../Pages/Settings/components/Users/UsersMain";
import SignUp from "../Pages/Authentication/components/SignUp";
import JobTypesMain from "../Pages/Settings/components/JobTypes/JobTypesMain";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Operational /> },

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
        element: <UsersMain />,
      },
      {
        path: "/settings/jobtype/list",
        element: <JobTypesMain />,
      },

      {
        path: "/settings/resolution/list",
        element: <ResolutionMain />,
      },
      {
        path: "/settings/company/info",
        element: <CompanyInfo />,
      },
      {
        path: "/settings/user/info",
        element: <UserInfo />,
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
        path: "/chat",
        element: <Chat username="Ahmed" />,
      },
      {
        path: "/map",
        element: <GoogleMap apiKey={""} />,
      },
      {
        path: "/ppm/contracts/addContract",
        element: <AddContract />,
      },

      // {
      //   path: "/job/:id/jobInfo",
      //   element: <JobInfo />,
      // },
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
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/forgotPassword",
    element: <ForgotPassword />,
  },
]);
export default router;
