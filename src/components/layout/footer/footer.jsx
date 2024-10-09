import React from 'react'
import logo from '../../../assets/logo.svg'

export const Footer = () => {
    return (
        <footer className='footer mt-20 bg-[#EDF2F6]'>
            <div className='container mx-auto flex flex-col gap-20 pt-10'>
                <div className='flex flex-row gap-20'>
                <div className='item-footer flex flex-col gap-2 w-[300px]'>
                    <div className='logo'>
                        <img src={logo} alt="Smart Техника" className="" />
                    </div>
                    <h5 className='text-xl font-bold'>+7 (958) 111-95-03</h5>
                    <h5 className='text-xl font-bold'>+7 (812) 660-50-54</h5>
                    <p className='text-xl text-[#838688]'>Пн-вс: с 10:00 до 21:00</p>
                    <p className='text-md  w-[80%] text-[#070C11]'>Проспект Стачек 67 к.5
                        Лиговский проспект 205
                        Гражданский проспект, 116 к.5</p>
                </div>
                <div className='item-footer flex flex-col gap-2  w-[250px]'>
                    <h1 className='footer-title text-xl font-bold text-[#838688]'>Для клиента</h1>
                    <p className='footer-link text-md'>Доставка и оплата</p>
                    <p className='footer-link text-md'>Кредит</p>
                    <p className='footer-link text-md'> Политика конфиденциальности</p>
                    <p className='footer-link text-md'>Вопросы и ответы (F.A.Q.)</p>
                    <p className='footer-link text-md'>Сервис и гарантия</p>
                </div>
                <div className='item-footer flex flex-col gap-2  w-[250px]'>
                    <h1 className='footer-title text-xl font-bold text-[#838688]'>О магазине</h1>
                    <p className='footer-link text-md'>Наши преимущества</p>
                    <p className='footer-link text-md'>История компании</p>
                    <p className='footer-link text-md'>Сотрудничество</p>
                    <p className='footer-link text-md'>Партнёрская программа</p>
                    <p className='footer-link text-md'>Вакансии</p>
                    
                </div>
                <div className='item-footer flex flex-col gap-2  w-[250px]'>
                    <h1 className='footer-title text-xl font-bold text-[#838688]'>Сотрудничество</h1>
                    <p className='footer-link text-md'>Оптом</p>
                    <p className='footer-link text-md'>Дропшиппинг</p>
                </div>
                </div>
                <div className='flex border-t-2 border-[#838688] pt-8 pb-6 justify-between'>
                <p className='text-[14px]'>SmartТехника © 2021 Все права защищены</p>
                <div className='flex gap-4'>
                    <i className='fa-brands fa-instagram text-[#4878A6] text-[20px]'></i>
                    <i className='fa-brands fa-facebook text-[#4878A6] text-[20px]'></i>
                    <i className='fa-brands fa-vk text-[#4878A6] text-[20px]'></i>
                    <i className='fa-brands fa-twitter text-[#4878A6] text-[20px]'></i>
                </div>
                <p>Разработка: websl.ru</p>
            </div>
            </div>
            
        </footer>
    )
}
