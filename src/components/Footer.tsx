import { Container, Divider, Link, Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Container sx={{ padding: "50px 0px" }}>
      <Divider
        sx={{ background: "rgba(123, 74, 226, 0.2)", margin: "50px 0px" }}
      />
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography color={"#d6d6d683"}>
          Copyright © Elias Ferro · 2024
        </Typography>
        <Stack direction={"row"} gap={"10px"}>
          <Link href="https://www.linkedin.com/in/elias-ferro-dev/">
            <LinkedInIcon color="secondary" />
          </Link>
          <Link href="https://github.com/Elias-Ferro">
            <GitHubIcon color="secondary" />
          </Link>
          <Link href="#">
            <InstagramIcon color="secondary" />
          </Link>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Footer;
