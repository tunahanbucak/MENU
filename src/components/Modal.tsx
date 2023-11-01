import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { breakfast } from "../utils/data";
import { Box } from "@mui/material";

interface CardItem {
  title: string;
  content: string;
  price: string;
  image: string;
}
interface ModalProps {
  open: boolean;
  onClose: () => void;
  sx: object;
  children: React.ReactNode;
}

export default function Modal({ open, onClose, sx, children }: ModalProps) {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  const handleCardClick = (item: CardItem) => {
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
  };
  return (
    <>
      {selectedItem && (
        <Modal
          open={!!selectedItem}
          onClose={handleCloseDetail}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Card
            sx={{
              maxWidth: 250,
              background: "gray",
            }}
          >
            <CardMedia
              component="img"
              image={selectedItem.image}
              alt={selectedItem.title}
              sx={{ maxWidth: 300, maxHeight: "80vh" }}
            />
            <CardContent>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                }}
              >
                {selectedItem.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  color: "#fff",
                }}
              >
                {selectedItem.content}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "#add8e6",
                }}
              >
                {selectedItem.price}
              </Typography>
            </CardContent>
          </Card>
        </Modal>
      )}
    </>
  );
}
