import { Layout, Menu, Col, Row } from "antd";
import Head from "next/head";
import Link from "next/link";

export default function PageLayout ({ children, title = 'Эстетическая медицина' }) {
    const {Header, Footer} = Layout;
    const style = {
        color: 'white',
        textDecoration: 'underline',
        marginLeft: '20px'
    }

    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
            </Head>
            <Layout className="layout" style={{marginBottom: 20}}>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item>
                            <Link href={'/clinic'}><a>Клиника</a></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href={'/'}><a>Медицинские услуги</a></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href={'/promotions'}><a>Акции</a></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href={'/cosmetology'}><a>Косметология</a></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href={'/contacts'}><a>Контакты</a></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href={'/news'}><a>Новости</a></Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link href={'/reviews'}><a>Отзывы</a></Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                <main>{ children }</main>

                <Footer style={{marginTop: 50, backgroundColor: 'darkcyan', color: 'white'}}>
                    <Row style={{display: 'flex', justifyContent: 'flex-end'}}>
                        <Col>
                            <div><Link href={'/clinic'}><a style={style}>Клиника</a></Link></div>
                            <div><Link href={'/'}><a style={style}>Медицинские услуги</a></Link></div>
                            <div><Link href={'/promotions'}><a style={style}>Акции</a></Link></div>
                            <div><Link href={'/cosmetology'}><a style={style}>Косметология</a></Link></div>
                        </Col>
                        <Col>
                            <div><Link href={'/contacts'}><a style={style}>Контакты</a></Link></div>
                            <div><Link href={'/doctors'}><a style={style}>Наши доктора</a></Link></div>
                            <div><Link href={'/equipments'}><a style={style}>Оборудование</a></Link></div>
                            <div><Link href={'/news'}><a style={style}>Новости</a></Link></div>
                        </Col>
                        <Col>
                            <div><Link href={'/reviews'}><a style={style}>Отзывы</a></Link></div>
                            <div><Link href={'/privacypolicy'}><a style={style}>Политика конфиденциальности</a></Link></div>
                            <div><Link href={'/termsofuse'}><a style={style}>Правила пользования</a></Link></div>
                        </Col>
                    </Row>
                </Footer>
            </Layout>
        </>
        
    )
}