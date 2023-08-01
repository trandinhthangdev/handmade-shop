import { Typography , Avatar, Carousel, Image, Row, Col, Card, Tag,Button,Input, Select, InputNumber, DatePicker, AutoComplete, Cascader  } from 'antd';
import {
    UserOutlined,
    ShopOutlined,
    RotateRightOutlined,
    RotateLeftOutlined
} from '@ant-design/icons';
import styles from './../assets/css/about_us.less';

const { Title, Paragraph, Text, Link } = Typography;
// 3h chieu xong
const listAboutUs = [
    {
        icon: <RotateLeftOutlined style={{
            color: '#fff',
            fontSize: '300%'
        }}/>,
        backgroundColor: '#7FC8A9',
        title: 'Thu mua đồ cũ',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled',
    },
    {
        icon: <RotateRightOutlined style={{
            color: '#fff',
            fontSize: '300%'
        }}/>,
        backgroundColor: '#B980F0',
        title: 'Bán đồ đã qua sử dụng',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
    },
    {
        icon: <ShopOutlined style={{
            color: '#fff',
            fontSize: '300%'
        }}/>,
        backgroundColor: '#A03C78',
        title: 'Bán đồ handmade',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled'
    },
]
const AboutUs = (props) => {
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
                marginBottom: 20
            }}>
                <Typography style={{
                    margin: '10px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Title style={{
                        color: '#353348'
                    }}>About Us</Title>
                    <Paragraph style={{
                        fontStyle: 'italic',
                        maxWidth: 600,
                        textAlign: 'center'
                    }}>
                        In the process of internal desktop applications development, many different design specs and
                        implementations would be involved, which might cause designers and developers difficulties and
                        duplication and reduce the efficiency of development.
                    </Paragraph>
                    <div style={{
                        width: 100,
                        borderBottom: '4px dashed'
                    }}>

                    </div>
                </Typography>
            </Col>
            {
                listAboutUs.map((item) => {
                    return (
                        <Col xs={24} sm={24} md={24} lg={8} xl={8} style={{
                            display: 'flex',
                            alignItems: 'center',
                            // justifyContent: 'center',
                            flexDirection: 'column',
                            padding: '10px 10px'
                        }}>
                            <div style={{
                                width: 100,
                                height: 100,
                                backgroundColor: item.backgroundColor,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '50%'
                            }}>
                                {item.icon}
                            </div>
                            <Title level={3}>{item.title}</Title>
                            <Text style={{
                                maxWidth: 400,
                                textAlign: 'center'
                            }}>{item.description}</Text>
                        </Col>
                    )
                })
            }
        </Row>
    )
}
export default AboutUs;