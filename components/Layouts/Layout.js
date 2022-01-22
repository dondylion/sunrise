import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";
import youtube from "../../images/youtube.png";
import React from "react";
import {FaPhoneAlt} from 'react-icons/fa';

export default function PageLayout ({ children, title = 'Эстетическая медицина' }) {

    function callMe () {
        alert("HELLO THERE");
    }

    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
                <link rel="shortcut icon" href="https://static.tildacdn.com/tild3535-6437-4561-a566-396538623461/favicon.ico" type="image/x-icon" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="min-h-screen flex flex-col" >
                <nav className="bg-gray-100">
                    <div className="flex justify-between items-center bg-white py-6 lg:px-40 md:px-20 px-10">
                        <div className="">
                            <a href="/">
                                <img className="h-10 cursor-pointer" src="https://i.ibb.co/BjJJbnh/firmlogo.png" alt="Главная страница"/>
                            </a>
                        </div>
                        <ul className="lg:flex hidden items-center space-x-10">
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">Акции</li>
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">Новости</li>
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">Контакты</li>
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">Отзывы</li>
                            <li className="hover:text-main-color transition duration-200 cursor-pointer h-5 w-5 text-xl">
                                <FaPhoneAlt />
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 cursor-pointer" fill="none"
                                 viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M4 6h16M4 12h16M4 18h16"/>
                            </svg>
                        </div>
                    </div>
                </nav>


                <main className="flex-grow">{ children }</main>


                <footer className="w-auto p-4 bottom-0 h-auto relative bg-second-color">
                    <div className="lg:flex  lg:mt-3 md:mx-12 lg:mx-28 lg:justify-between">
                        <div className="mb-4 lg:columns-1 w-96">
                            <p className="text-white font-bold mb-1 mt-3">Остались вопросы?</p>
                            <p className="text-gray-200 text-sm">
                                Вы можете узнать всю интересующую вас информацию по телефону, задать
                                вопрос в наших социальных сетях или записаться на индивидуальную консультацию.
                            </p>
                        </div>
                        <div className="mb-4  lg:mt-3">
                            <h3 className="text-white font-bold mb-2 lg:mb-4">Мы в социальных сетях:</h3>
                            <div className="">
                                <div className=" flex lg:items-center ">
                                    <div className="lg:container lg:max-w-screen-lg ">
                                        <div>
                                            <div className="lg:flex lg:flex-wrap gap-2 ">
                                                <a href={""}>
                                                    <div
                                                        className="inline-flex items-center space-x-2 w-12 h-9 p-2"
                                                    >
                                                        <Image src={instagram} />
                                                    </div>
                                                </a>
                                                <a href={""}>
                                                    <div
                                                        className="inline-flex items-center space-x-2 w-12 h-9 p-2"
                                                    >
                                                        <Image src={linkedin} />
                                                    </div>
                                                </a>
                                                <a href={""}>
                                                    <div
                                                        className="inline-flex items-center space-x-2 w-12 h-9 p-2"
                                                    >
                                                        <Image src={twitter} />
                                                    </div>
                                                </a>
                                                <a href={""}>
                                                    <div
                                                        className="inline-flex items-center space-x-2 w-12 h-9 p-2"
                                                    >
                                                        <Image src={youtube} />
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:mt-3 mb-4">
                            <h3 className="text-white font-bold mb-2 lg:mb-2"></h3>
                            <div className="columns-2 md:columns-3 lg:columns-2 text-white">
                                <Link href={'/clinic'}>Клиника</Link><br/>
                                <Link href={'/medicalservice'}>Медицинские услуги</Link><br/>
                                <Link href={'/promotions'}>Акции</Link><br/>
                                <Link href={'/cosmetology'}>Косметология</Link><br/>
                                <Link href={'/contacts'}>Контакты</Link><br/>
                                <Link href={'/doctors'}>Наши доктора</Link><br/>
                                <Link href={'/equipments'}>Оборудование</Link><br/>
                                <Link href={'/news'}>Новости</Link><br/>
                                <Link href={'/reviews'}>Отзывы</Link><br/>
                                <Link href={'/privacypolicy'}>Политика конфиденциальности</Link><br/>
                                <Link href={'/termsofuse'}>Правила пользования</Link><br/>
                                <Link href={'/'}>Вернуться на главную</Link><br/>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-center mt-2">
                            <p className="text-main-color">
                                Клиника эстетической медицины &laquo;Рассвет&raquo;
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        </>

    )
}