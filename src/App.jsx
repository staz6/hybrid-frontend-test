import renderRoutes from './renderRoutes';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import routes from './routes';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
  palette: {
    primary:{
      main:"#206ECF",
      primary:"#FFFFF",
      secondary:"#1F2024"
    },
    
  },
  
});
const App = () => {
  console.log(routes)
  return (
    <ThemeProvider theme={theme}>
    <MainLayout>
    {renderRoutes(routes)}
    </MainLayout>
    </ThemeProvider>
  );
};

export default App;
