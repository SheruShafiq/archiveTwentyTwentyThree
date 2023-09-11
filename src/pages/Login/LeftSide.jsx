// src/components/LeftSide.tsx
import { Box } from "@mui/material";
import News from "@/components/News";

const LeftSide = ({ backgroundImage, news, size }) => {
  return (
    <Box
      sx={{
        flex: 2,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: {
          xs: "flex-start",
          sm: "flex-start",
          md: "flex-end",
          lg: "flex-end",
          xl: "flex-end",
        },
        height: "auto",
      }}
    >
      {size.width <= 600 ? null : <News articles={news} />}
    </Box>
  )
};

export default LeftSide;
