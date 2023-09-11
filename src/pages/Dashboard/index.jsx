import { Box, Stack } from "@mui/material";
import News from "@/components/News";
import QuickLinks from './QuickLinks'
import RecentLinks from "./RecentLinks";
import Mutations from "./Mutations";
import PageHeading from "@/components/PageHeading";

import useFetch from "@/hooks/useFetch";

export default function DashboardPage() {
  const { data: articles } = useFetch('news');

  return (
    <Box display="flex" flexDirection="row" width="100%">
      <Stack id="leftSide" width="100%">
        <PageHeading
          title="Welkom Test Gebruiker"
          subtitle="Voorbeeld Verzekeringen BV"
        />
        <QuickLinks/>
        <News articles={articles} onMobile={true} />
      </Stack>
      <Stack id="rightSide" width="18.75rem" height="100%" ml="3rem">
        <Stack m={1.5} height="100%">
          <RecentLinks />
          <Mutations />
        </Stack>
      </Stack>
    </Box>
  )
}
