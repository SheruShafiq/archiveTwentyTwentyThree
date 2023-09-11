import { useState } from 'react';
import useAuth from "@/hooks/useAuth";
import { useInterval } from 'usehooks-ts';
import { Box, Button, CircularProgress, Modal, Stack, Typography } from '@mui/material';

const TIME_BEFORE_WARNING = 300; // 5 minutes

export default function SessionTimeout() {
  const { expiresAt, logout, extendSession } = useAuth();
  const [remaining, setRemaining] = useState(0);
  const [ showWarning, setShowWarning ] = useState(false);

  useInterval(
    () => {
      const currentTime = Math.floor(new Date().getTime() / 1000);
      if (expiresAt <= currentTime) {
        logout();
      }
      if (expiresAt < currentTime + TIME_BEFORE_WARNING) {
        setShowWarning(true);
      } else {
        setShowWarning(false);
      }
      setRemaining(expiresAt - currentTime)
    },
    expiresAt ? 1000 : null,
  )

  return (
    <Modal
      open={showWarning}
      onClose={() => extendSession()}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack
        sx={{
          width: 400,
          bgcolor: "background.paper",
          boxShadow: 24,
          p: 3,
          borderRadius: "4px",
        }}
        spacing={1}
        data-testid="logout-timer"
      >
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          fontWeight={600}
          fontSize={"24px"}
        >
          Sessie {remaining > 0 ? "bijna " : "is"} verlopen
        </Typography>

        <Typography
          id="modal-modal-description"
          variant="body1"
          fontSize={"16px"}
          lineHeight={"26px"}
        >
          Je gebruikerssessie gaat verlopen vanwege inactiviteit. Verleng de
          sessie om ingelogd te blijven.
        </Typography>
        <Box
          sx={{
            position: "relative",
            display: "inline-flex",
            justifyContent: "center",
            alignItems: "center",
            py: 4,
          }}
        >
          <CircularProgress
            variant="determinate"
            value={(remaining / TIME_BEFORE_WARNING) * 100}
            size={"10rem"}
            sx={{
              scale: "-1 1",
              color: "#94A3B8",
              position: "absolute",
              zIndex: 1,
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
          <CircularProgress
            variant="determinate"
            value={100}
            size={"10rem"}
            sx={{
              color: "#F1F5F9",
              "& .MuiCircularProgress-circle": {
                strokeLinecap: "round",
              },
            }}
          />
          <Box
            sx={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
              position: "absolute",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="caption"
              component="div"
              color="#101828"
              fontWeight={500}
              fontSize={24}
            >
              {remaining}
            </Typography>
          </Box>
        </Box>
        <Stack direction="row" spacing={2} justifyContent={"center"}>
          {remaining > 0 ? (
            <>
              <Button
                variant="outlined"
                onClick={() => logout()}
                fullWidth
                sx={{
                  color: "#3C4653",
                  borderColor: "#3C4653",
                }}
              >
                Uitloggen
              </Button>
              <Button
                variant="contained"
                onClick={() => extendSession()}
                fullWidth
              >
                sessie verlengen
              </Button>
            </>
          ) : (
            <Button
              variant="contained"
              onClick={() => logout()}
              sx={{
                alignSelf: "center",
              }}
            >
              Opnieuw Inloggen
            </Button>
          )}
        </Stack>
      </Stack>
    </Modal>
  );
}