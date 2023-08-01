import {Col, Row, Select, Slider, Typography} from "antd";
import ProductBlock from "../components/ProductBlock";
import React, {useEffect, useState} from "react";
import DemoPhoto from "../assets/image/demo.jpg";
import {products} from "../data/product";
import useWindowSize from "../components/useWindowSize";
const { Option } = Select;
const { Title, Paragraph, Text, Link } = Typography;
const styleTitle = {
    fontWeight: 500,
    fontSize: 15,
    marginTop: 5
}
const Product = (props) => {
    const [dataProducts, setDataProducts] = useState([]);
    useEffect(() => {
        setDataProducts(products.sort((a, b) => 0.5 - Math.random()))
    }, [])

    return (
        <Row >
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
                    }}>Trang sản phẩm</Title>
                </Typography>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={6}>
                <div>
                    <div style={styleTitle}>Lọc theo khoảng giá</div>
                    <Slider
                        range
                        step={20}
                        defaultValue={[20, 50]}
                    />
                </div>
                <div style={styleTitle}>
                    <div>Lọc theo loại sản phầm</div>
                    <Select defaultValue="all" style={{ width: 120 }}>
                        <Option value="all">Tất cả</Option>
                        <Option value="handmade">Đồ handmaden</Option>
                        <Option value="secondhand">Đồ cũ</Option>
                    </Select>
                </div>
                <div style={styleTitle}>
                    <div>Sắp xếp theo giá tiền</div>
                    <Select defaultValue="random" style={{ width: 120 }}>
                        <Option value="random">Ngẫu nhiên</Option>
                        <Option value="ascending">Tăng dần</Option>
                        <Option value="decrease">Giảm dần</Option>
                    </Select>
                </div>
            </Col>
            <Col xs={24} sm={24} md={24} lg={24} xl={18} style={{
                marginTop: 20
            }}>
                <Row>
                    {
                        dataProducts.map((item) => {
                            return (
                                <Col xs={24} sm={24} md={24} lg={12} xl={8} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '10px'
                                }}>
                                    <ProductBlock dataProduct={item}/>
                                </Col>
                            );
                        })
                    }
                </Row>
            </Col>
        </Row>
    )
}
export default Product;
