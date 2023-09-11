import { Divider, Stack, Typography } from "@mui/material";
import LinkItem from "@/components/LinkItem";

export default function Mutations() {
  const mutations = []; // for now

  if (mutations.length === 0) {
    return null
  }

  return (
    <Stack id="onGoingMutations" >
      <Typography
        fontFamily={"Inter"}
        fontSize={"0.875rem"}
        fontStyle={"Inter"}
        fontWeight={"500"}
        lineHeight={"1.375rem"}
        mb={"0.5rem"}
      >
        Mutaties in behandeling
      </Typography>
      <Divider />
      <Stack pl="0.5rem">
        {mutations.map((props) => (
          <LinkItem key={props.heading} {...props} />
        ))}
      </Stack>
    </Stack>
  )
}
