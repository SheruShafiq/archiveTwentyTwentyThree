import { useState } from "react";

import Button from "@/components/Button";
import DownloadButton from "@/components/DownloadButton";

import DrawerComponent from "@/components/DrawerComponent";
import FilePreview from "@/components/FilePreview";
import DialogBox from "@/components/DialogBox";

import { useDocument } from "@/hooks/useDocument";

export default function DetailsDrawer({ document, onClose }) {
  const [showWarning, setShowWarning] = useState(false);
  const id = document ? document.id : null;
  const { url } = useDocument(`documents/${id}`);

  const open = !!document
  const title = document ? document.title : null

  const onCloseRequestHandler = () => {
    setShowWarning(true);
  }

  const onCloseHandler = () => {
    setShowWarning(false);
    onClose();
  }

  return (
    <>
      <DrawerComponent
        maxWidth={800}
        open={open}
        onClose={onCloseRequestHandler}
        title={title}
        buttons={
          <>
            <DownloadButton
              variant="text"
              href={url}
            >
              Downloaden
            </DownloadButton>
            <Button
              variant="contained"
              onClick={onCloseRequestHandler}
            >
              Sluiten
            </Button>
          </>
        }
      >
        {open && (
          <FilePreview url={url} />
        )}
      </DrawerComponent>
      {showWarning && (
        <DialogBox
          open={showWarning}
          onCancel={() => setShowWarning(false)}
          onOk={onCloseHandler}
          title="Weet je zeker dat de mutatie wilt stoppen?"
          description="Als je de mutatie beëindigd dan gaan de gegevens die je mogelijk al hebt ingevoerd verloren. Je kunt altijd de mutatie opnieuw starten op een later tijdstip."
          onCloseCancelText="Annuleren"
          onCloseOkText="Document sluiten"
        />
      )}
    </>
  );
}
