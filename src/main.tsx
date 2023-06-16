import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Amplify } from "aws-amplify";
import awsExports from "./aws-exports";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@fontsource/montserrat";
import theme from "./Theme.tsx";
Amplify.configure(awsExports);

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />

      {/* <Login/> */}
    </ChakraProvider>
  </QueryClientProvider>
  // </React.StrictMode>,
);
