import { Box, Card, CardActionArea, Stack, Typography } from "@mui/material";
import { theme } from "../../style/theme";

const InformationCard = ({
  link,
  icon,
  colorIcon,
  colorText,
  primaryText,
  secondaryText,
}) => {
  return (
    <Box>
      <Card
        variant="outlined"
        sx={{
          minWidth: "250px",
          border: `1px solid ${theme.palette.primary.main}`,
        }}
      >
        {/* <CardContent> */}
        <CardActionArea href={link}>
          <Stack alignItems={"center"} sx={{ padding: "10px" }}>
            <Typography color={colorIcon} sx={{ padding: 2}}>
              {icon}
            </Typography>

            <Stack alignItems={"center"}>
              <Typography fontSize={"14px"} color={colorText}>
                {primaryText}
              </Typography>
              <Typography fontSize={"24px"} fontWeight={400} color={colorText}>
                {secondaryText}
              </Typography>
            </Stack>
          </Stack>
        </CardActionArea>
        {/* </CardContent> */}
      </Card>
    </Box>
  );
};

export default InformationCard;
