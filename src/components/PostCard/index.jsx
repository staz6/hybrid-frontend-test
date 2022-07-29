import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import { returnDateFromNow } from "../../helper/helper";
import Comments from "./Comments";

const Header = styled(CardHeader)(({ theme }) => ({}));

const CustomCard = styled(Card)(({ theme }) => ({
  width: "70%",
  marginTop: "4vh",
}));

const SubHeader = styled("div")(({ theme }) => ({
  alignItems: "center",
  marginRight: "8px",
  color: theme.palette.primary.secondary,
  "& .title": {
    fontSize: "1.1em",
  },
}));

const CreatedAt = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  height: "100%",
}));

const Author = styled("div")(({ theme }) => ({
  color: theme.palette.primary.main,
  textTransform: "capitalize",
  marginTop: "3px",
}));

const Content = styled(CardContent)(({ theme }) => ({
  paddingTop: 0,
  paddingBottom: "0px !important",
  paddingLeft: "6px !important",
  paddingRight: "6px !important",
}));

function PostCard({ data }) {
  return (
    <CustomCard>
      <Header
        disableTypography
        subheader={
          <SubHeader>
            <span className={"title"}>{data.title}</span>
            <Author>{data.author}</Author>
          </SubHeader>
        }
        action={<CreatedAt>{returnDateFromNow(data.created_at)}</CreatedAt>}
      />

      <Content>
        <Divider />
        {data.children.map((val, index) => {
          return <Comments val={val} key={index} />;
        })}
      </Content>
    </CustomCard>
  );
}

export default PostCard;
