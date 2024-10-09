import React from "react";
import { Hero } from "../hero/hero";
import { ProductCard } from "../product/productCard";
import { LayoutMain } from "../../layout/layout-main";



export const Home = () =>{
    return(
        <LayoutMain>
            <Hero/>
            <ProductCard />
        </LayoutMain>   
    )
}