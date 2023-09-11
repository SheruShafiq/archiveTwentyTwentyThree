import { Button } from "@mui/material";

import EHerkenningLogo from "@/assets/eherkenning-logo.svg";

import useAuth from "@/hooks/useAuth";

const LoginButton = () => {
  const { session } = useAuth();

  return (
    <form action="/api/auth/developer" method="post" data-testid="form">
      <input type="hidden" name="authenticity_token" value={session.csrf} />
      <Button
        variant="outlined"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "270px",
          height: "37px",
          color: "#3C4653",
          borderColor: "#3C4653",
        }}
        disableRipple
        type="submit"
        name="login"
        data-testid="button"
      >
        INLOGGEN MET
        <img
          src={EHerkenningLogo}
          style={{
            position: "relative",
            top: "2px",
            width: "117px",
            height: "auto",
            scale: "1.2",
          }}
        />
      </Button>
    </form>
  );
};

export default LoginButton;
