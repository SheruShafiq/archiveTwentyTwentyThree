// src/pages/Login.tsx
import { Box } from "@mui/material";

import LeftSide from "./LeftSide";
import RightSide from "./RightSide";

import LoginBackground from "@/assets/login-background.jpg";
import Logo from "@/assets/logo.svg";

import useFetch from "@/hooks/useFetch";
import { useWindowSize } from 'usehooks-ts'

const Login = () => {
  const size = useWindowSize();
  const { data: faqs } = useFetch('faqs/public/login');
  const { data: news } = useFetch('news/public');
  const { data: announcements } = useFetch('announcements/public');

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: size.width > 600 && size.width < 900 ? "column" : "row",
        flexGrow: 1,
        height: "100vh",
      }}
    >
      <LeftSide backgroundImage={LoginBackground} news={news} size={size} />
      <RightSide
        logo={Logo}
        announcements={announcements}
        faqs={faqs}
        news={news}
        size={size}
      />
    </Box>
  );
};

export default Login;
