import Header from "./components/Header";
import avatarPixelArt from "../public/image/profile-pixel-art.png";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const App = () => {
  const theme = useTheme();
  const buttons = [
    { button: 1, label: "home", section: "" },
    { button: 1, label: "abount", section: "" },
    { button: 1, label: "contact", section: "" },
  ];
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Header urlAvatarImage={avatarPixelArt} listButtons={buttons} />;
    </Box>
  );
};

export default App;
