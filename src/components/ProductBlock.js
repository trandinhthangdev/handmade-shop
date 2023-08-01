import {Badge, Card, Avatar, Image, Button, Row, Col, notification} from 'antd';
import {  ShoppingCartOutlined  } from '@ant-design/icons';
import {formatter} from "../constants/constants";
import {Link} from "react-router-dom";
import * as links from "./../constants/links"
import useWindowSize from "./useWindowSize";
const { Meta } = Card;


const ProductBlock = (props) => {
    const {
        dataProduct
    } = props;

    const openNotification = () => {
        notification.open({
            type: 'success',
            message: 'Thành công',
            description: 'Bạn đã thêm sản phẩm vào giỏ hàng',
        });
    };
    const size = useWindowSize();
    console.log(size)
    return (
        <Badge.Ribbon text={dataProduct.type === "handmade" ? "Đồ handmade" : "Đồ cũ"} color={dataProduct.type === "handmade" ? "#7B6079" : "#FF8474"}>
            <Card
                style={{
                    width: (size.width> 1200 && size.width < 1500) ? 230 : 300
                }}
                cover={
                    <div className="imageWrapper">
                        <Image
                            src={dataProduct.image}
                        />
                    </div>
                }
                actions={[
                    <Row>
                        <Col xs={12}>
                            <Link to={links.VIEW_PRODUCT.replace(':id', dataProduct.id)}>
                                {formatter.format(dataProduct.price)}
                            </Link>
                        </Col>
                        <Col xs={12}>
                            <Button onClick={openNotification}>
                                <ShoppingCartOutlined />
                            </Button>
                        </Col>
                    </Row>
                ]}
            >
                <Link to={links.VIEW_PRODUCT.replace(':id', dataProduct.id)}>
                    <Meta
                        title={dataProduct.name}
                    />
                </Link>
            </Card>
    </Badge.Ribbon>
    );
}

export default ProductBlock;