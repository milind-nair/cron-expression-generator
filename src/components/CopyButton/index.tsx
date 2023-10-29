import { Box, Button } from "@mui/material";

function CopyButton({ cronExpression }: any) {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "5ch" }}>
      <Button
        variant="contained"
        onClick={() => {
          navigator.clipboard.writeText(cronExpression);
        }}
      >
        {" "}
        Copy To ClipBoard
      </Button>
    </Box>
  );
}

export default CopyButton;
