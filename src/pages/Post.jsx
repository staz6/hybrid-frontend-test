import { styled, Tooltip } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Endpoint } from "../api/base";
import CustomLoader from "../components/CustomLoader";
import PostCard from "../components/PostCard";
import { JustifyFlexCenter } from "../styles/styles";
import ReplyAllIcon from "@mui/icons-material/ReplyAll";

const PostContainer = styled(JustifyFlexCenter)(({ theme }) => ({
  minHeight: "100vh",
  alignItems: "center",
  flexDirection: "column",
}));

const BackIcon = styled(ReplyAllIcon)(({ theme, display }) => ({
  width: "2em",
  height: "2em",
  marginRight: "auto",
  marginLeft: "15%",
  color: theme.palette.primary.main,
  display: display ? "none" : "block",
  cursor: "pointer",
  marginTop: "2vh",
  "&:hover": {
    opacity: "0.8",
  },
}));

function Post() {
  let { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setLoading(true);
    Endpoint.getPostById(id)
      .then((res) => {
        setPost(res.data);
        enqueueSnackbar("Post get Successfully", {
          variant: "success",
        });
        setLoading(false);
      })
      .catch((err) => {
        enqueueSnackbar("Post not found", {
          variant: "error",
        });
        setLoading(false);
        navigate(`/`);
      });
  }, []);

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <>
      <PostContainer>
        <Tooltip title={"Go back"}>
          <BackIcon display={!!loading} onClick={handleGoBack} />
        </Tooltip>
        {loading ? <CustomLoader /> : post ? <PostCard data={post} /> : null}
      </PostContainer>
    </>
  );
}

export default Post;
