import {Carousel, Image, Row, Col, Card, Tag, Button, Typography} from 'antd';
import ProductBlock from "./ProductBlock";
import DemoPhoto from "../assets/image/demo.jpg";
import {products} from "../data/product";
const { Title, } = Typography;

const ListProductRelation = (props) => {
    const {
        type
    } = props;
    const listProductByType = products.filter((item) => {
        return item.type === type;
    })
    return <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
            margin: 10
        }}>
            <Title level={3}>{type === "handmade" ? "Đồ hand made" : "Đồ cũ"}</Title>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            <Row>
                {
                    listProductByType.slice(0,3).map((item) => {
                        return (
                            <Col xs={24} sm={24} md={24} lg={12} xl={8} style={{
                                display: 'flex',
                                justifyContent: 'center',
                                padding: '10px'
                            }}>
                                <ProductBlock dataProduct={item}/>
                            </Col>
                        )
                    })
                }
            </Row>
        </Col>
    </Row>
}

export default ListProductRelation;