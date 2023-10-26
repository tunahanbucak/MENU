import React, { useState, useRef } from "react";
import { Tabs, Tab, Box, IconButton, Grid, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BreakfastMenu from "./BreakfastMenu";
import PancakeMenu from "./PancakeMenu";
import PitaMenu from "./PitaMenu";
import PizzaMenu from "./PizzaMenu";
import DonerMenu from "./DonerMenu";
import LahmacunMenu from "./LahmacunMenu";
import DessertMenu from "./DessertMenu";
import HotBeverageMenu from "./HotBeverageMenu";
import ColdBeverageMenu from "./ColdBeverageMenu";

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
          sx={{ mb: 2, fontSize: "24px", fontWeight: "bold", color: "white" }}
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
      </Box>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <IconButton onClick={handleScrollLeft} sx={{ color: "white" }}>
          <KeyboardArrowLeftIcon />
        </IconButton>
        <Tabs
          textColor="inherit"
          value={value}
          onChange={handleTabChange}
          indicatorColor="secondary"
        >
          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Kahvaltı"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://cdn1.ntv.com.tr/gorsel/1qX9VXyltkuPdCX9_mUjww.jpg?width=952&height=540&mode=both&scale=both"
                alt="Kahvaltı"
              />
            }
          />

          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Gözleme"
            icon={
              <img
                style={{
                  height: 75,
                  width: "100%",
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrYth1Qv5ki3eNNgwB_88AlEFFvouKeN-qEQ&usqp=CAU"
                alt="Gozleme"
              />
            }
          />
          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Pide"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://i4.hurimg.com/i/hurriyet/75/750x422/618927c84e3fe10c08ab1591.jpg"
                alt="Pide"
              />
            }
          />
          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Pizza"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://cdn.yemek.com/mnresize/1250/833/uploads/2022/03/ev-usulu-pizza-yemekcom.jpg"
                alt="Pizza"
              />
            }
          />
          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Döner"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDsIkw3wEXlgU2GGHhYwjyBEi62AdqCMhQQ&usqp=CAU"
                alt="Doner"
              />
            }
          />
          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Lahmacun"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://cdn.yemek.com/mnresize/940/940/uploads/2020/04/lahmacun-yeni-one-cikan.jpg"
                alt="Lahmacun"
              />
            }
          />

          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Tatlı"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl64LIFwFva_fNmaeQJpLv7glkn875VPN9VA&usqp=CAU"
                alt="Tatli"
              />
            }
          />
          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Sıcak İçecek"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRywib5PVjiFSAdSU3rXWZg7QSlvboDtB3Mx0o_Ih2smpUDB_y0N1XZzIaQ48-7_B9FeRQ&usqp=CAU"
                alt="Sicak Icecek"
              />
            }
          />
          <Tab
            sx={{
              color: "#add8e6",
            }}
            label="Soğuk İçecek"
            icon={
              <img
                style={{
                  height: 75,
                }}
                src="https://blog.ciceksepeti.com/wp-content/uploads/2021/03/Limonata.png"
                alt="Soguk Icecek"
              />
            }
          />
        </Tabs>
        <IconButton onClick={handleScrollRight} sx={{ color: "white" }}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
      <Box
        ref={scrollContainerRef}
        sx={{
          overflowX: "auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid container spacing={2} sx={{ marginTop: "2rem" }}>
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
    </Box>
  );
}
