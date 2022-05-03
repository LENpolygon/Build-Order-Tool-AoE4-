import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'

import { getAllBuildOrderData } from './getAllBuildOrderData'
import { Container } from '@mui/material';

export default function BuildOrderTable({ data }) {
  const { rows } = data

  return (
    <Container maxWidth="lg">
      <h1> All Build Orders</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Description</TableCell>
              <TableCell sm align="right">Civ</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  <Link href={`/editor.html?c=${row.civ}&s=${row.url}`}>{row.name}</Link>
                </TableCell>
                <TableCell align="right">{row.description}</TableCell>
                <TableCell sm align="right">{row.civ}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>

  )
}

export async function getServerSideProps() {
  const rows = await getAllBuildOrderData()
  if (!rows) {
    return { notFound: true }
  }
  return { props: { data: { rows } } }
}


