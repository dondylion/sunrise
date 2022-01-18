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
            <div className="min-h-screen flex flex-col justify-between" >
                <div className="flex flex-row justify-start shadow-lg bg-test-color-2 w-48 h-24">
                    <div className="mx-auto my-auto">
                        <Link href={'/'} ><Image src={logo} /></Link>
                    </div>
                </div>
                    

                <main className="bg-white">{ children }</main>

                <div className="footer-block bg-test-color-3 mt-18">
                    <div className="flex flex-row justify-end">
                        <div>
                            <div className="m-3"><Link href={'/clinic'}>Клиника</Link></div>
                            <div className="m-3"><Link href={'/medicalservice'}>Медицинские услуги</Link></div>
                            <div className="m-3"><Link href={'/promotions'}>Акции</Link></div>
                            <div className="m-3"><Link href={'/cosmetology'}>Косметология</Link></div>
                        </div>
                        <div>
                            <div className="m-3"><Link href={'/contacts'}>Контакты</Link></div>
                            <div className="m-3"><Link href={'/doctors'}>Наши доктора</Link></div>
                            <div className="m-3"><Link href={'/equipments'}>Оборудование</Link></div>
                            <div className="m-3"><Link href={'/news'}>Новости</Link></div>
                        </div>
                        <div>
                            <div className="m-3"><Link href={'/reviews'}>Отзывы</Link></div>
                            <div className="m-3"><Link href={'/privacypolicy'}>Политика конфиденциальности</Link></div>
                            <div className="m-3"><Link href={'/termsofuse'}>Правила пользования</Link></div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

// .head-logo {
//     background-color: #fab45e;
//     width: 12rem;
//     height: 6rem
// }
// .logo {
//     margin: auto auto;
// }
// .footer {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
// }
// .footer-block {
//     background-color: #342a69;
//     color: white;
//     margin-top: 50px;
//     font-family: Geneva, Arial, Helvetica, sans-serif;
//     font-size: 0.8rem;
// }
// .footer div div {
//     margin: 1rem;
//     text-decoration: underline;
// }