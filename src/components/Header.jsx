import { AppBar, Avatar, Box, Button, Chip, Stack } from "@mui/material";
import DropOptionButton from "./base/DropOptionButton";
import { theme } from "../style/theme";

const links = [
  { label: "Linkedin", link: "https://www.linkedin.com/in/elias-ferro-dev/" },
  { label: "Git Hub", link: "https://github.com/Elias-Ferro" },
  { label: "Instagram", link: "#" },
];

const Header = ({ urlAvatarImage, listButtons }) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          padding: "10px",
          // backgroundColor: theme.palette.background.default,
          backgroundColor: "rgba(255, 255, 255, 0.45)",
          backdropFilter: "blur(2px)",
        }}
      >
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction="row" spacing={1}>
            <Chip
              avatar={<Avatar alt="profile-pixel-art" src={urlAvatarImage} />}
              variant="outlined"
              label="Elias Ferro Developer"
            />
          </Stack>

          <Stack direction={"row"} gap={"10px"}>
            {listButtons.map((button, id) => {
              return (
                <Button
                  key={id}
                  variant="text"
                  sx={{
                    color: theme.palette.text.primary,
                    textTransform: "none",
                  }}
                  onClick={button.onClick}
                >
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
