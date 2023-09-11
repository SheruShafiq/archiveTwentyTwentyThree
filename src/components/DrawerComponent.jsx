import { Box, Drawer, Fab, Typography } from "@mui/material";
import Close from "@mui/icons-material/Close";

import { useWindowSize } from 'usehooks-ts'

const DrawerComponent = ({
  open,
  onClose,
  title,
  children,
  buttons,
  maxWidth
}) => {
  const { width } = useWindowSize();

  const calculatedWidth = Math.min(width, maxWidth);

  return (
    <>
      <Drawer
        onClose={onClose}
        anchor="right"
        open={open}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        PaperProps={{
          sx: {
            "& .MuiPaper-root": {
              transition: "width 0.10s ease-in-out",
            },
            width: calculatedWidth,
            transition: "width 0.5s ease-in-out",
            zIndex: 1301,
          },
        }}
      >
        <Box
          paddingLeft={{ xs: "1rem", sm: "1rem", md: "2rem" }}
          paddingRight={{ xs: "1rem", sm: "1rem", md: "2rem" }}
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Box
            display={"flex"}
            paddingTop={{ xs: "1rem", sm: "1rem", md: "2rem" }}
            width={"100%"}
            justifyContent={"space-between"}
            alignItems={"center"}
            marginBottom={"1.5rem"}
          >
            <Typography variant="h1" fontSize={"1.25rem"} fontWeight={500}>
              {title}
            </Typography>
            <Fab
              sx={{
                boxShadow: "none",
                flexShrink: 0,
              }}
              onClick={onClose}
              size="small"
              data-testid="close"
            >
              <Close />
            </Fab>
          </Box>
          {children}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "flex-end" },
              alignItems: { xs: "center", sm: "flex-end" },
              gap: 2,
              py: 2,
            }}
          >
            {buttons}
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default DrawerComponent;
