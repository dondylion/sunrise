import { Layout, Menu } from "antd";

export default function PageLayout () {
    const {Header} = Layout;
    return (
        <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item>О нас</Menu.Item>
                        <Menu.Item>Услуги</Menu.Item>
                        <Menu.Item>Отзывы</Menu.Item>
                        <Menu.Item>Контакты</Menu.Item>
                    </Menu>
                </Header>
            </Layout>
    )
}