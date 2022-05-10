import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Link from 'next/link'
import { Container } from '@mui/material';
import admin from '../../firebase/nodeApp'
import CivHeader, { civilizations } from './civHeader';
import CivBuildOrderTable from './civBuildOrderTable';

const getAllBuildOrderData = async () => {
  const db = admin.firestore()
  const buildOrderCollection = db.collection('aoe4_build_order')
  let rows=[];

  let allBuildOrders = await buildOrderCollection.get();
  for(const buildOrder of allBuildOrders.docs){
    rows.push(buildOrder.data());
  }

  return rows;
}


export default function BuildOrderTable({ data }) {
  const { rows } = data
  return (
    <Container maxWidth="lg">
      <CivHeader currentValue={0} />
      <CivBuildOrderTable rows={rows} />
    </Container>

  )
}

export async function getServerSideProps() {
  const rows = await getAllBuildOrderData()
  if (!rows) {
    return { notFound: true }
  }
  rows.forEach(row => row.timestamp=JSON.parse(JSON.stringify(row.timestamp)));
  return { props: { data: { rows } } }
}


