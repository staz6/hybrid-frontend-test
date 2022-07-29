import { Divider, styled } from '@mui/material'
import React from 'react'
import parse from 'html-react-parser';
import { returnDateFromNow } from '../../helper/helper';

const Container = styled('div')(({theme})=>({
    padding: `10px 20px`,
    marginLeft: `16px`,
    borderRadius: `20px`,
    marginBottom: `16px`
}))

const InfoContainer = styled('div')(({theme})=>({
    display:"flex",
    justifyContent:"space-between",
    height:"30px",
    "& .author":{
        color:theme.palette.primary.main,
        fontSize:"1.1em"
    }
}))

function Comments({val,index}) {
    return (
        <Container key={index}>
            <InfoContainer>
                <p className={"author"}>{val.author}</p>
                <p className={"date"}>{returnDateFromNow(val.created_at)}</p>
            </InfoContainer>
            {
                parse(`${val.text}`)
            }
            <Divider/>
        </Container>
           
    )
}

export default Comments
