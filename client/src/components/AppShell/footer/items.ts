interface FooterItem {
    key: string;
    label: string;
    href?: string;
}

export const ItemsStart: FooterItem[] = [
    { key: "service", label: "Customer Service" },
    { key: "returnsExchanges", label: "Returns & Exchanges" },
    { key: "trackOrder", label: "Track Order" },
    { key: "support", label: "Customer Support" },
    { key: "faq", label: "Customer FAQ" },
    { key: "shipping", label: "Shipping & Delivery" }
];

export const ItemsCenter: FooterItem[] = [
    { key: "importantLinks", label: "Important Links" },
    { key: "products", label: "Products" },
    { key: "about", label: "About Live, Inc." },
    { key: "news", label: "News & Updates" },
    { key: "signupLogin", label: "Sign Up & Login" },
    { key: "contact", label: "Contact Us" }
];

export const ItemsEnd: FooterItem[] = [
    { key: "legal", label: "Legal" },
    { key: "privacy", label: "Privacy Policy" },
    { key: "terms", label: "Terms of Service" },
    { key: "accessibility", label: "Accessibility Statement" },
    { key: "cookie", label: "Cookie Policy" },
    { key: "sitemap", label: "Sitemap" }
];
