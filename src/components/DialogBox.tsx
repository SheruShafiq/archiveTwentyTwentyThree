import React from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Drawer,
} from "@mui/material";

import { useWindowSize } from 'usehooks-ts'

export type DialogBoxProps = {
  open: boolean;
  onCancel: () => void;
  onOk: () => void;
  title: string;
  description: string;
  onCloseOkText: string;
  onCloseCancelText: string;
  children?: React.ReactNode;
};

const DialogBox = ({
  open,
  children,
  onCancel,
  onOk,
  title,
  description,
  onCloseOkText,
  onCloseCancelText
}: DialogBoxProps) => {
  const { width } = useWindowSize()

  return width > 600 ? (
    <Dialog
      open={open}
      sx={{
        "& .MuiDialog-paper": {
          width: "507px",
          minHeight: "254px",
          pt: "1rem",
          pr: "1rem",
          pl: "1rem",
        },
      }}
    >
      <DialogTitle minWidth={"427px"}>{title}</DialogTitle>
      <DialogContentText>{description}</DialogContentText>
      {children}
      <DialogActions sx={{ mt: "2rem" }}>
        <Button
          color="inherit"
          sx={{
            width: { xs: "22rem", sm: "8.5rem" },
            mr: { xs: 0, sm: "2rem" },
          }}
          onClick={onCancel}
        >
          {onCloseCancelText}
        </Button>
        <Button
          variant="contained"
          sx={{ width: { xs: "22rem", sm: "14rem" } }}
          onClick={onOk}
        >
          {onCloseOkText}
        </Button>
      </DialogActions>
    </Dialog>
  ) : (
    <Drawer
      open={open}
      anchor="bottom"
      sx={{
        "& .MuiPaper-elevation16": {
          borderTopRightRadius: "1rem",
          borderTopLeftRadius: "1rem",
        },
      }}
    >
      <Box
        sx={{ borderTopLeftRadius: 8, borderTopRightRadius: 8 }}
        padding={"1.5rem"}
      >
        <DialogTitle
          sx={{
            padding: "0",
          }}
        >{title}</DialogTitle>
        <DialogContentText pt={"1rem"}>{description}</DialogContentText>
        <DialogActions
          sx={{
            mt: "3.5rem",
            justifyContent: "space-around",
            padding: "0",
          }}
        >
          <Button
            color="inherit"
            sx={{
              flex: 1,
              fontSize: "0.8125rem",
            }}
            onClick={onCancel}
          >
            {onCloseCancelText}
          </Button>
          <Button
            variant="contained"
            sx={{
              flex: 1,
              fontSize: "0.8125rem",
            }}
            onClick={onOk}
          >
            {onCloseOkText}
          </Button>
        </DialogActions>
      </Box>
    </Drawer>
  );
};

export default DialogBox;
