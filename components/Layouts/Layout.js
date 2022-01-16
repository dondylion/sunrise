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
            <div className="min-h-screen" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div className="bg-purple-900 flex flex-row justify-around h-24" >
                    <div>
                        <Link href={'/'}><Image src={logo}></Image></Link>
                    </div>
                    <div>
                        <Link href={'/clinic'}>Клиника</Link>
                    </div>
                    <div>
                        <Link href={'/'}>Медицинские услуги</Link>
                    </div>
                    <div>
                        <Link href={'/promotions'}>Акции</Link>
                    </div>
                    <div>
                        <Link href={'/cosmetology'}>Косметология</Link>
                    </div>
                    <div>
                        <Link href={'/contacts'}>Контакты</Link>
                    </div>
                    <div>
                        <Link href={'/news'}>Новости</Link>
                    </div>
                    <div>
                        <Link href={'/reviews'}>Отзывы</Link>
                    </div>
                </div>
                    

                <main className="">{ children }</main>

                <div className="h-24 bg-purple-900 absolute bottom-0">
                    <div className="flex flex-row justify-around">
                        <div>
                            <div><Link href={'/clinic'}>Клиника</Link></div>
                            <div><Link href={'/'}>Медицинские услуги</Link></div>
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
        </>
        
    )
}