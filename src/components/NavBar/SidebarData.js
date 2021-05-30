import dashboard from "../../assets/icons/dashboard.svg";
import balances from "../../assets/icons/balances.svg";
import customers from "../../assets/icons/customers.svg";
import analytics from "../../assets/icons/analytics.svg";
import Filter from "../../assets/icons/Filter.svg";
import Star from "../../assets/icons/Star.svg";
import Call from "../../assets/icons/Call.svg";
import Logout from "../../assets/icons/Logout.svg";

export const SidebarData = [
  {
    title: "Dashboard",
    path: "/",
    icon: dashboard,
    cName: "nav-text",
  },
  {
    title: "Balances",
    path: "/balances",
    icon: balances,
    cName: "nav-text",
  },
  {
    title: "Customers",
    path: "/customers",
    icon: customers,
    cName: "nav-text",
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: analytics,
    cName: "nav-text",
  },
];

export const SidebarDataExtra = [
  {
    title: "Settings",
    path: "/settings",
    icon: Filter,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/teams",
    icon: Star,
    cName: "nav-text",
  },
  {
    title: "Contact",
    path: "/contacts",
    icon: Call,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/logout",
    icon: Logout,
    cName: "nav-text",
  },
];
