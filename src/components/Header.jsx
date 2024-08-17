import { AppBar, Avatar, Box, Button, Stack } from "@mui/material";
import DropOptionButton from "./base/DropOptionButton";

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
            <DropOptionButton />
          </Stack>
        </Stack>
      </AppBar>
    </Box>
  );
};

export default Header;
