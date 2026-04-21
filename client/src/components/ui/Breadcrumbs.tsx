import { Breadcrumbs } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router"; 

export const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    return (
        <Breadcrumbs aria-label="breadcrumb">
            <RouterLink to="/">Home</RouterLink>
            {pathnames.map((value, index) => {
                const to = `/${pathnames.slice(0, index + 1).join("/")}`;
                return (
                    <RouterLink key={to} to={to}>
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </RouterLink>
                );
            })}
        </Breadcrumbs>
    )
};