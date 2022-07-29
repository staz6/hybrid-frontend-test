import { styled } from "@mui/material";
import { useSnackbar } from "notistack";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Endpoint } from "../api/base";
import CustomLoader from "../components/CustomLoader";
import PostCard from "../components/PostCard";
import { JustifyFlexCenter } from "../styles/styles";

const PostContainer = styled(JustifyFlexCenter)(({ theme }) => ({
  minHeight: "100vh",
  alignItems: "center",
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

  return (
    <PostContainer>
      {loading ? <CustomLoader /> : post ? <PostCard data={post} /> : null}
    </PostContainer>
  );
}

export default Post;
