import React, { useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CartButton from "./CartButton";
import MenuContainer from "./MenuContainer";
import MenuTabs from "./MenuTabs";

export default function Header() {
  const [value, setValue] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  };
  const handleScrollLeft = () => {
    if (value > 0) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft -= 100;
      }
      setValue(value - 1);
    }
  };
  const handleScrollRight = () => {
    if (value < 8) {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += 100;
      }
      setValue(value + 1);
    }
  };
  return (
    <Box>
      <Box
        sx={{
          justifyContent: "center",
          alignItems: "center",
          mb: 1,
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            mb: 2,
            fontSize: "24px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          İSTANBUL ÜMRANİYE
        </Typography>
        <Typography
          sx={{
            color: "#add8e6",
            mb: 1,
            alignItems: "center",
            fontSize: "16px",
          }}
        >
          İstanbul Ümraniye Şube
        </Typography>
        <Typography sx={{ fontSize: "15px", color: "white" }}>
          Eşsiz Lezzetler Dünyasına Hoş Geldiniz
          <RestaurantIcon sx={{ ml: 1, fontSize: "20px" }} />
          <CartButton itemCount={2} />
        </Typography>
      </Box>
      <MenuTabs
        value={value}
        handleTabChange={handleTabChange}
        handleScrollLeft={handleScrollLeft}
        handleScrollRight={handleScrollRight}
      />
      <MenuContainer value={value} />
    </Box>
  );
}
