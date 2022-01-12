import { Layout, Menu, Col, Row } from "antd";
import Head from "next/head";
import Link from "next/link";

export default function PageLayout ({ children, title = 'Эстетическая медицина' }) {
    const {Header, Footer} = Layout;
    return (
        <>
            <Head>
                <title>{title} | Клиника Рассвет</title>
            </Head>
            <Layout className="layout" style={{marginBottom: 20}}>
                <Header>
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item>О нас</Menu.Item>
                        <Menu.Item>Услуги</Menu.Item>
                        <Menu.Item>Отзывы</Menu.Item>
                        <Menu.Item>
                            <Link href={'/cosmetology'}><a>Косметология</a></Link>
                            
                        </Menu.Item>
                        <Menu.Item>
                            <Link href={'/contacts'}>
                            <a>Контакты</a>  
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Header>

                <main>{ children }</main>

                <Footer style={{marginTop: 50, backgroundColor: 'darkcyan'}}>
                    <Row style={{display: 'flex', justifyContent: 'space-around'}}>
                        <Col>О клинике</Col>
                        <Col>Наши специалисты</Col>
                        <Col>Онлайн-запись</Col>
                        <Col>Обучение</Col>
                        <Col>Отзывы</Col>
                    </Row>
                </Footer>
            </Layout>
        </>
        
    )
}