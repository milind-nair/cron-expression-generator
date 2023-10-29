import { Paper, Typography, Box, Grid } from "@mui/material";

function CronExpressionDisplay({ cronExpression }: any) {
  const cronParameters = cronExpression.split(" ");

  if (cronParameters.length !== 6) {
    return null; // Return null or handle invalid expressions as needed
  }

  const labels = [
    "Seconds",
    "Minutes",
    "Hours",
    "Day of Month",
    "Month",
    "Day of Week",
  ];

  return (
    <Paper elevation={3} sx={{ padding: "16px", mt: "30px" }}>
      <Typography
        variant="h6"
        gutterBottom
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Cron Expression
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "space-between", mt: "30px" }}
      >
        {labels.map((_label, index) => (
          <Grid item key={index}>
            <Box
              border={1}
              borderRadius={75}
              sx={{
                display: "flex",
                flexDirection: "column",
                mx: "2",
                padding: 4,
              }}
            >
              <Typography variant="body1" sx={{ fontSize: "40px" }}>
                {cronParameters[index]}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default CronExpressionDisplay;
