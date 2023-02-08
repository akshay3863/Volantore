import React from "react";
import "./custom-html-table.css";
import Checkbox from "@mui/material/Checkbox";
import UserMoreMenu from "../UserMoreMenu";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const StyledTypography = styled(Typography)(() => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
}));

const headCells = [
  {
    id: "id",
    numeric: true,
    disablePadding: true,
    label: "ID",
    align: "center",
  },
  {
    id: "patientId",
    numeric: true,
    disablePadding: false,
    label: "PatientId",
    align: "center",
  },
  {
    id: "name",
    numeric: true,
    disablePadding: false,
    label: "Name",
    align: "center",
  },
  {
    id: "Email",
    numeric: true,
    disablePadding: false,
    label: "Email",
    align: "center",
  },
  {
    id: "mobilePhone",
    numeric: true,
    disablePadding: false,
    label: "MobilePhone",
    align: "center",
  },
  {
    id: "lastAppointment",
    numeric: true,
    disablePadding: false,
    label: "Last Appointment",
    align: "center",
  },
  {
    id: "nextAppointment",
    numeric: true,
    disablePadding: true,
    label: "Next Appointment",
    align: "center",
  },
];

const CustomHTMLTable = () => {
  const [selected, setSelected] = React.useState([]);
  const [rows, setRows] = React.useState([
    {
      id: 1,
      patientId: 123,
      name: "solanki Akshay",
      Email: "akshaysolanki3863@gmail.com",
      mobilePhone: 9106990790,
      lastAppointment: "10/12/2023",
      nextAppointment: "11/12/2023",
    },
  ]);
  const [order, setOrder] = React.useState("asc");
  const [activeItem, setActiveItem] = React.useState("");

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelected = rows.map((n) => n.name);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const sortIconHandler = (key) => {
    if (key === activeItem) {
      if (order === "asc") {
        return <ArrowDownward fontSize="small" />;
      }
      return <ArrowUpward fontSize="small" />;
    }
    return <img src="/assets/icons/sortIcon.svg" alt="sortIcon" height={15} />;
  };

  const handleHeaderClick = (key) => {
    const data = [...rows];
    setActiveItem(key);
    if (order === "asc") {
      data.sort((a, b) => {
        return a[key] > b[key] ? 1 : -1;
      });
      setRows(data);
      setOrder("desc");
    } else {
      data.sort((a, b) => {
        return a[key] > b[key] ? -1 : 1;
      });
      setRows(data);
      setOrder("asc");
    }
  };
  return (
    <div className="custom_html_table">
      <ul className="responsive-table">
        <li className="table-header">
          <div className="col col-0">
            <Checkbox
              color="primary"
              sx={{ color: "#D6DDEB" }}
              onChange={handleSelectAllClick}
            />
          </div>
          {headCells.map((item, index) => (
            <div className="col" key={index}>
              <StyledTypography onClick={() => handleHeaderClick(item.id)}>
                {item.label} {sortIconHandler(item.id)}
              </StyledTypography>
            </div>
          ))}
        </li>
        <div className="tbody">
          {(rows || []).map((element, index) => {
            const isItemSelected = isSelected(element.name);
            return (
              <li className="table-row" key={index}>
                <div className="col">
                  <Checkbox
                    checked={isItemSelected}
                    color="primary"
                    sx={{ color: "#D6DDEB" }}
                  />
                </div>
                <div className="col" data-label="id">
                  {element.id}
                </div>
                <div className="col" data-label="patientId">
                  {element.patientId}
                </div>
                <div className="col" data-label="name">
                  {element.name}
                </div>
                <div className="col" data-label="Email">
                  {element.Email}
                </div>
                <div className="col" data-label="mobilePhone">
                  {element.mobilePhone}
                </div>
                <div className="col" data-label="lastAppointment">
                  {element.lastAppointment}
                </div>
                <div className="col" data-label="nextAppointment">
                  {element.nextAppointment}
                  <UserMoreMenu />
                </div>
              </li>
            );
          })}
        </div>
      </ul>
    </div>
  );
};

export default CustomHTMLTable;
