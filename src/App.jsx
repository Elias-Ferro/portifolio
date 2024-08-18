import Header from "./components/Header";
import avatarPixelArt from "../public/image/profile-pixel-art.png";
import { Avatar, Box, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TitlePresentation from "./components/base/TitlePresentation";
import InformationCard from "./components/base/InformationCard";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import LightbulbRoundedIcon from "@mui/icons-material/LightbulbRounded";
import { workingTime } from "./utils/functions/misc";
import About from "./components/About";
import { useRef } from "react";

const App = () => {
  const theme = useTheme();

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);

  const handleScroll = (section) => {
    section.current?.scrollIntoView({ behavior: "smooth" });
  };

  const buttons = [
    { id: 1, label: "home", onClick: () => handleScroll(homeRef) },
    { id: 2, label: "about", onClick: () => handleScroll(aboutRef) },
    { id: 3, label: "projects", onClick: () => handleScroll(projectsRef) },
  ];

  const technologies = ["Javascript", "React", "Typescript"];
  const styles = ["Bootstrap", "Material Ui", "Tailwind CSS"];

  const { yearsWorked, monthsWorked } = workingTime();

  const workDuration = `${
    yearsWorked > 0 ? `${yearsWorked} ano${yearsWorked > 1 ? "s" : ""}` : ""
  }${yearsWorked > 0 && monthsWorked > 0 ? " e " : ""}${
    monthsWorked > 0 ? `${monthsWorked} mês${monthsWorked > 1 ? "es" : ""}` : ""
  } atuando como`;

  const listInformationsCards = [
    {
      link: "#",
      icon: <CalendarMonthRoundedIcon />,
      primaryText: workDuration,
      secondaryText: "Desenvolvedor",
    },
    {
      link: "https://infinitysolutionsapp.com/",
      icon: <CodeRoundedIcon />,
      primaryText: "Atualmente na empresa",
      secondaryText: "Infinity Solutions",
    },
    {
      link: "#",
      icon: <LightbulbRoundedIcon />,
      primaryText: "Aplicando experiências em",
      secondaryText: "Projetos próprios",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        minHeight: "100vh",
      }}
    >
      <Header urlAvatarImage={avatarPixelArt} listButtons={buttons} />
      <Box
        ref={homeRef}
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
      <Box
        sx={{ display: "flex", justifyContent: "center", gap: 2, padding: 6 }}
      >
        {listInformationsCards.map((information, number) => (
          <InformationCard
            key={number}
            link={information.link}
            icon={information.icon}
            colorIcon={theme.palette.primary.main}
            colorText={theme.palette.primary.main}
            primaryText={information.primaryText}
            secondaryText={information.secondaryText}
          />
        ))}
      </Box>
      <Divider sx={{ maxWidth: "80%", margin: "auto" }} />
      <Box
        ref={aboutRef}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "80%",
          margin: "auto",
        }}
      >
        <About />
      </Box>
    </Box>
  );
};

export default App;
