import { Stack } from "@mui/material";
import ListTable from "@/components/List/Table";
import { useState } from "react";

import PageHeading from "@/components/PageHeading";
import DetailsDrawer from "./DetailsDrawer";

import useFetch from '@/hooks/useFetch';

export default function DocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const { data: documents, loading } = useFetch('documents');

  return (
    <>
      <Stack id={"topSection"}>
        <PageHeading
          subtitle={"Documenten"}
          title={"Marketing ondersteuning"}
        />
      </Stack>
      <Stack id={"pageContent"}>
        <ListTable
          items={documents}
          loading={loading}
          onClick={(item) => setSelectedDocument(item)}
        />
      </Stack>
      <DetailsDrawer
        document={selectedDocument}
        onClose={() => { setSelectedDocument(null)}}/>
    </>
  );
}
