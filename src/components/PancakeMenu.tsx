import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { pancake } from "../utils/data";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

interface CardItem {
  title: string;
  content: string;
  price: string;
  image: string;
}

export default function PancakeMenu() {
  const [selectedItem, setSelectedItem] = useState<CardItem | null>(null);

  const handleCardClick = (item: CardItem) => {
    setSelectedItem(item);
  };

  const handleCloseDetail = () => {
    setSelectedItem(null);
  };

  return (
    <Box>
      <Typography
        sx={{
          color: "white",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontSize: "20px",
        }}
      >
        GÖZLEMELER
      </Typography>
      {pancake.map((item, index) => (
        <Card
          key={index}
          onClick={() => handleCardClick(item)}
          sx={{
            display: "flex",
            maxWidth: 400,
            margin: "1rem",
            cursor: "pointer",
            background: "gray",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: 150, objectFit: "cover" }}
            image={item.image}
            alt={item.title}
          />
          <CardContent
            sx={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#fff",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                sx={{
                  color: "#fff",
                }}
              >
                {item.content.length > 50
                  ? `${item.content.slice(0, 50)}...`
                  : item.content}
              </Typography>
            </Box>
            <Box>
              <Typography
                variant="h6"
                sx={{
                  color: "#add8e6",
                }}
              >
                {item.price}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
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
    </Box>
  );
}
