import React from "react";
import { styled } from "@mui/material/styles";

const Container = styled("div")(({ theme }) => ({
  width: "90%",
  marginLeft: "auto",
  marginRight: "auto",
}));

function MainLayout(props) {
  return <Container>{props.children}</Container>;
}

export default MainLayout;
