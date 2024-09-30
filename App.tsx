import { Global } from "@emotion/react";
import { global } from "./styles/global";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./styles/theme";
import { RouterProvider } from "react-router-dom";
import { router } from "@router";

function App() {
  return (
    <>
      <Global styles={global} />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
