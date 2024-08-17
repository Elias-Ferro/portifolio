import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const DropOptionButton = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const listNetwork = [
    { label: "Linkedin", link: "https://www.linkedin.com/in/elias-ferro-dev/" },
    { label: "Git Hub", link: "https://github.com/Elias-Ferro" },
    { label: "Instagram", link: "#" },
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "#91ff00" }}
      >
        Follow
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {listNetwork.map((network, index) => {
          return (
            <MenuItem
              key={index}
              onClick={handleClose}
              sx={{ color: "#1976d2" }}
            >
              {network.label}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DropOptionButton;
