import { CheckBox } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating
} from "@mui/material";
import React, { useState } from "react";
import { FilterItems } from "./api/types/productFilter.type";

export const ProductsFilter = () => {
  const [isExpanded, setIsExpanded] = useState<string | null>(null);
  const [checked, setChecked] = useState(true);

  const toggleIsExpanded = (key: string) => {
    setIsExpanded((prev) => (prev === key ? null : key));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  }

  return (
    <List aria-labelledby="Filters">
      {FilterItems.map((item) => (
        <ListItem
          key={item.key}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <ListItemButton
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <ListItemText primary={item.listItemText} />
            <ListItemIcon onClick={() => toggleIsExpanded(item.key)}>
              {item.listItemIcon}
            </ListItemIcon>
          </ListItemButton>
          {isExpanded === item.key && (
            <List>
              {item.items?.map((subItem) => (
                <ListItem key={subItem.key}>
                  <ListItemButton>
                    <CheckBox checked={subItem.checked} onChange={handleChange}/>
                    <ListItemText primary={subItem.label} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          )}
        </ListItem>
      ))}
    </List>
    // <Box component="aside">
    //   <Box component="div">
    //     <FormControlLabel control={<Checkbox />} label="Checkbox" />
    //     <Rating name="read-only" readOnly defaultValue={5} size="small" />
    //   </Box>
    //   <Box component="div">
    //     <FormControlLabel control={<Checkbox />} label="Checkbox" />
    //     <Rating name="read-only" readOnly defaultValue={4} size="small" />
    //   </Box>
    //   <Box component="div">
    //     <FormControlLabel control={<Checkbox />} label="Checkbox" />
    //     <Rating name="read-only" readOnly defaultValue={3} size="small" />
    //   </Box>
    //   <Box component="div">
    //     <FormControlLabel control={<Checkbox />} label="Checkbox" />
    //     <Rating name="read-only" readOnly defaultValue={2} size="small" />
    //   </Box>
    //   <Box component="div">
    //     <FormControlLabel control={<Checkbox />} label="Checkbox" />
    //     <Rating name="read-only" readOnly defaultValue={1} size="small" />
    //   </Box>
    // </Box>
  );
};
