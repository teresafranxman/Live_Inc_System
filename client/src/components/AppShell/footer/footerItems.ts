interface footerItemProps {
    key: string;
    title: string;
    href?: string;
    label: string;
}

export const ItemsStart: footerItemProps[] = [
    { key: "returns-exchanges", title: "Returns & Exchanges", label: "Returns & Exchanges" },
    { key: "track-order", title: "Track Your Order",  label: "Track Your Order" },
    { key: "customer-support", title: "Customer Support", label: "Customer Support" },
    { key: "customer-faq", title: "Customer FAQ", label: "Customer FAQ" },
    { key: "shipping-deliveries", title: "Shipping & Deliveries", label: "Shipping & Deliveries" },
];

export const ItemsCenter: footerItemProps[] = [
    { key: "important-links", title: "Important Links", label: "Important Links" },
    { key: "about-us", title: "About Live, Inc.", label: "About Live, Inc." },
    { key: "newsletter", title: "Newsletter", label: "Newsletter"},
    { key: "sign-up-login", title: "Sign Up & Login", label: "Sign Up & Login" },
    { key: "contact-us", title: "Contact Us", label: "Contact Us" },
];

export const ItemsEnd: footerItemProps[] = [
    { key: "legal", title: "Legal", label: "Legal" },
    { key: "privacy-policy", title: "Privacy Policy", label: "Privacy Policy" },
    { key: "terms-of-service", title: "Terms of Service", label: "Terms of Service" },
    { key: "accessibility-statement", title: "Accessibility Statement", label: "Accessibility Statement" },
    { key: "cookie-policy", title: "Cookie Policy", label: "Cookie Policy" },
    { key: "sitemap", title: "Sitemap", label: "Sitemap" },
]