import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import logo from "../../images/logo.svg"

export default function PageLayout ({ children, title = 'Эстетическая медицина' }) {

    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
                <link rel="shortcut icon" href="https://static.tildacdn.com/tild3535-6437-4561-a566-396538623461/favicon.ico" type="image/x-icon" />
            </Head>
            <div className="min-h-screen flex flex-col justify-between mx-32 my-12" >
                <div className="flex flex-row justify-around h-24 text-xl">
                    <div className="bg-test-2 min-h-full">
                        <Link href={'/'} className="my-auto"><a className=""><Image src={logo} /></a></Link>
                    </div>
                    <div className="m-3"><Link href={'/cosmetology'}>Косметология</Link></div>
                    <div className="m-3"><Link href={'/clinic'}>Клиника</Link></div>
                    <div className="m-3"><Link href={'/promotions'}>Акции</Link></div>
                    <div className="m-3"><Link href={'/contacts'}>Контакты</Link></div>
                </div>
                    

                <main className="m-24 p-24">{ children }</main>

                <div className="footer-block bg-test-3 mt-18">
                    <div className="flex flex-row justify-end px-10 py-10">
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