import Head from "next/head";
import Link from "next/link";
import React from "react";
import {FaPhoneAlt} from 'react-icons/fa';
import {AiOutlineMenu} from 'react-icons/ai'

export default function PageLayout ({ children, title = 'Эстетическая медицина' }) {

    function callMe () {
        alert("HELLO THERE");
    }

    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
                <link rel="shortcut icon" href="https://static.tildacdn.com/tild3535-6437-4561-a566-396538623461/favicon.ico" type="image/x-icon" />
                <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Oswald:wght@300;700&display=swap" rel="stylesheet" />
            </Head>
            <div className="min-h-screen flex flex-col text-second-color" >
                <nav className="bg-gray-100">
                    <div className="flex justify-between items-center bg-white py-6 lg:px-40 md:px-20 px-10">
                        <Link href="/">
                            <a>
                                <img className="h-10 cursor-pointer" src="https://i.ibb.co/BjJJbnh/firmlogo.png" alt="Главная страница"/>
                            </a>
                        </Link>
                        <ul className="lg:flex hidden items-center space-x-10">
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">
                                <Link href={"/promotions"}><a>Акции</a></Link>
                            </li>
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">
                                <Link href={'/news'}><a>Новости</a></Link>
                            </li>
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">
                                <Link href={'/contacts'}><a>Контакты</a></Link>
                            </li>
                            <li className="text-lg font-semibold hover:text-main-color transition duration-200 cursor-pointer">
                                <Link href={'/reviews'}><a>Отзывы</a></Link>
                            </li>
                            <li className="hover:text-main-color transition duration-200 cursor-pointer h-5 w-5 text-xl">
                                <FaPhoneAlt />
                            </li>
                        </ul>
                        <div className="lg:hidden text-3xl hover:text-main-color">
                            <AiOutlineMenu />
                        </div>
                    </div>
                </nav>


                <main className="flex-grow">{ children }</main>


                <footer className="w-auto p-4 bottom-0 h-auto relative bg-second-color">
                    <div className="lg:flex  lg:mt-3 md:mx-12 lg:mx-28 lg:justify-between">
                        <div className="mb-4 lg:columns-1 w-96">
                            <h3 className="text-white font-bold mb-1 mt-3">Остались вопросы?</h3>
                            <p className="text-gray-200 text-sm font-open-sans">
                                Вы можете узнать всю интересующую вас информацию по телефону, задать
                                вопрос в наших социальных сетях или записаться на <br/>индивидуальную консультацию.
                            </p>
                        </div>
                        <div className="mb-4  lg:mt-3">
                            <h3 className="text-white font-bold mb-2 lg:mb-4">Мы в социальных сетях:</h3>
                            <div className="">
                                <div className=" flex lg:items-center ">
                                    <div className="lg:container lg:max-w-screen-lg ">
                                        <div>
                                            <div className="lg:flex lg:flex-wrap gap-2 ">
                                                <a href={""} className="inline-flex items-center space-x-2 w-9 h-9">
                                                        <img src="https://i.ibb.co/MNfM8VL/instagram.png" alt="Instagram" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:mt-3 mb-4 font-open-sans">
                            {/*<h3 className="text-white font-bold mb-2 lg:mb-2"></h3>*/}
                            <div className="columns-2 md:columns-3 lg:columns-2 text-white">
                                <Link href={'/clinic'}><a className="hover:text-main-color">Клиника</a></Link><br/>
                                <Link href={'/medicalservice'}><a className="hover:text-main-color">Медицинские услуги</a></Link><br/>
                                <Link href={'/promotions'}><a className="hover:text-main-color">Акции</a></Link><br/>
                                <Link href={'/cosmetology'}><a className="hover:text-main-color">Косметология</a></Link><br/>
                                <Link href={'/contacts'}><a className="hover:text-main-color">Контакты</a></Link><br/>
                                <Link href={'/doctors'}><a className="hover:text-main-color">Наши доктора</a></Link><br/>
                                <Link href={'/equipments'}><a className="hover:text-main-color">Оборудование</a></Link><br/>
                                <Link href={'/news'}><a className="hover:text-main-color">Новости</a></Link><br/>
                                <Link href={'/reviews'}><a className="hover:text-main-color">Отзывы</a></Link><br />
                                <Link href={'/privacypolicy'}><a className="hover:text-main-color">Политика конфиденциальности</a></Link><br/>
                                <Link href={'/termsofuse'}><a className="hover:text-main-color">Правила пользования</a></Link><br/>
                                <Link href={'/'}><a className="hover:text-main-color">Вернуться на главную</a></Link><br/>
                            </div>
                        </div>
                    </div>
                    <div>
                        {/*<div className="flex justify-center mt-2">*/}
                        {/*    <p className="text-main-color">*/}
                        {/*        Клиника эстетической медицины &laquo;Рассвет&raquo;*/}
                        {/*    </p>*/}
                        {/*</div>*/}
                    </div>
                </footer>
            </div>
        </>

    )
}