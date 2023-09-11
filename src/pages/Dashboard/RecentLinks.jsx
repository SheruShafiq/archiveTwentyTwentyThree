import { Divider, Stack, Typography } from "@mui/material";
import LinkItem from "@/components/LinkItem";

import useRecently from "@/hooks/useRecently";

export default function RecentLinks() {
  const { links } = useRecently();

  if (links.length === 0) {
    return null
  }
  return (
    <Stack id="recentlyOpened">
      <Typography
        fontFamily={"Inter"}
        fontSize={"0.875rem"}
        fontStyle={"Inter"}
        fontWeight={"500"}
        lineHeight={"1.375rem"}
        mb={"0.5rem"}
      >
        Recent geopend
      </Typography>
      <Divider />
      <Stack pl="0.5rem">
        {links.map((props, i) => (
          <LinkItem key={i} {...props} />
        ))}
      </Stack>
    </Stack>
  )
}
