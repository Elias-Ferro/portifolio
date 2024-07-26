import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import { Cards } from "../types/types";

export const CustomCard = ({ h5, h1, link, icon }: Cards) => {
  return (
    <Box sx={{ minWidth: "275px" }}>
      <Card variant="outlined">
        <CardActionArea href={link}>
          <CardContent
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              weidth: "200px",
              background: "#201c26",
            }}
          >
            <Stack padding={"20px"}>{icon}</Stack>
            <Stack padding={"10px"}>
              <Typography color="secondary.dark">{h5}</Typography>
              <Typography variant="h5" color="secondary">
                {h1}
              </Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};
