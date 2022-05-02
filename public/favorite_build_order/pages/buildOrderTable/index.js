import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { getAllBuildOrderData } from './getAllBuildOrderData'

export default function BuildOrderTable({ data }) {
  console.log(data);
const { rows } = data

  return (
  <TableContainer component={Paper}>
  <Table sx={{ minWidth: 650 }} aria-label="simple table">
    <TableHead>
      <TableRow>
        <TableCell>Votes</TableCell>
        <TableCell align="right">Name</TableCell>
        <TableCell align="right">Tags</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {rows.map((row) => (
        <TableRow
          key={row.name}
          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.civ}</TableCell>
          <TableCell align="right">{row.description}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

  )
}

export async function getServerSideProps() {
  const rows = await getAllBuildOrderData()
  if (!rows) {
    return { notFound: true }
  }
  return { props: { data: { rows } } }
}


