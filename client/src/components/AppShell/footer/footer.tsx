import { Box } from "@mui/material";
import { DisplayLinks } from "./DisplayLinks";
import { ItemsCenter, ItemsEnd, ItemsStart } from "./footerItems";
import { SignUpTextBar } from "./SignUpTextBar";

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        display: "inline-flex",
        alignItems: "flex-start",
        gap: 4,

      }}
    >
      <Box component="div" sx={{ width: "40%"}}>
        <SignUpTextBar />
      </Box>
      <DisplayLinks
        ItemsStart={ItemsStart}
        ItemsCenter={ItemsCenter}
        ItemsEnd={ItemsEnd}
      />
    </Box>
  );
};
