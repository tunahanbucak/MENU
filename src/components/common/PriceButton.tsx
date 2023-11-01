import React, { useState } from "react";
import {
  Box,
  Button,
  ButtonGroup,
  IconButton,
  Rating,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

interface ButtonProps {
  initialPrice: number;
}

export default function PriceButton({ initialPrice }: ButtonProps) {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 0) {
      setQuantity(newQuantity);
      setPrice(newQuantity * initialPrice);
    }
  };
  return (
    <>
      <ButtonGroup
        variant="contained"
        sx={{
          display: "flex",
          mt: 2,
          width: "173px",
          height: "40px",
          justifyContent: "center",
          alignItems: "center",
          border: "none",
          // backgroundColor: theme.palette.primary.main,
          color: "#fff",
        }}
      >
        <IconButton
          aria-label="remove"
          onClick={() => handleQuantityChange(-1)}
          sx={{
            color: "#fff",
          }}
        >
          <RemoveIcon />
        </IconButton>
        <Typography variant="body1" sx={{ mx: 1 }}>
          {quantity}
        </Typography>
        <IconButton
          aria-label="add"
          onClick={() => handleQuantityChange(1)}
          sx={{
            color: "#fff",
          }}
        >
          <AddIcon />
        </IconButton>
      </ButtonGroup>
      <Box
        sx={{
          mt: 2,
          mb: 1,
          // backgroundColor: theme.palette.primary.main,
          display: "inline-block",
          padding: "9px 20px",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
          }}
        >
          Toplam Fiyat: {price} ₺
        </Typography>
      </Box>
    </>
  );
}
