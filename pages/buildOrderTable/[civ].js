import { useRouter } from 'next/router'
import CivHeader, { civilizations } from '../../utils/civHeader';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import admin from '../../firebase/nodeApp'
import CivBuildOrderTable from '../../utils/civBuildOrderTable';
import { useCookies } from "react-cookie"
import { v4 as uuidv4 } from 'uuid';
import cookie from "cookie"

const getCivBuildOrderData = async (civ, page, orderBy, user) => {
  const db = admin.firestore()
  const buildOrderCollection = db.collection('aoe4_build_order')
    .where("civ", "==", civ)
    .orderBy(orderBy, 'desc')
    .offset((page-1)*10)
    .limit(10);
  let rows = [];
  let allBuildOrders = await buildOrderCollection.get();
  for (const buildOrder of allBuildOrders.docs) {
    let current_data = buildOrder.data();
    current_data['id'] = buildOrder.id;
    rows.push(current_data); 
  }

  return rows;
}

export default function CivsBuildOrdersPage({ data, user }) {
  const router = useRouter()
  const [cookie, setCookie] = useCookies(["user"])
  if (cookie.user == null || user==null) {
    user = uuidv4();
    setCookie("user",uuidv4() , {
      path: "/",
    })
  }

  const { civ, page } = router.query
  const index = civilizations.findIndex(c => c.abbr === civ);
  const { timestamp_rows, like_count_rows  } = data
  return (
    <Container maxWidth="lg">
      <CivHeader currentValue={index} />
      <Grid container>
        <Grid item xs={6}>
          <h2> Most Recent Builds</h2>
          <CivBuildOrderTable rows={timestamp_rows} user={user} />
        </Grid>
        <Grid item xs={6}>
          <h2> Most Popular Build</h2>
          <CivBuildOrderTable rows={like_count_rows} user={user} />
        </Grid>
      </Grid>
    </Container>
  );
};

function parseCookies(req) {
  return cookie.parse(req ? req.headers.cookie || "" : document.cookie)
}

export async function getServerSideProps(context) {
  const { civ, page } = context.query;
  const cookies = parseCookies(context.req);

  const timestamp_rows = await getCivBuildOrderData(civ, page, "timestamp", cookies.user);
  const like_count_rows = await getCivBuildOrderData(civ, page, "like_count", cookies.user);
  if (!timestamp_rows || !like_count_rows) {
    return { notFound: true }
  }
  timestamp_rows.forEach(row => row.timestamp = JSON.parse(JSON.stringify(row.timestamp)));
  like_count_rows.forEach(row => row.timestamp = JSON.parse(JSON.stringify(row.timestamp)));
  return { props: { data: { timestamp_rows, like_count_rows }, user:cookies.user ?? null } }
}
