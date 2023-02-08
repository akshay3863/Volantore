import { BiScan } from "react-icons/bi";
import { MdDateRange } from "react-icons/md";

export const adminConfig = [
  {
    title: "List Of Request",
    path: "/dashboard",
    references: ["/dashboard"],
    icon: <BiScan fontSize="24px" />,
  },
  {
    title: "Calender",
    path: "/dashboard/clinic-calender",
    references: ["/dashboard/clinic-calender"],
    icon: <MdDateRange fontSize="24px" />,
  },
];
