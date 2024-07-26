import {
  Avatar,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import profilePixelArt from "../../public/image/profile-pixel-art.png";
import { CustomCard } from "../components/Card";
import CodeOffIcon from "@mui/icons-material/CodeOff";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import dayjs from "dayjs";

const Home = () => {
  const listKnowledgeIn = [
    { label: "Javascript", id: "1" },
    { label: "Typescript", id: "2" },
    { label: "React", id: "3" },
  ];

  const renderTitleInfo = (title: string) => {
    return (
      <Typography variant="h2" color={"#fff"}>
        {title}
      </Typography>
    );
  };

  const workingTime = () => {
    const startedIn = dayjs("2023-07-20");
    const currentMonth = dayjs();

    const monthsWorked = currentMonth.diff(startedIn, "month");

    // const startDateFormatted = startedIn.format("DD/MM/YYYY");
    // const endDateFormatted = currentMonth.format("DD/MM/YYYY");

    return {
      monthsWorked,
    };
  };

  const { monthsWorked } = workingTime();

  console.log(workingTime());

  return (
    <Container sx={{ marginTop: "120px" }}>
      <Grid
        container
        spacing={5}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item>
          {renderTitleInfo("Developer")}
          <Typography variant="h6" color="secondary">
            <Chip
              label={"desenvolvedor"}
              variant="outlined"
              color="secondary"
            />
          </Typography>
        </Grid>

        <Grid item>
          <Avatar
            src={profilePixelArt}
            alt="Elias Ferro pixelArt"
            sx={{ width: "350px", height: "350px" }}
          />
        </Grid>

        <Grid item>
          {renderTitleInfo("Fron-end")}
          <Stack direction={"row"} gap={"5px"}>
            {listKnowledgeIn.map((knowledgeIn) => (
              <Chip
                key={knowledgeIn.id}
                label={knowledgeIn.label}
                variant="outlined"
                color="secondary"
              />
            ))}
          </Stack>
        </Grid>
      </Grid>

      <Divider
        sx={{ background: "rgba(123, 74, 226, 0.2)", margin: "100px 0px" }}
      />
      <Grid container spacing={3} display={"flex"} justifyContent={"center"}>
        <Grid item>
          <CustomCard
            icon={<CalendarMonthIcon color="secondary" fontSize="large" />}
            h5={`${monthsWorked} meses atuando como`}
            h1={"Desenvolvedor"}
            link={""}
          />
        </Grid>
        <Grid item>
          <CustomCard
            icon={<CodeOffIcon color="secondary" fontSize="large" />}
            h5={"Atualmente na empresa"}
            h1={"Infinity Solutions"}
            link={"https://infinitysolutionsapp.com/"}
          />
        </Grid>
        <Grid item>
          <CustomCard
            icon={<LightbulbIcon color="secondary" fontSize="large" />}
            h5={"Aplicando aprendizado em"}
            h1={"Projetos Proprios"}
            link={""}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
