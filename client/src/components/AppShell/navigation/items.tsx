import {
  AccountCircleOutlined,
  FavoriteBorderOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";

interface NavItemProps {
  key: string,
  href: string,
  label?: string,
  icon?: React.ReactNode
}

export const iconList: NavItemProps[] = [
  {
    key: "favorites",
    href: "/favorites",
    icon: (
      <FavoriteBorderOutlined
        sx={{ color: "text.primary" }}
        fontSize="small"
      />
    ),
  },
  {
    key: "cart",
    href: "/cart",
    icon: (
      <ShoppingCartOutlined sx={{ color: "text.primary" }} fontSize="small" />
    ),
  },
  {
    key: "signin",
    href: "/signin",
    icon: (
      <AccountCircleOutlined
        sx={{ color: "text.primary" }}
        fontSize="small"
      />
    ),
  },
];

export const navItemList: NavItemProps[] = [
  { key: "products", href: "/products", label: "Products" },
  { key: "discover", href: "/discover", label: "Discover" },
  { key: "about", href: "/about", label: "About" },
  { key: "support", href: "/support", label: "Support" },
  { key: "contact", href: "/contact", label: "Contact" },
];
