import { Box, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "./Header";
import Logo from "./Logo";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ flexGrow: 1, display: "flex" }}>
      {isMobile ? (
        <Box
          sx={{
            maxWidth: "100vw",
          }}
        >
          <Header />
        </Box>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Header />
          </Grid>
          <Grid
            item
            xs={8}
            sx={{
              position: "sticky",
              top: "0",
            }}
          >
            <Logo />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}
