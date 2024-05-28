import {
  AppBar,
  Avatar,
  Box,
  Container,
  Link,
  Stack,
  Toolbar,
} from "@mui/material";
import profilePixelArt from "../../public/image/profile-pixel-art.png";
import { CustomButton } from "./Button";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const listButtons = [
  { label: "home", section: "#" },
  { label: "about", section: "#" },
  { label: "portfolio", section: "#" },
  { label: "contact", section: "#" },
];

const renderNavButtons = listButtons.map((button) => {
  return <CustomButton color={"secondary"} label={button.label}></CustomButton>;
});

const Header = () => {
  return (
    <Container>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Avatar src={profilePixelArt}></Avatar>
          <Stack direction={"row"} alignItems={"center"} gap={2}>
            {renderNavButtons}
            <Box sx={{ display: "flex", padding: "0px 50px", gap: "10px" }}>
              <Link href="https://www.linkedin.com/in/elias-ferro-dev/">
                <LinkedInIcon color="secondary" />
              </Link>
              <Link href="https://github.com/Elias-Ferro">
                <GitHubIcon color="secondary" />
              </Link>
              <Link href="#">
                <InstagramIcon color="secondary" />
              </Link>
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;
