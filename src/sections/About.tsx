import { Avatar, Box, Container, Grid, Stack, Typography } from "@mui/material";
import profile from "../../public/image/el_ferro_perfil.jpg";

const profileSummary = [
  "👋 Hello world, pode me chamar de Elias, Prazer!",
  "👨‍💻 +7 meses aprimorando as habilidades no desenvolvimento web.",
  "📐 Desenvolvendo aplicações com JavaScript, ReactJS, Typescript e outras tecnologias.",
  "💡 Sempre com foco de aprimorar no desenvolvimento Front-end.",
  "🚀 Tentando ser um pouquinho melhor do que ontem todos dias.",
];

const About = () => {
  return (
    <Container sx={{ marginTop: "120px" }}>
      <Box
        sx={{
          background:
            "linear-gradient(90deg, #2f263a 0%, rgba(0, 0, 0, 0) 100%)",
          border: "1px solid rgba(147, 238, 0, 0.658)",
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
              sx={{ width: "350px", height: "350px" }}
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
              <Typography variant="h3" fontWeight={"600"} color={"#d6d6d6"}>
                Elias Sousa Ferro Gomes
              </Typography>
            </Stack>
            <Stack gap={"10px"}>
              {profileSummary.map((item) => (
                <Typography color={"#c4c4c4d8"}>{item}</Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;
