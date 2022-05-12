import { useRouter } from 'next/router'
import CivHeader, { civilizations } from '../../utils/civHeader';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import admin from '../../firebase/nodeApp'
import CivBuildOrderTable from '../../utils/civBuildOrderTable';

const getCivBuildOrderData = async (civ, page, orderBy) => {
  const db = admin.firestore()
  const buildOrderCollection = db.collection('aoe4_build_order')
    .where("civ", "==", civ)
    .orderBy(orderBy, 'desc')
    .offset((page-1)*10)
    .limit(10);
  let rows = [];
  let allBuildOrders = await buildOrderCollection.get();
  for (const buildOrder of allBuildOrders.docs) {
    rows.push(buildOrder.data());
  }

  return rows;
}

export default function CivsBuildOrdersPage({ data }) {
  const router = useRouter()
  const { civ, page } = router.query
  const index = civilizations.findIndex(c => c.abbr === civ);
  const { timestamp_rows, like_count_rows  } = data
  return (
    <Container maxWidth="lg">
      <CivHeader currentValue={index} />
      <Grid container>
        <Grid item xs={6}>
          <h2> Most Recent Builds</h2>
          <CivBuildOrderTable rows={timestamp_rows} />
        </Grid>
        <Grid item xs={6}>
          <h2> Most Popular Build</h2>
          <CivBuildOrderTable rows={like_count_rows} />
        </Grid>
      </Grid>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const { civ, page } = context.query;
  const timestamp_rows = await getCivBuildOrderData(civ, page, "timestamp");
  const like_count_rows = await getCivBuildOrderData(civ, page, "like_count");

  if (!timestamp_rows || !like_count_rows) {
    return { notFound: true }
  }
  timestamp_rows.forEach(row => row.timestamp = JSON.parse(JSON.stringify(row.timestamp)));
  like_count_rows.forEach(row => row.timestamp = JSON.parse(JSON.stringify(row.timestamp)));
  return { props: { data: { timestamp_rows, like_count_rows } } }
}
