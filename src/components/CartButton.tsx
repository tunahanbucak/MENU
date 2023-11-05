import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Badge,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  useTheme,
} from "@mui/material";

interface ShoppingButtonProps {
  itemCount: number;
}

export default function CartButton({ itemCount }: ShoppingButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box
      sx={{
        mr: 2,
      }}
    >
      <IconButton onClick={handleClick}>
        <Badge
          badgeContent={itemCount}
          color="primary"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <ShoppingCartIcon sx={{ color: theme.palette.primary.main }} />
        </Badge>
      </IconButton>
    </Box>
  );
}
