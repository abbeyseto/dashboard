import React from "react";
import dashboard from "../../assets/icons/dashboard.svg";
import balances from "../../assets/icons/balances.svg";
import customers from "../../assets/icons/customers.svg";
import analytics from "../../assets/icons/analytics.svg";


export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: dashboard,
    cName: "nav-text",
  },
  {
    title: 'Balances',
    path: '/balances',
    icon: balances,
    cName: 'nav-text'
  },
  {
    title: 'Customers',
    path: '/customers',
    icon: customers,
    cName: 'nav-text'
  },
  {
    title: 'Analytics',
    path: '/analytics',
    icon: analytics,
    cName: 'nav-text'
  },
  // {
  //   title: 'About Us',
  //   path: '/about-us',
  //   icon: analytics,
  //   cName: 'nav-text'
  // },
  // {
  //   title: 'Support',
  //   path: '/support',
  //   icon: <IoIcons.IoMdHelpCircle />,
  //   cName: 'nav-text'
  // }
];
