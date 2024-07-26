import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { Project } from "../types/types";

const renderCardWorkdAndProjects = ({
  title,
  summary,
  technologies,
}: Project) => {
  return (
    <Card
      sx={{
        maxWidth: "345px",
        border: "1px solid #413a4b",
        background: "#201c26",
        color: "#fff",
      }}
    >
      <CardActionArea sx={{ padding: "20px" }}>
        <CardContent>
          <Stack gap={"15px"}>
            <Typography fontWeight={700}>{title}</Typography>
            <Typography variant="body1" color={"#c5c5c5"}>
              {summary}
            </Typography>
            <Stack direction={"row"} spacing={1}>
              {technologies.map((tecnology) => (
                <Chip
                  label={tecnology.title}
                  component={"a"}
                  href={"#"}
                  variant="outlined"
                  color="secondary"
                  clickable
                />
              ))}
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Works = () => {
  const projects = [
    {
      title: "Formulario de Cadatro",
      summary:
        "Um projeto voltado para demonstrar meu conhecimento em desenvolvimento de formulários.",
      technologies: [{ title: "Formik" }, { title: "React" }],
    },
    {
      title: "Elf System",
      summary:
        "Um projeto de automação comercial, estoque, cadastros, financeiro, relatorios e outras funcionalidades.",
      technologies: [{ title: "Formik" }, { title: "React" }],
    },
  ];

  return (
    <Container>
      <Divider
        sx={{ background: "rgba(123, 74, 226, 0.2)", margin: "100px 0px" }}
      />
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        marginBottom={"50px"}
      >
        <Typography variant="h3" fontWeight={"600"} color={"#d6d6d6"}>
          Trabalhos e Projetos
        </Typography>
        <Button
          variant="outlined"
          size="small"
          color="secondary"
          disableElevation
        >
          <Typography padding={"0px 20px"}>web</Typography>
        </Button>
      </Stack>
      <Grid container spacing={3} sx={{ display: "flex", flexWrap: "wrap" }}>
        {projects.map((project, index) => (
          <Grid item key={index} style={{ marginBottom: "20px" }}>
            {renderCardWorkdAndProjects(project)}
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Works;
