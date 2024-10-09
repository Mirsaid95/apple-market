import React from "react";
import { data } from "../../data/data";


export const ProductCard = () => {
  return (
    <div className="card container pt-20 mx-auto flex flex-col gap-10">
      <div className="item-card mx-auto flex flex-col gap-4">
        <div className="new-product flex items-center gap-5">
          <h1 className="text-[30px] font-bold">Хиты продаж</h1>
          <span className="text-[16px] font-semibold flex items-center gap-2 text-blue-500">Все товары <i class="fa-solid fa-caret-right"></i></span>
        </div>
        <div className="new-product flex items-center">
          {data.product.map((item) => (
            <div key={item.id} className="w-[320px] border p-4 flex flex-col gap-4">
              <div className="img-product flex items-center justify-center">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info-product flex flex-col gap-2">
                <p className="card-title text-gray-400">{item.title}</p>
                <h5 className="card-info font-semibold">{item.info}</h5>
                <div className="icon-comment flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                  ))}
                  <p className="comment flex items-center gap-2">
                    <i className="fa-regular fa-message"></i>(17)
                  </p>
                </div>
              </div>
              <div className="price-product flex justify-between items-end gap-2">
                <div>
                  <p className="price-new  text-gray-400 font-semibold line-through">{item.price} ₽</p>
                  <p className="price-old  text-[20px] font-semibold">{item.sale}₽</p>
                  <div className="price-percentage-num flex items-center justify-center gap-2 bg-orange-500 w-[125px] h-[25px] rounded-xl">
                    <p className="price-percentage text-green-500 w-[50px] h-[20px] flex items-center justify-center bg-white rounded-[20px]">{item.percentage}%</p>
                    <p className="num-product font-bold text-white">-{item.num} ₽</p>
                  </div>
                </div>
                <div className="icon-product flex items-center gap-2">
                    <span className="cursor-pointer w-[48px] h-[48px] flex items-center justify-center rounded-md border border-gray-400 text-gray-400"><i class="fa-regular fa-heart"></i> </span>
                    <span className="cursor-pointer w-[48px] h-[48px] flex items-center justify-center rounded-md border border-gray-400 text-gray-400"><i class="fa-solid fa-chart-simple"></i></span>
                  </div>
              </div>
              <div className="btn-product flex items-center justify-between">
                <button className="btn-cart w-[180px] h-[40px] rounded-md border-2 border-[rgba(72, 120, 166, 1)] text-[rgba(72, 120, 166, 1)] font-bold" style={{ color: 'rgba(72, 120, 166, 1)' }}>Купить в 1 клик</button>
                <button className="btn-cart-plus w-[40px] h-[40px] rounded-md bg-[rgba(72, 120, 166, 1)] text-white " style={{ backgroundColor: 'rgba(72, 120, 166, 1)' }}><i className="fa-solid fa-cart-plus"></i></button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="item-card mx-auto flex flex-col gap-4">
        <div className="new-product flex items-center gap-5">
          <h1 className="text-[30px] font-bold">Новинки</h1>
          <span className="text-[16px] font-semibold flex items-center gap-2 text-blue-500">Все товары <i class="fa-solid fa-caret-right"></i></span>
        </div>
        <div className="new-product flex items-center">
          {data.product.map((item) => (
            <div key={item.id} className="w-[320px] border p-4 flex flex-col gap-4">
              <div className="img-product flex items-center justify-center">
                <img src={item.img} alt={item.title} />
              </div>
              <div className="info-product flex flex-col gap-2">
                <p className="card-title text-gray-400">{item.title}</p>
                <h5 className="card-info font-semibold">{item.info}</h5>
                <div className="icon-comment flex items-center gap-2">
                  {[...Array(5)].map((_, index) => (
                    <i key={index} className="fa-solid fa-star" style={{ color: '#FFD43B' }}></i>
                  ))}
                  <p className="comment flex items-center gap-2">
                    <i className="fa-regular fa-message"></i>(17)
                  </p>
                </div>
              </div>
              <div className="price-product flex justify-between items-end gap-2">
                <div>
                  <p className="price-new  text-gray-400 font-semibold line-through">{item.price} ₽</p>
                  <p className="price-old  text-[20px] font-semibold">{item.sale}₽</p>
                  <div className="price-percentage-num flex items-center justify-center gap-2 bg-orange-500 w-[125px] h-[25px] rounded-xl">
                    <p className="price-percentage text-green-500 w-[50px] h-[20px] flex items-center justify-center bg-white rounded-[20px]">{item.percentage}%</p>
                    <p className="num-product font-bold text-white">-{item.num} ₽</p>
                  </div>
                </div>
                <div className="icon-product flex items-center gap-2">
                    <span className="cursor-pointer w-[48px] h-[48px] flex items-center justify-center rounded-md border border-gray-400 text-gray-400"><i class="fa-regular fa-heart"></i> </span>
                    <span className="cursor-pointer w-[48px] h-[48px] flex items-center justify-center rounded-md border border-gray-400 text-gray-400"><i class="fa-solid fa-chart-simple"></i></span>
                  </div>
              </div>
              <div className="btn-product flex items-center justify-between">
                <button className="btn-cart w-[180px] h-[40px] font-bold rounded-md border-2 border-[rgba(72, 120, 166, 1)] text-[rgba(72, 120, 166, 1)]" style={{ color: 'rgba(72, 120, 166, 1)' }}>Купить в 1 клик</button>
                <button className="btn-cart-plus w-[40px] h-[40px] rounded-md bg-[rgba(72, 120, 166, 1)] text-white" style={{ backgroundColor: 'rgba(72, 120, 166, 1)' }}><i className="fa-solid fa-cart-plus"></i></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
