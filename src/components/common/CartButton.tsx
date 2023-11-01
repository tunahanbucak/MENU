import { Button } from "@mui/material";
import React from "react";

export default function CartButton() {
  const handleAddToCart = () => {};
  return (
    <Button onClick={handleAddToCart} variant="contained" sx={{ marginTop: 2 }}>
      Sepete Ekle
    </Button>
  );
}
