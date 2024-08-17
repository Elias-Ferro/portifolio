import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "@mui/material";

const DropOptionButton = ({listOptions}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

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
        {listOptions?.map((option, index) => {
          return (
            <MenuItem
              key={index}
              onClick={handleClose}
              sx={{ color: "#1976d2" }}
            >
              <Link href={option.link} underline="none" target="_blank">
                {option.label}
              </Link>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default DropOptionButton;
