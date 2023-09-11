import { Typography } from "@mui/material";
import SearchingImage from "@/assets/searching-image.svg";

const NoResults = () => {
  return (
    <>
      <img
        src={SearchingImage}
        alt=""
        style={{
          width: "268px",
        }}
        data-testid="image"
      />
      <Typography
        variant="h1"
        color={"#1A202C"}
        fontWeight={600}
        fontSize={24}
        lineHeight={"32px"}
        sx={{
          mt: "2rem",
        }}
      >
        Helaas geen resultaat{" "}
      </Typography>
      <Typography
        variant="body2"
        color={"#6C737F"}
        sx={{
          mt: "1rem",
          mb: "2rem",
        }}
      >
        We konden geen klanten vinden op basis van de opgegeven zoekwoorden.{" "}
      </Typography>
    </>
  );
};

export default NoResults;
