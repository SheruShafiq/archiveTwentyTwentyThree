import "leaflet/dist/leaflet.css";

import { Box, Skeleton } from "@mui/material";
import { MapContainer, Marker, TileLayer } from "react-leaflet";

import useGeolocate from "@/hooks/useGeolocate";

const AddressMap = ({ postalCode, houseNumber }) => {
  const { data: position, loading } = useGeolocate({ postalCode, houseNumber });

  if (loading) {
    return (
      <Skeleton
        variant="rounded"
        width={"100%"}
        height={"100%"}
        sx={{ my: -0.38 }}
        id="map-skeleton"
        data-testid="map-skeleton"
      />
    );
  }

  return (
    <MapContainer
      center={position}
      zoom={16}
      style={{ height: "100%", width: "100%" }}
      data-testid="map-container"
      id="map-container"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Box id="map-marker">
        <Marker position={position} data-testid="map-marker" />
      </Box>
    </MapContainer>
  );
};

export default AddressMap;
