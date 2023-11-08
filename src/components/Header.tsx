import React, { useState, useRef, useContext } from "react";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {
  Box,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import CartButton from "./CartButton";
import MenuContainer from "./MenuContainer";
import MenuTabs from "./MenuTabs";
import i18n from "../i18n";

const languages = [
  { code: "en", label: "English", flag: "en" },
  { code: "tr", label: "Türkçe", flag: "tr" },
];

export default function Header() {
  const handleLanguageChange = (event: SelectChangeEvent) => {
    const selectedLanguage = event.target.value as string;
    i18n.changeLanguage(selectedLanguage);
  };
  const [age, setAge] = React.useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
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
