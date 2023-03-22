import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            id="basic-button"
            size="large"
            edge="start"
            color="inherit"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <Link className="link" to="/">
              <MenuItem onClick={handleClose}>Home</MenuItem>
            </Link>
            <Link className="link" to="/news">
              <MenuItem onClick={handleClose}>News</MenuItem>
            </Link>
            <Link className="link" to="/profile">
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <Link className="link" to="/myaccount">
              <MenuItem onClick={handleClose}>My Account</MenuItem>
            </Link>
            <Link className="link" to="/logout">
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Link>
          </Menu>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Golf Stuff
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
