import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import HeadCustom from '../components/common/HeadCustom/HeadCustom'
import NavBar from '../components/common/NavBar/NavBar'
import styles from '../styles/Home.module.css'
import stylesSCSS from '../styles/Home.module.scss'
import {home_Head} from '../DataSet/HomeData/HomeCommon';
import Footer from '../components/common/Footer/Footer'
import Header from '../components/common/Header/Header'



const Home = () => {
  return (
    <>
      <HeadCustom headerInfo={home_Head}></HeadCustom>
      <Header></Header>

      <div className={stylesSCSS.HomeStyleTest}>
        <h2>Home Page Home Page</h2>
      </div>

      <Footer></Footer>
    </>
  )
}

export default Home
