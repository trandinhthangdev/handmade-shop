import React, { useState } from 'react';
import {
    Button,
    Breadcrumb,
    Row,
    Col,
    Typography, Drawer
} from 'antd';
import {

} from '@ant-design/icons';
import ListBuySecondHand from "../components/ListBuySecondHand";
import FormBuySecondHand from "../components/FormBuySecondHand";

const { Title, Paragraph, Text, Link } = Typography;

const BuySecondHand = (props) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true)
    };

    const onClose = () => {
        setVisible(false)
    };
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                marginBottom: 5
            }}>
                <Typography style={{
                    margin: '10px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Title style={{
                        color: '#353348'
                    }}>Thu mua đồ cũ</Title>
                    <Paragraph style={{
                        fontStyle: 'italic',
                        maxWidth: 600,
                        textAlign: 'center'
                    }}>
                        Bán những đồ dùng mà bạn không sử dụng đến cho chúng tôi
                    </Paragraph>
                </Typography>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                textAlign: 'center'
            }}>
                <Button shape="round" style={{
                    backgroundColor: '#54436B',
                    color: '#fff',
                    fontWeight: 600
                }}
                    onClick={showDrawer}
                >
                    Ấn vào đây => Bán gì đó cho chúng tôi
                </Button>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                marginTop: 20,
                marginBottom: 20
            }}>
                <Breadcrumb>
                    <Breadcrumb.Item>
                        Thu mua đồ cũ
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>Danh sách đồ bạn đã bán cho chúng tôi</Breadcrumb.Item>
                </Breadcrumb>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                <ListBuySecondHand />
            </Col>
            <Drawer
                title="Tạo đồ cũ bạn muốn bán"
                width={450}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
            >
                <FormBuySecondHand onCloseDrawer={onClose}/>
            </Drawer>
        </Row>
    )
}
export default BuySecondHand;