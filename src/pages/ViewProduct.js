import {Carousel, Image, Row, Col, Card, Tag, Button, Spin, notification, Badge} from 'antd';
import {DownloadOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import ListProductRelation from "../components/ListProductRelation";
import { useParams } from 'react-router-dom'
import {products} from "../data/product";
import {formatter} from "../constants/constants";


const ViewProduct = (props) => {
    const {id} = useParams();
    const dataProductFilter = products.filter(item => {
        return item.id == id;
    })
    const dataProduct = dataProductFilter.length > 0 ? dataProductFilter[0] : null;
    const openNotification = () => {
        notification.open({
            type: 'success',
            message: 'Thành công',
            description: 'Bạn đã thêm sản phẩm vào giỏ hàng',
        });
    };
    return (
        <>
            {dataProduct ? <Row>
                <Col xs={24}>
                    <Badge.Ribbon style={{
                        fontSize: 18,
                    }} text={dataProduct.type === "handmade" ? "Đồ handmade" : "Đồ cũ"} color={dataProduct.type === "handmade" ? "#7B6079" : "#FF8474"}>
                        <Card>
                            <Row>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                                    <Carousel>
                                        {
                                            dataProduct.photos.map(item => {
                                                return (
                                                    <div style={{
                                                        width: 300
                                                    }}>
                                                        <div style={{
                                                            display: 'flex',
                                                            justifyContent: 'center'
                                                        }}>
                                                            <Image
                                                                // width={300}
                                                                src={item}
                                                                style={{
                                                                    width: '100%',
                                                                    maxWidth: 300
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Carousel>
                                </Col>
                                <Col xs={24} sm={24} md={12} lg={12} xl={12} style={{
                                    padding: 10
                                }}>
                                    <div style={{
                                        fontWeight: 700,
                                        fontSize: 18,
                                        marginBottom: 10
                                    }}>
                                        {dataProduct.name}
                                    </div>
                                    <div style={{
                                        fontWeight: 500,
                                        fontSize: 15,
                                        marginBottom: 5,
                                        color: '#687980',
                                        maxWidth: 600
                                    }}>
                                        {dataProduct.description}
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        justifyContent: 'flex-start'
                                    }}>
                                        <div>
                                            Số lượng
                                        </div>
                                        <div style={{
                                            paddingLeft: 10
                                        }}>
                                            <Tag color="#108ee9" style={{
                                                fontWeight: 600
                                            }}>10</Tag>
                                        </div>
                                    </div>
                                    <div style={{
                                        color: '#FF6701',
                                        fontWeight: 600,
                                        fontSize: 18,
                                        padding: '5px 0'
                                    }}>
                                        {formatter.format(dataProduct.price)}
                                    </div>
                                    <Button style={{
                                        backgroundColor: '#F21170',
                                        color: '#fff'
                                    }} shape="round" icon={ <ShoppingCartOutlined />}  onClick={openNotification}>
                                        Thêm vào giỏ hàng
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Badge.Ribbon>
                </Col>
                <Col xs={24}>
                    <ListProductRelation type={dataProduct.type}/>
                </Col>
            </Row> : <div>
                <Spin />
            </div>
            }
        </>
    )
}
export default ViewProduct;