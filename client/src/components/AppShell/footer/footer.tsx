import { Box, Container } from "@mui/material";
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
        width: "100%",
        paddingTop: '10rem',
        marginTop: '10rem',
        borderTop: '1px solid #F5EFF7'
      }}
    >
      <Container maxWidth="xl" sx={{ display: "flex", gap: 2}}>
        <Box component="div" sx={{ width: "40%" }}>
          <SignUpTextBar />
        </Box>
        <DisplayLinks
          ItemsStart={ItemsStart}
          ItemsCenter={ItemsCenter}
          ItemsEnd={ItemsEnd}
        />
      </Container>
    </Box>
  );
};
