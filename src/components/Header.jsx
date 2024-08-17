import { AppBar, Avatar, Box, Button, Stack } from "@mui/material";
import DropOptionButton from "./base/DropOptionButton";

const links = [
  { label: "Linkedin", link: "https://www.linkedin.com/in/elias-ferro-dev/" },
  { label: "Git Hub", link: "https://github.com/Elias-Ferro" },
  { label: "Instagram", link: "#" },
];

const Header = ({ urlAvatarImage, listButtons }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ padding: "14px" }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Avatar alt="profile-pixel-art" src={urlAvatarImage} />
          <Stack direction={"row"} gap={"10px"}>
            {listButtons.map((button, index) => {
              return (
                <Button key={index} variant="text" sx={{ color: "#fff" }}>
                  {button.label}
                </Button>
              );
            })}
            <DropOptionButton listOptions={links} />
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Header;
