import { getFirestore, setDoc,addDoc, doc,collection } from 'firebase/firestore'

import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState, Suspense } from 'react'
import { useUser } from '../context/userContext'
import Image from 'next/image'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material'

export default function Home() {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  const buildOrder = { name: 'Default English Build order',
  description: 'Just for testing',
  civ: 'English',
  url: 'AwLmwHwMQSwJwM4BcAEA2FBvArAZgL4pID2WA7NvhKOBAHICmAHqjgUaZhVaAEyQAVABYMAdil5Y8hAEYBXGABsAJlgAcAFkIosATjKEAhqNUBbGKIblgVAIxhIuKe3lLVmXe2OqAxnNZoalS8DhAazrIKKnoGKN4o5pZYaLpUuCD8EJi27JYsERzJQRDpuJAAQlHutrY2KADuMEhCEgUAZnDEptZpIBqQAIJtSAxwKGXAyakoCGKqhoqK7Z3dmCmEJEVU2KGVbli2akENTS3hbIQdXVsQQA'
 }

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log(user)
      return;
    } 
    // You also have your firebase app initialized
  }, [loadingUser, user])

  const createBuildOrder = async () => {
    const db = getFirestore()
    await addDoc(collection(db, 'aoe4_build_order'), buildOrder)
  }
  
  return (
    <div>
      <Head>
        <title>Aoe4 Favorite Build Orders</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <div className="titleBar">
    <div className="containerInner">
      <a className="titleLine" href="https://age4builder.com/index.html">Age of Empires IV<br />Build Order Tool</a>
      <div className="titleDonate">
        <a href="https://github.com/LENpolygon/Build-Order-Tool-AoE4-" style={{color:'#fff'}}
          title="This website is on Github, check out the code and build onto it!">Donate Code</a>
        <a href="https://ko-fi.com/lenpolygon" title="This website is Ad-Free, consider donating to maintain it!">Donate
          Coin</a>
      </div>
    </div>
  </div>
  <Container maxWidth="lg">
  <Button onClick={createBuildOrder}>Create A New Build Order</Button>

  <Button href="/buildOrderTable">
  <Typography component="h2" variant="h6" color="primary">
  AOE4 Build Orders 
    </Typography>
    </Button>

</Container>
      </main>

      <style jsx>{`
a, article, b, body, code, dd, div, dl, dt, footer, h1, h2, h3, h4, h5, h6, header, html, i, img, li, menu, nav, p, s, section, small, span, table, tbody, td, th, thead, time, tr, u, ul, var {
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  margin: 0;
  padding: 0
}

article, footer, header, menu, nav, section {
  display: block;
  position: relative;
}

body {
  line-height: 1;
}

table {
  border-collapse: collapse;
  border-spacing: 0
}

html {
  background: #181C29;
  color: #fff;
  font-size: 14px;
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
}

p {
  line-height: 1.5em;
  padding-left: 5px;
  padding-right: 5px;
}

a {
  text-decoration: none;
  color: white;
}

.containerInner {
  margin: auto;
  position: relative;
  max-width: 1200px;
  flex: 1 1 100%;
  background-repeat: no-repeat;
  background-position: left bottom;
}

.titleBar {
  box-shadow: 0 0 3px rgba(10, 10, 10, .4);
  background: #11141D;
  margin-bottom: 10px;
  display: block;
  position: relative;
  text-transform: uppercase;
}

.titleLine {
  color: #ffdb88;
  font-family: 'Times New Roman', Times, serif;
  font-size: 24px;
  padding: 6px 8px;
  height: 47px;
  display: inline-block;
  vertical-align: middle;
  letter-spacing: 4px;
}

.titleDonate img {
  vertical-align: middle;
  margin-top: 5px;
  margin-right: 10px;
  margin-left: 10px;
}

.titleDonate a {
  color: #ffdb88;
}

.civBar {
  box-shadow: 0 0 3px rgba(10, 10, 10, .4);
  border: 1px solid #11141D;
  background: #1E2536;
  display: block;
  font-size: 13px
}

.civBar ul li {
  display: inline-block;
  margin-right: 15px
}

.civBar ul li a {
  display: block;
  border-top: 2px solid transparent;
  border-bottom: 2px solid transparent;
  color: #c4c4c4;
  padding: 8px 18px
}

.civBar ul li a:hover {
  color: #fff
}

.civBar ul li.active a {
  background: #11141D;
  color: #ffdb88;
}

.civBox {
  box-shadow: 0 0 3px rgba(10, 10, 10, .4);
  border: 1px solid #11141D;
  background: #1E2536;
  position: relative;
  padding: 8px;
  margin: 13px 0 0 0
}

.civFlag {
  display: inline-block;
  margin-right: 7px;
}

.civFlag img {
  height: 50px;
}

.civStats {
  display: inline-block;
  vertical-align: top
}

.civStats h1 {
  font-size: 30px;
  padding-bottom: 5px;
}

.buildActions {
  position: absolute;
  right: 0px;
  top: 0px;
  font-size: 11px;
}

.buildMenu {
  display: none
}

.footerBar {
  color: rgba(255, 255, 255, .6);
  clear: both;
  position: relative;
  margin: 6px 0 0 0;
  padding: 4px 0;
  font-size: 12px
}

.footerBar a {
  color: #fff
}

.footerBar a:hover {
  text-decoration: underline
}

.icon {
  cursor: move;
  object-fit: contain;
  height: 48px;
  width: 48px;
  max-width: 48px;
  margin: 3px;
  margin-left: 4.5px;
  /*background: rgb(30,34,33);*/
}

.buildActions button {
  cursor: pointer;
  display: none;
  font-family: "Lucida Grande", Tahoma, Verdana, Arial, sans-serif;
  font-size: 13px;
  letter-spacing: .5px;
  line-height: 13px;
  padding: 9px 13px;
  text-transform: uppercase;
  -webkit-appearance: none;
  border-width: 1px;
  border-style: solid;
  border-color: #ffdb88;
  background: #1E2536;
  color: #ffdb88;
  text-shadow: 1px 1px 0 rgba(10, 10, 10, .4)
}

.buildActions button:hover {
  background: #2C374F;
}

section {
  margin-bottom: 10px
}

section header {
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
  text-transform: uppercase;
  padding: 6px 4px;
  text-shadow: 1px 1px 2px #000;
}

section article {
  box-shadow: 0 0 3px rgba(10, 10, 10, .4);
  border: 1px solid #11141D;
  background: #1E2536;
}

table {
  width: 100%;
  font-size: 22px;
  text-align: center;
  line-height: 50px;
  vertical-align: bottom;
}

table img {
  vertical-align: middle;
}

table tbody tr {
  background: #2C374F;
}

table tbody tr:nth-child(2n) {
  background: #1E2536;
}

table td {
  padding: 4px;
  vertical-align: middle
}

table th {
  line-height: 36px;
  vertical-align: top;
  padding: 4px;
}

.selected {
  color: #ffdb88;
}

*:focus {
  outline-color: #ffdb88;
  outline-style: solid;
  outline-width: 1px;
}

.fold {
  cursor: pointer;
}

.boxed {
  max-height: 0;
  transition: max-height .2s ease-out;
  padding: 0;
  position: relative;
  overflow-y: hidden;
}

.tooltip {
  text-decoration: none;
  position: relative;
  overflow: visible;
}

.tooltip span {
  display: none;
}

.tooltipContainer {
  position: absolute;
  max-width: 400px;
}

.tooltipBox {
  box-shadow: 0 0 3px rgba(10, 10, 10, .4);
  border: 1px solid #11141D;
  background: rgb(17,20,29);
background: linear-gradient(0deg, rgba(17,20,29,1) 0%, rgba(30,37,54,1) 100%);
  position: relative;
  padding: 8px;
  margin: 13px 0 0 0;
}

.tooltipBox img {
  margin: 0;
  padding: 0;
  overflow: visible;
  object-fit: contain;
}

.smallIcons img {
  width: 24px;
  max-width: 24px;
}

.tooltipColumn1 {
  display: inline-block;
  width: 68px;
}

.tooltipColumn2 {
  display: inline-block;
  max-width: 312px;
  vertical-align: top;
}

.tooltipColumn2 header {
  text-transform: uppercase;
}

@media (min-width:800px) {
  .titleDonate {
      position: absolute;
      top: 0px;
      right: 0px;
  }

  .civStatsMore {
      position: absolute;
      top: 8px;
      right: 8px;
  }

  .contentInner {
      display: grid;
      width: 100%;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 10px;
  }

  .buildOrder {
      grid-column: span 2
  }

  .buildMenu {
      grid-column: span 1;
      display: block
  }

  .buildActions button {
      display: inline-block
  }

  table .buildTime {
      width: 36px
  }
}      `}</style>

    </div>
  )
}
