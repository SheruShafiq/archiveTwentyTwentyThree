import { Box } from "@mui/material";
import QuickLink from "@/components/QuickLink";

const QUICK_LINKS = [
  {
    text: "Zoek een klant",
    onClick: () => {
      console.log("Zoek een klant");
    },
  },
  {
    text: "Nieuwe aanvraag",
    onClick: () => {
      console.log("Nieuwe aanvraag");
    },
  },
  {
    text: "Bereken aanvraagkosten",
    onClick: () => {
      console.log("Bereken aanvraagkosten");
    },
  },
  {
    text: "Zoek document",
    onClick: () => {
      console.log("Zoek document");
    },
  },
];

export default function QuickLinks() {
  return (
    <Box
      display="flex"
      flexDirection="row"
      mt="1.5rem"
      id="quickLinks"
      gap="1.5rem"
    >
      {QUICK_LINKS.map(({ text, onClick }) => (
        <QuickLink key={text} text={text} onClick={onClick} />
      ))}
    </Box>
  )
}