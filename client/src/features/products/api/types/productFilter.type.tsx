import { ExpandMoreOutlined } from "@mui/icons-material";
interface FilterItem {
  key: string;
  label: string;
  isExpanded?: boolean;
  rating?: number;
  checked?: boolean;
}

export interface FilterProps {
  key: string;
  listItemText?: string;
  listItemIcon?: React.ReactNode;
  onclick?: (Event: React.MouseEvent<HTMLButtonElement>) => void;
  items?: FilterItem[];
}

export const FilterItems: FilterProps[] = [
  {
    key: "Ratings",
    listItemText: "Ratings",
    listItemIcon: <ExpandMoreOutlined fontSize="small" />,
    items: [
      { key: "5", label: "5 Stars", rating: 5, checked: false },
      { key: "4", label: "4 Stars", rating: 4 },
      { key: "3", label: "3 Stars", rating: 3 },
      { key: "2", label: "2 Stars", rating: 2 },
      { key: "1", label: "1 Star", rating: 1 },
    ],
  },
  {
    key: "Price",
    listItemText: "Price",
    listItemIcon: <ExpandMoreOutlined fontSize="small" />,
    
    items: [
      { key: "first", label: "$50-$100" },
      { key: "second", label: "$100-$300" },
      { key: "third", label: "$300-$500" },
      { key: "fourth", label: "$500-$700" },
      { key: "fifth", label: "$700-$1000" },
    ],
  },
];
