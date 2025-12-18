import {
  LayoutDashboard,
  Boxes,
  PlusSquare,
  ClipboardList,
  Users,
  CreditCard,
  Briefcase,
  User,
} from "lucide-react";

export const hrMenu = [
  {
    label: "Assets",
    icon: Boxes,
    path: "/dashboard/assets",
  },
  {
    label: "Add Asset",
    icon: PlusSquare,
    path: "/dashboard/add-asset",
  },
  {
    label: "Requests",
    icon: ClipboardList,
    path: "/dashboard/requests",
  },
  {
    label: "Employees",
    icon: Users,
    path: "/dashboard/employees",
  },
  {
    label: "Upgrade Package",
    icon: CreditCard,
    path: "/dashboard/upgrade",
  },
];

export const employeeMenu = [
  {
    label: "My Assets",
    icon: Briefcase,
    path: "/dashboard/my-assets",
  },
  {
    label: "Request Asset",
    icon: LayoutDashboard,
    path: "/dashboard/request-asset",
  },
  {
    label: "My Team",
    icon: Users,
    path: "/dashboard/my-team",
  },
  {
    label: "Profile",
    icon: User,
    path: "/dashboard/profile",
  },
];
