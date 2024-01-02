import React, { useState } from "react";
import "./SideBarFindJob.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
export function SideBarFindJob({ value, check, activeIds }) {
  const listBuildProfile = [
    { id: 1, name: "Schedule" },
    { id: 2, name: "Availability" },
    { id: 3, name: "Experience" },
    { id: 4, name: "Bio" },
    { id: 5, name: "Apply jobs" },
    { id: 6, name: "BioPhoto" },
  ];
  const [open, setOpen] = useState(check);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div
      className="row"
      style={{
        margin: "5% 10%",
        backgroundColor: "white",
        borderRadius: "15px",
        border: "1px solid",
        height: "100%",
      }}
    >
      <div className="col-3" style={{ padding: "20px 15px 0 30px" }}>
        <h6>MY PROGRESS</h6>
        <div
          style={{
            height: "5px",
            width: "165px",
            backgroundColor: "#ccd1d6",
            borderRadius: "25px",
          }}
          className="row"
        >
          <div className="col-2" style={{ backgroundColor: "#33465a", borderRadius: "25px" }}></div>
        </div>
        <div>
          <List
            sx={{ width: "50%", padding: "0", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={handleClick} sx={{ padding: " 0", marginTop: "10px " }}>
              <ListItemText primary="Inbox" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {listBuildProfile.map((e) => (
                  <ListItemText key={e.id} sx={{ paddingLeft: "28px" }}>
                    <span
                      style={{
                        fontSize: "13px",
                        color: activeIds.includes(e.id) ? "blue" : "#b3bac1",
                      }}
                    >
                      {e.name}
                    </span>
                  </ListItemText>
                ))}
              </List>
            </Collapse>
          </List>
        </div>
      </div>
      {value}
    </div>
  );
}
