import { createTheme } from "@mui/material";
import { deepPurple} from "@mui/material/colors";

export const theme = createTheme({
    palette: {
        primary: {
            main: "#fff", 
        },
        secondary: {
            main: deepPurple[500],
        }
    }
})