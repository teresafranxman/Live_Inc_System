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
    icon: <FavoriteBorderOutlined color="secondary" />,
  },
  {
    key: "cart",
    href: "/cart",
    icon: <ShoppingCartOutlined color="secondary" />,
  },
  {
    key: "signin",
    href: "/signin",
    icon: <AccountCircleOutlined color="secondary" />,
  },
];

export const navItemList: NavItemProps[] = [
  { key: "products", href: "/products", label: "Products" },
  { key: "discover", href: "/discover", label: "Discover" },
  { key: "about", href: "/about", label: "About" },
  { key: "support", href: "/support", label: "Support" },
  { key: "contact", href: "/contact", label: "Contact" },
];
