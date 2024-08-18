import Header from "./components/Header";
import avatarPixelArt from "../public/image/profile-pixel-art.png";
import { Avatar, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TitlePresentation from "./components/base/TitlePresentation";

const App = () => {
  const theme = useTheme();
  const buttons = [
    { id: 1, label: "home", section: "" },
    { id: 2, label: "abount", section: "" },
    { id: 3, label: "contact", section: "" },
  ];

  const technologies = ["Javascript", "React", "Typescript"];
  const styles = ["Bootstrap", "Material Ui", "Tailwind CSS"];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Header urlAvatarImage={avatarPixelArt} listButtons={buttons} />;
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80%",
          margin: "auto",
          marginTop: 10,
        }}
      >
        <TitlePresentation title={"Developer"} chips={technologies} />
        <Box
          sx={{
            borderRadius: "50%",
          }}
        >
          <Avatar
            alt="profile-pixel-art"
            src={avatarPixelArt}
            sx={{ width: "300px", height: "300px" }}
          />
        </Box>
        <TitlePresentation title={"Front-end"} chips={styles} />
      </Box>
    </Box>
  );
};

export default App;
