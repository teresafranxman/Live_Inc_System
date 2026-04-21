import { Box, List, ListItem } from "@mui/material";

interface LinkItem {
  key: string;
  label: string;
}

interface DisplayLinksProps {
  ItemsStart: LinkItem[];
  ItemsCenter: LinkItem[];
  ItemsEnd: LinkItem[];
}

export const DisplayLinks = ({
  ItemsStart,
  ItemsCenter,
  ItemsEnd,
}: DisplayLinksProps) => {
  return (
    <Box component="div" sx={{ display: "flex", gap: 4, justifyContent: "space-between",width: "60%" }}>
      <List>
        {ItemsStart.map((item) => (
          <ListItem key={item.key}>{item.label}</ListItem>
        ))}
      </List>
      <List>
        {ItemsCenter.map((item) => (
          <ListItem key={item.key} sx={{ textDecoration: "none" }}>
            {item.label}
          </ListItem>
        ))}
      </List>
      <List>
        {ItemsEnd.map((item) => (
          <ListItem key={item.key}>{item.label}</ListItem>
        ))}
      </List>
    </Box>
  );
};
