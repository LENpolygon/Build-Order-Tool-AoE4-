import { useRouter } from 'next/router'
import CivHeader, { civilizations } from '../../utils/civHeader';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import admin from '../../firebase/nodeApp'
import CivBuildOrderTable from '../../utils/civBuildOrderTable';

const getCivBuildOrderData = async (civ, page) => {
  const db = admin.firestore()
  const buildOrderCollection = db.collection('aoe4_build_order')
    .where("civ", "==", civ)
    .orderBy('timestamp', 'desc')
    .offset((page-1)*10)
    .limit(10);

  let rows = [];
  let allBuildOrders = await buildOrderCollection.get();
  console.log(allBuildOrders);
  for (const buildOrder of allBuildOrders.docs) {
    rows.push(buildOrder.data());
  }

  return rows;
}

export default function CivsBuildOrdersPage({ data }) {
  const router = useRouter()
  const { civ, page } = router.query
  const index = civilizations.findIndex(c => c.abbr === civ);
  const { rows } = data
  return (
    <Container maxWidth="lg">
      <CivHeader currentValue={index} />
      <Grid container>
        <Grid item xs={6}>
          <h2> Most Recent Builds</h2>
          <CivBuildOrderTable rows={rows} />
        </Grid>
        <Grid item xs={6}>
          <h2> Most Popular Build</h2>
          <h4> Coming soon</h4>
        </Grid>
      </Grid>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { civ, page } = context.query;
  const rows = await getCivBuildOrderData(civ, page);
  if (!rows) {
    return { notFound: true }
  }
  rows.forEach(row => row.timestamp = JSON.parse(JSON.stringify(row.timestamp)));
  return { props: { data: { rows } } }
}
