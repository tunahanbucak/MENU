import React, { useState, useRef } from "react";
import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CartButton from "./CartButton";
import MenuContainer from "./MenuContainer";
import MenuTabs from "./MenuTabs";
import { useTranslation } from "react-i18next";

export default function Header() {
  const languages = [
    { code: "en", label: "English", flag: "en" },
    { code: "tr", label: "Türkçe", flag: "tr" },
  ];
  const { i18n } = useTranslation();
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    i18n.changeLanguage(selectedLanguage);
  };
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            mb: 1.3,
          }}
        >
          <FormControl
            sx={{
              background: "#add8e6",
            }}
          >
            <Select
              value={i18n.language}
              onChange={handleLanguageChange}
              label="Language"
            >
              {languages.map((lang) => (
                <MenuItem key={lang.code} value={lang.code}>
                  <img
                    src={`./assets/flags/${lang.flag}.png`}
                    alt={lang.label}
                    style={{ width: "22px", marginRight: "8px" }}
                  />
                  {lang.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <CartButton itemCount={2} />
        </Box>
        <Typography sx={{ fontSize: "15px", color: "white" }}>
          Eşsiz Lezzetler Dünyasına Hoş Geldiniz
          <RestaurantIcon sx={{ ml: 1, fontSize: "20px" }} />
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
function tokens(mode: any) {
  throw new Error("Function not implemented.");
}
