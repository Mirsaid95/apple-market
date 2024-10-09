import React, { useState } from "react";
import logo from "../../../assets/logo.svg"
import { NavLink, Link } from "react-router-dom";
import { data } from "../../data/data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';



export const Header = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="header">
            <div className="item-header bg-white h-[80px] flex items-center">
                <div className="container mx-auto flex justify-between items-center p-2">
                    <div className="logo">
                        <img src={logo} alt="Smart Техника" className="" />
                    </div>
                    <div className="contact-info flex items-center">
                        <p className="mr-4">+7 (812) 660-50-54</p>
                        <p className="mr-4">+7 (958) 111-95-03</p>
                        <p className="text-gray-500">Пн-вс: с 10:00 до 21:00</p>
                    </div>
                    <div className="search-icons flex items-center gap-[30px]">
                        <div className="search-bar border-b w-[100px] flex gap-2 items-center bg-transparent">
                            <i className="fas fa-search ml-2"></i>
                            <input type="text" placeholder="Поиск" className="border-none rounded-none bg-transparent w-[100px] outline-none" />
                        </div>
                        <div className="icons flex">
                            <i className="far fa-eye mx-2"></i>
                            <i className="far fa-heart mx-2"></i>
                            <i className="fas fa-chart-bar mx-2"></i>
                            <i className="fas fa-shopping-cart mx-2"></i>
                        </div>
                        <button className="bg-cyan-900 text-white px-5 py-2 rounded ml-4">Войти</button>
                    </div>
                </div>
            </div>
            <nav className="bg-gray-800 text-white h-[60px] flex items-center ">
                <div className="container mx-auto flex items-center py-4 gap-12">
                    <div 
                        className="catalog-menu relative w-[257px] h-[60px] bg-cyan-900 flex items-center"
                        onMouseEnter={() => setShowSidebar(true)}
                        onMouseLeave={() => setShowSidebar(false)}
                    >
                        <span className="cursor-pointer  gap-5 flex items-center pl-5">
                            <i className="fas fa-bars mr-2"></i>
                            Каталог товаров
                        </span>
                        {showSidebar && (
                            <div className="sidebar absolute top-full  w-[257px] p-2 bg-[rgba(40,103,161,0.51)] text-black  shadow-lg hover: z-10">
                                {data.categories.map((category) => (
                                    <Link 
                                        key={category.id} 
                                        to={category.link} 
                                        className="flex items-center p-2 hover:bg-gray-100"
                                    >
                                        <img src={category.img} alt={category.name} className="w-6 h-6 mr-2" />
                                        <span>{category.name}</span>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-5">
                    {data.navigation.map((item) => (
                        <NavLink key={item.id} to={item.link}>
                            {item.label}
                        </NavLink>
                    ))}
                    </div>
                </div>
            </nav>
        </div>
    )
}