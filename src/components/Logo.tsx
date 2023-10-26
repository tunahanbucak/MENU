import { Box } from "@mui/material";
import React from "react";

export default function Logo() {
  return (
    <Box
      sx={{
        position: "sticky",

        width: "100%",
        height: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          color: "white",
        }}
      >
        <img
          src="https://i.pinimg.com/564x/8a/11/3e/8a113e7c9e345d5fa0484bb6c3210967.jpg"
          style={{
            width: 950,
            height: 950,
          }}
          alt=""
        />
      </Box>
    </Box>
  );
}
