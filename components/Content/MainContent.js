import { Card } from "antd";

export default function MainContent () {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '30px' }}>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>
        </div>
    )
}