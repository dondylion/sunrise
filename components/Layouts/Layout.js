import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.svg"

export default function PageLayout ({ children, title = 'Эстетическая медицина' }) {

    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
            </Head>
            <div className="min-h-screen layout" >
                <div className="flex flex-row justify-start shadow-lg head-logo">
                    <div className="logo">
                        <Link href={'/'} ><Image src={logo}></Image></Link>
                    </div>
                </div>
                    

                <main className="">{ children }</main>

                <div className="footer-block">
                    <div className="footer">
                        <div>
                            <div><Link href={'/clinic'}>Клиника</Link></div>
                            <div><Link href={'/medicalservice'}>Медицинские услуги</Link></div>
                            <div><Link href={'/promotions'}>Акции</Link></div>
                            <div><Link href={'/cosmetology'}>Косметология</Link></div>
                        </div>
                        <div>
                            <div><Link href={'/contacts'}>Контакты</Link></div>
                            <div><Link href={'/doctors'}>Наши доктора</Link></div>
                            <div><Link href={'/equipments'}>Оборудование</Link></div>
                            <div><Link href={'/news'}>Новости</Link></div>
                        </div>
                        <div>
                            <div><Link href={'/reviews'}>Отзывы</Link></div>
                            <div><Link href={'/privacypolicy'}>Политика конфиденциальности</Link></div>
                            <div><Link href={'/termsofuse'}>Правила пользования</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>
                {`
                    .head-logo {
                        background-color: #fab45e;
                        width: 12rem;
                        height: 6rem
                    }
                    .layout {
                        display: flex;
                        flex-direction: column; 
                        justify-content: space-between;
                    }
                    .logo {
                        margin: auto auto;
                    }
                    .footer {
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                    }
                    .footer-block {
                        background-color: #342a69; 
                        color: white; 
                        margin-top: 50px; 
                        font-family: Geneva, Arial, Helvetica, sans-serif;
                    }
                    .footer div div {
                        margin: 1rem;
                    }
                `}
            </style>
        </>
        
    )
}