import { useRef } from "react";
import { Box, Grid } from "@mui/material";
import BreakfastMenu from "./BreakfastMenu";
import PancakeMenu from "./PancakeMenu";
import PitaMenu from "./PitaMenu";
import PizzaMenu from "./PizzaMenu";
import DonerMenu from "./DonerMenu";
import LahmacunMenu from "./LahmacunMenu";
import DessertMenu from "./DessertMenu";
import HotBeverageMenu from "./HotBeverageMenu";
import ColdBeverageMenu from "./ColdBeverageMenu";

interface MenuProps {
  value: number;
}
export default function MenuContainer({ value }: MenuProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  return (
    <Box
      ref={scrollContainerRef}
      sx={{
        overflowX: "auto",
        width: "100%",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Grid container spacing={2} sx={{ marginTop: "2rem", ml: 1 }}>
        <Grid item xs={12} sm={12}>
          {value === 0 && <BreakfastMenu />}
          {value === 1 && <PancakeMenu />}
          {value === 2 && <PitaMenu />}
          {value === 3 && <PizzaMenu />}
          {value === 4 && <DonerMenu />}
          {value === 5 && <LahmacunMenu />}
          {value === 6 && <DessertMenu />}
          {value === 7 && <HotBeverageMenu />}
          {value === 8 && <ColdBeverageMenu />}
        </Grid>
      </Grid>
    </Box>
  );
}
