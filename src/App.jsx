import renderRoutes from "./renderRoutes";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import routes from "./routes";
import MainLayout from "./layout/MainLayout";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary: {
      main: "#206ECF",
      primary: "#FFFFF",
      secondary: "#1F2024",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        classes={{
          root: { zIndex: 1400 },
        }}
        dense={true}
        maxSnack={5}
        autoHideDuration={1000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <MainLayout>{renderRoutes(routes)}</MainLayout>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default App;
