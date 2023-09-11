import { useEffect, useMemo } from "react";
import { Box, Button, Divider, Skeleton, Typography } from "@mui/material";

import Edit from "@mui/icons-material/Edit";
import InfoDisplay from "@/components/InfoDisplay";
import PageHeading from "@/components/PageHeading";

import AddressMap from "./AddressMap";

import { useWindowSize } from 'usehooks-ts'
import { useParams } from "react-router-dom";
import useRecently from "@/hooks/useRecently";
import useFetch from "@/hooks/useFetch";

const Customer = () => {
  const { width } = useWindowSize();
  const { id } = useParams();
  const { data: relation, loading } = useFetch(`relations/${id}`);
  const { addRecent } = useRecently();

  useEffect(() => {
    if (!relation) return;
    addRecent({
      title: relation?.name,
      url: `/portfolio/${id}`,
      items: [`Relatienummer: ${relation?.relations?.[0].external_number}`]
    });
  }, [id, relation, addRecent]);

  const address = useMemo(() => {
    if (!relation) return null
    return `${relation.street} ${relation.housenumber}${relation.housenumber_addition},  ${relation.city}`
  }, [relation])

  return (
    <>
      <PageHeading
        subtitle={"Portefeuille - klantbeeld"}
        title={relation?.name}
        loading={loading}
      >
        <Button
          variant="outlined"
          startIcon={<Edit />}
          sx={{
            width: { xs: "auto", sm: "280px" },
            color: "#3C4653",
            borderColor: "#3C4653",
          }}
          onClick={() => console.log('start wijziging')}
        >
          {width > 600 ? "Wijzigingen doorvoeren" : "Wijzigen"}
        </Button>
      </PageHeading>
      <Box
        display="flex"
        width="100%"
        sx={{ mt: "2rem" }}
        flexDirection={{ xs: "column", sm: "row" }}
      >
        <Box flex={1}>
          <InfoDisplay
            label="Telefoonnummer"
            value={relation?.phone_number || ""}
          />
          <InfoDisplay
            label="Mobiel nummer"
            value={relation?.mobile_number || ""}
          />
          <InfoDisplay label="Openstaand bedrag" value="€45,23 (?)" />
          <InfoDisplay
            label="Uitvaartwensen"
            value={relation?.relations?.length ? "Ja" : "Nee"}
          />
        </Box>
        <Box flex={1}>
          <InfoDisplay label="Email" value={relation?.email || ""} />
          <InfoDisplay
            label="IBAN"
            value={relation?.relations?.[0]?.policies?.[0]?.iban || ""}
          />
          <InfoDisplay label="Adres" value={address || ""} />
          <InfoDisplay label="Toegang MijnOmgeving" value="Ja (?)" />
        </Box>
        {width > 899 && (
          <Box flex={1}>
            <AddressMap postalCode="2031WL" houseNumber="1" />
          </Box>
        )}
      </Box>
    </>
  );
};

export default Customer;
