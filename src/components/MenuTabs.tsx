import React from "react";
import { Tabs, Tab, Box, IconButton, Grid, Typography } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

interface MenuTabsProps {
  value: number;
  handleTabChange: (event: React.SyntheticEvent, newValue: number) => void;
  handleScrollLeft: () => void;
  handleScrollRight: () => void;
}

export default function MenuTabs({
  value,
  handleTabChange,
  handleScrollLeft,
  handleScrollRight,
}: MenuTabsProps) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <IconButton onClick={handleScrollLeft} sx={{ color: "#add8e6" }}>
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
                width: 115,
                borderRadius: "5px",
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
                borderRadius: "5px",
                width: 115,
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
                borderRadius: "5px",
                width: 115,
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
                width: 115,
                borderRadius: "5px",
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
                width: 115,
                borderRadius: "5px",
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
                width: 115,
                height: 75,
                borderRadius: "5px",
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
                width: 115,
                borderRadius: "5px",
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
                width: 115,
                borderRadius: "5px",
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
                width: 115,
                borderRadius: "5px",
              }}
              src="https://blog.ciceksepeti.com/wp-content/uploads/2021/03/Limonata.png"
              alt="Soguk Icecek"
            />
          }
        />
      </Tabs>
      <IconButton onClick={handleScrollRight} sx={{ color: "#add8e6" }}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
}
