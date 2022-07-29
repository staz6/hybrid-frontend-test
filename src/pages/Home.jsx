import { Input } from '@mui/material'
import React, { useEffect, useReducer } from 'react'
import { Endpoint } from '../api/base'
import SearchIcon from '@mui/icons-material/Search';
import { styled } from "@mui/material/styles";
import { JustifyFlexCenter } from '../styles/styles';
import CustomLoader from '../components/CustomLoader';

const FooterInput = styled(Input)(({ theme }) => ({
    width: "60%",
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    height:"7vh",
    marginTop: "4vh",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "22px",
    "& .searchIcon":{
        color: theme.palette.primary.main,
    },
    "& input": {
      "&::placeholder": {
        color: theme.palette.primary.secondary,
      },
      color:theme.palette.primary.main,
      width: "100%",
    },
    
    
  }));

const HomeContainer = styled(JustifyFlexCenter)(({theme})=>({
    height:"100vh",
    flexDirection:"column",
    justifyContent:"inherit"
}))

const ContentContainer = styled('div')(({theme})=>({
    width:"100%",
    minHeight:"80vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    position:"relative",
    marginTop:"5vh"
}))

const HelperText= styled('h1')(({theme})=>({
    fontSize:"2em",
    color:theme.palette.primary.main,
    marginBottom:"8vh",
}))

const initialState = {searchResult: [], loading: false,helperText:"Opps...It seems like you have no search to show now"}
function reducer (state, action)  {
  switch(action.type) {
      case 'setSearchResult':
          return {...state, searchResult: action.payload}
      case 'setLoading':
          return {...state, loading: action.payload}
      case 'setInitState':
          return {...state, initState: action.payload}
      case 'setHelperText':
          return{...state,helperText:action.payload}

      default:
          throw new Error("Something went wrong!")
  }
}

function Home() {
    const [state, dispatch] = useReducer(reducer, initialState, undefined)

    useEffect(() => {
        Endpoint.getSearchResult("text").then((res)=>{
            console.log(res)
        })
    }, [])

    return (
        <HomeContainer>
            <FooterInput
            placeholder={"Your email"}
            endAdornment={
            <SearchIcon className={"searchIcon"} />
            }
            />

            <ContentContainer>
            <CustomLoader/>

            {
                state.searchResult.length===0 ? 
                <HelperText>{state.helperText}</HelperText>: null
            }
            </ContentContainer>

        </HomeContainer>
    )
}

export default Home
