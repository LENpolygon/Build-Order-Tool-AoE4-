import admin from '../../firebase/nodeApp'
import {getDocs,collection } from 'firebase/firestore'

// might need to do pagination, but w/e
export const getAllBuildOrderData = async () => {
  const db = admin.firestore()
  const buildOrderCollection = db.collection('aoe4_build_order')
  let rows=[];

  let allBuildOrders = await buildOrderCollection.get();
  for(const buildOrder of allBuildOrders.docs){
    rows.push(buildOrder.data());
  }

  return rows;
}
