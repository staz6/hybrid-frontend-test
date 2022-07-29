import { Input } from "@mui/material";
import React, { useEffect, useReducer } from "react";
import { Endpoint } from "../api/base";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import { JustifyFlexCenter } from "../styles/styles";
import CustomLoader from "../components/CustomLoader";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import SearchTable from "../components/SearchTable";

const TopInput = styled(Input)(({ theme }) => ({
  width: "60%",
  borderBottom: `1px solid ${theme.palette.primary.main}`,
  height: "7vh",
  marginTop: "4vh",
  marginLeft: "auto",
  marginRight: "auto",
  paddingBottom: "22px",
  "& .searchIcon": {
    color: theme.palette.primary.main,
  },
  "& input": {
    "&::placeholder": {
      color: theme.palette.primary.secondary,
    },
    color: theme.palette.primary.main,
    width: "100%",
  },
}));

const HomeContainer = styled(JustifyFlexCenter)(({ theme }) => ({
  minHeight: "100vh",
  flexDirection: "column",
  justifyContent: "inherit",
  paddingBottom: "8vh",
}));

const ContentContainer = styled("div")(({ theme }) => ({
  width: "100%",
  minHeight: "80vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  marginTop: "5vh",
}));

const HelperText = styled("h1")(({ theme }) => ({
  fontSize: "2em",
  color: theme.palette.primary.main,
  marginBottom: "8vh",
}));

const initialState = {
  searchResult: [],
  loading: false,
  helperText: "Opps...It seems like you have no search to show now.",
};
function reducer(state, action) {
  switch (action.type) {
    case "setSearchResult":
      return { ...state, searchResult: action.payload };
    case "setLoading":
      return { ...state, loading: action.payload };
    case "setInitState":
      return { ...state, initState: action.payload };
    case "setHelperText":
      return { ...state, helperText: action.payload };

    default:
      throw new Error("Something went wrong!");
  }
}

function Home() {
  const [state, dispatch] = useReducer(reducer, initialState, undefined);
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const setLoading = (state) =>
    dispatch({ type: "setLoading", payload: state });

  const getSearchResult = (e) => {
    var code = e.keyCode || e.which;
    if (code === 13) {
      setLoading(true);
      Endpoint.getSearchResult(e.target.value)
        .then((res) => {
          if(res.data.nbHits===0){
            enqueueSnackbar("No search results found", {
                variant: "warning",
              });
          }else{
            enqueueSnackbar("Search results found", {
                variant: "success",
              });
          }
          
          dispatch({ type: "setSearchResult", payload: res.data.hits });
          setLoading(false);
        })
        .catch((err) => {
          enqueueSnackbar(
            "Sorry something went wrong, please try again later.",
            {
              variant: "error",
            }
          );
          dispatch({
            type: "setHelperText",
            payload: "Opps...Something went wrong.",
          });
          setLoading(false);
        });
    }
  };

  const handleOnClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <HomeContainer>
      <TopInput
        placeholder={"Your email"}
        endAdornment={<SearchIcon className={"searchIcon"} />}
        onKeyPress={getSearchResult}
      />

      <ContentContainer>
        {state.loading ? (
          <CustomLoader />
        ) : state.searchResult.length === 0 ? (
          <HelperText>{state.helperText}</HelperText>
        ) : (
          <SearchTable
            data={state.searchResult}
            handleOnClick={handleOnClick}
          />
        )}
      </ContentContainer>
    </HomeContainer>
  );
}

export default Home;
