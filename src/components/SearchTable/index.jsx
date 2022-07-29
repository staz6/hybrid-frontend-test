import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { returnDateFromNow } from '../../helper/helper';


const CustomTable = styled(Table)(({theme})=>({

  "& .MuiTableCell-head":{
    color:theme.palette.primary.main,
    fontSize:"1.2em"
  },
  "& .MuiTableCell-body":{
    color:theme.palette.primary.secondary,
    cursor:"pointer",
    "&:hover":{
      opacity:0.8
    }
  },
  "& .author":{
    color:theme.palette.primary.main,
    textTransform:"capitalize"
  }
  
}))

function SearchTable({data,handleOnClick}) {
  return (
    <TableContainer component={Paper}>
      <CustomTable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Points</TableCell>
            <TableCell align="center">Comments</TableCell>
            <TableCell align="center">Created at</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.objectID}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              onClick={(e)=>{handleOnClick(row.objectID)}}
            >
              <TableCell component="th" scope="row">
                <span>{row.title}</span>
                <div className={"author"}>{row.author}</div>
              </TableCell>
              <TableCell align="center">{row.points}</TableCell>
              <TableCell align="center">{row.num_comments}</TableCell>
              <TableCell align="center">{returnDateFromNow(row.created_at)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CustomTable>
    </TableContainer>
  );
}
export default SearchTable;
