import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import profile from "../../public/image/el_ferro_perfil.jpg";
import { theme } from "../style/theme";
import { workingTime } from "../utils/functions/misc";

const { yearsWorked, monthsWorked } = workingTime();
const workDuration = `${
    yearsWorked > 0 ? `${yearsWorked} ano${yearsWorked > 1 ? "s" : ""}` : ""
  }${yearsWorked > 0 && monthsWorked > 0 ? " e " : ""}${
    monthsWorked > 0 ? `${monthsWorked} mês${monthsWorked > 1 ? "es" : ""}` : ""
  }`;
  

const profileSummary = [
  "👋 Hello world, pode me chamar de Elias, Prazer!",
  `👨‍💻 ${workDuration} aprimorando as habilidades no desenvolvimento web.`,
  "📐 Desenvolvendo aplicações com JavaScript, ReactJS, Typescript e outras tecnologias.",
  "💡 Sempre com foco de aprimorar no desenvolvimento Front-end com noções em Back-end.",
  "🚀 Tentando ser um pouquinho melhor do que ontem todos dias.",
];

const About = () => {
  return (
    <Container sx={{ marginTop: 6 }}>
      <Box
        sx={{
          //   background:
          //     "linear-gradient(90deg, #2f263a 0%, rgba(0, 0, 0, 0) 100%)",
          border: `1px solid ${theme.palette.primary.main}`,
          borderRadius: "200px 10px 10px 200px",
        }}
      >
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <Grid item>
            <Avatar
              src={profile}
              alt="Elias Ferro"
              sx={{ width: "300px", height: "300px" }}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 20px",
              gap: "20px",
            }}
          >
            <Stack>
              <Typography
                variant="h3"
                fontWeight={600}
                color={theme.palette.text.secondary}
              >
                {"Elias Sousa Ferro Gomes"}
              </Typography>
            </Stack>
            <Stack gap={"10px"}>
              {profileSummary.map((item, number) => (
                <Typography key={number} color={theme.palette.text.primary}>
                  {item}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
