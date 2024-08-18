import { Box, Chip, Stack, Typography } from "@mui/material";
import { theme } from "../../style/theme";

const TitlePresentation = ({ title, chips }) => {
  return (
    <Box sx={{ maxWidth: "200px" }}>
      <Typography fontSize={"42px"} fontWeight={600}>
        {title}
      </Typography>

      <Stack direction={"row"} spacing={1}>
        {chips?.map((chip, number) => {
          return (
            <Chip
              key={number}
              variant="outlined"
              label={chip}
              size="small"
              sx={{
                color: theme.palette.primary.main,
                border: `1px solid ${theme.palette.primary.main}`,
              }}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default TitlePresentation;
