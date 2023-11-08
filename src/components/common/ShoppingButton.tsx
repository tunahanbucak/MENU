import { Box, Button, Typography } from "@mui/material";

export default function ShoppingButton() {
  return (
    <Box>
      <Button variant="contained">
        <Typography
          sx={{
            textTransform: "none",
          }}
        >
          Sepete ekle
        </Typography>
      </Button>
    </Box>
  );
}
