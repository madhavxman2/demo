import React, { useContext } from 'react'
import Layout from '../../components/layout/Layout'
import myContext from '../../context/data/myContext'
import HeroSection from '../../components/heroSection/HeroSection'
import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testinomial from '../../components/testinomial/Testinomial'
import Track from '../../components/track/Track'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart,deleteFromCart } from '../../redux/cartSlice'

function Home() {
  const dispatch=useDispatch();
  const cartItem=useSelector((state)=>state.cart);

  const addCart=()=>{
    dispatch(addToCart("shirt"));
  }

  console.log(cartItem);
  const deleteCart=()=>{
    dispatch(deleteFromCart('shirt'));
  }

  return (
    <Layout>
     <HeroSection/>
     <Filter/>
     <ProductCard/>
     <Track/>
     <Testinomial/>
    </Layout>
  )
}

export default Home
