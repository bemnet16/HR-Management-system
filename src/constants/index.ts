
import {
  BoxIcon,
  CircleUser,
  Clipboard,
  NotebookPen,
  HandCoins,
  UserSearch,
  BarChart3,
  Network,
} from "lucide-react";


export const DahshboardRoutes = [
  {
    icon: BoxIcon,
    label: "Add product",
    href: "/add-product",
  },
  {
    icon: Clipboard,
    label: "Reports",
    href: "/report",
  },
  {
    icon: CircleUser,
    label: "Suppliers",
    href: "/supplier",
  },
  {
    icon: HandCoins,
    label: "Vacancy",
    href: "/vacancy",
  },
];

export const humanResourseRoutes = [
  {
    icon: Network,
    label: "Org. structure",
    href: "/org-structure",
  },
  {
    icon: UserSearch,
    label: "Recuiremnt",
    href: "/recuiremnt",
  },
  {
    icon: NotebookPen,
    label: "Attendance",
    href: "/attendance",
  },
  {
    icon: BarChart3,
    label: "Appraisal",
    href: "/appraisal",
  },
  {
    icon: HandCoins,
    label: "Payroll",
    href: "/payroll",
  },
];