import { Box, Typography } from "@mui/material";

function Title({ titleString }: any) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <Typography
        variant="h3"
        component="div"
        gutterBottom
        sx={{ color: "primary.main", textAlign: "center" }}
      >
        {titleString}
      </Typography>
    </Box>
  );
}

export default Title;
