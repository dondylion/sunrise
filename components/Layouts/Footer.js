import { Layout, Row, Col } from "antd"

export default function PageFooter () {
    const {Footer} = Layout;
    return (
        <Footer style={{ textAlign: 'center' }}>
            <Row>
                <Col>О клинике</Col>
                <Col>Наши специалисты</Col>
                <Col>Онлайн-запись</Col>
                <Col>Обучение</Col>
                <Col>Отзывы</Col>
            </Row>
        </Footer>
    )
}