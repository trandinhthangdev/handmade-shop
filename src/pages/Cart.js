import {
    Carousel,
    Image,
    Row,
    Col,
    Card,
    Tag,
    Button,
    Input,
    Select,
    InputNumber,
    DatePicker,
    AutoComplete,
    Cascader,
    Typography,
    Badge, notification
} from 'antd';
import React, {useState} from "react";
import {carts} from "../data/cart";
import {formatter} from "../constants/constants";
import {promotions} from "../data/promotion";
import {Link} from "react-router-dom";
import * as links from "./../constants/links";
const { Title } = Typography;

const Cart = (props) => {
    const [dataCarts, setDataCarts] = useState(carts);
    const [promotion, setPromotion] = useState(0);
    const [promotionCodeDone, setPromotionCodeDone] = useState('');
    const [promotionCode, setPromotionCode] = useState('');

    const openNotificationSuccess = () => {
        notification.open({
            type: 'success',
            message: 'Thành công',
            description: 'Mã giảm giá tồn tại',
        });
    };
    const openNotificationError = () => {
        notification.open({
            type: 'error',
            message: 'Thất bại',
            description: 'Mã giảm giá không tồn tại',
        });
    };
    const changeAmount = (itemChange, amount) => {
        setDataCarts(prev => {
            return prev.map(item => {
                if (item.id == itemChange.id) {
                    return {
                        ...item,
                        amount: item.amount + amount
                    };
                } else {
                    return item;
                }
            })
        })
    }
    const onDeleteCartItem = (itemDelete) => {
      setDataCarts(prev => {
          return prev.filter(item => {
              return item.id != itemDelete.id
          })
      })
    }

    const checkPromotionCode = () => {
        let promotionFilter = promotions.filter(item => {
            return item.code === promotionCode;
        })
        if (promotionFilter.length > 0) {
            openNotificationSuccess();
            setPromotion(promotionFilter[0].price);
            setPromotionCodeDone(promotionCode);
        } else {
            openNotificationError();
        }
    }

    let totolPrice = 0;
    dataCarts.forEach((item, index) => {
        totolPrice += item.amount * item.product.price
    })
    console.log(promotionCode)
    return (
        <Row>
            <Col xs={24} sm={24} md={24} lg={24} xl={24} style={{
            }}>
                <Typography style={{
                    margin: '10px 10px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Title style={{
                        color: '#353348'
                    }}>Giỏ hàng</Title>
                </Typography>
            </Col>
            <Col xs={24} sm={24} md={24} lg={16} xl={16} style={{
                padding: '0 5px'
            }}>
                <Row>
                    {
                        dataCarts.map(item => {
                            return (
                                <>
                                    <Col xs={22} sm={22} md={22} lg={22} xl={22} style={{
                                        padding: '10px 20px'
                                    }}>
                                        <Badge.Ribbon style={{
                                            fontSize: 18,
                                        }} text={item.product.type === "handmade" ? "Đồ handmade" : "Đồ cũ"} color={item.product.type === "handmade" ? "#7B6079" : "#FF8474"}>
                                            <Card>
                                                <Row>
                                                    <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                                                        <Carousel autoplay>
                                                            {
                                                                item.product.photos.map(item => {
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
                                                    <Col xs={24} sm={24} md={16} lg={16} xl={16} style={{
                                                        padding: '20px 10px'
                                                    }}>
                                                        <Row>
                                                            <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                                                                <div style={{
                                                                    fontWeight: 700,
                                                                    fontSize: 18,
                                                                    marginBottom: 10
                                                                }}>
                                                                    {item.product.name}
                                                                </div>
                                                            </Col>
                                                            <Col xs={24} sm={24} md={8} lg={8} xl={8} style={{
                                                                textAlign: 'right'
                                                            }}>
                                                                <Input
                                                                    addonBefore={
                                                                        <div
                                                                            style={{
                                                                                cursor: 'pointer',
                                                                            }}
                                                                            onClick={() => {
                                                                                if (item.amount > 1) {
                                                                                    changeAmount(item, -1);
                                                                                }
                                                                            }}
                                                                        >
                                                                            -
                                                                        </div>
                                                                    }
                                                                    addonAfter={
                                                                        <div
                                                                            style={{
                                                                                cursor: 'pointer'
                                                                            }}
                                                                            onClick={() => {
                                                                                changeAmount(item, 1);
                                                                            }}
                                                                        >
                                                                            +
                                                                        </div>
                                                                    }
                                                                    disabled={true}
                                                                    value={item.amount}
                                                                    style={{
                                                                        textAlign: 'center',
                                                                        color: '#1E3163',
                                                                        fontWeight: 700,
                                                                        maxWidth: 150
                                                                    }}
                                                                />
                                                                <div style={{
                                                                    color: '#4B6587',
                                                                    fontWeight: 500,
                                                                    fontSize: 15,
                                                                    padding: '5px 0'
                                                                }}>x {formatter.format(item.product.price)}</div>
                                                            </Col>
                                                            <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                                                                <div style={{
                                                                    color: '#FF6701',
                                                                    fontWeight: 600,
                                                                    fontSize: 18,
                                                                    padding: '5px 0',
                                                                    textAlign: 'right'
                                                                }}>
                                                                    {formatter.format(item.product.price*item.amount)}
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </Col>
                                                </Row>
                                            </Card>
                                        </Badge.Ribbon>
                                    </Col>
                                    <Col xs={2} sm={2} md={2} lg={2} xl={2} style={{
                                        padding: '10px 20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        <Button
                                            type="primary" danger
                                            loading={false}
                                            onClick={() => {
                                                onDeleteCartItem(item);
                                            }}
                                        >
                                            Xóa
                                        </Button>
                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
            </Col>
            <Col xs={24} sm={24} md={24} lg={8} xl={8}>
                <Card>
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div style={{
                                color: '#11324D',
                                fontWeight: 600,
                                fontSize: 20,
                                textAlign: 'right'
                            }}>
                                {formatter.format(totolPrice)}
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Input
                                addonBefore={
                                    <div style={{
                                        color: '#4B6587'
                                    }}>
                                        Mã giảm giá
                                    </div>
                                }
                                addonAfter={
                                    <div style={{
                                        color: '#2A0944',
                                        fontWeight: 700,
                                        cursor: 'pointer'
                                    }}
                                        onClick={() => {
                                            checkPromotionCode();
                                        }}
                                    >
                                        Kiểm tra
                                    </div>
                                }
                                value={promotionCode}
                                onChange={(event => {
                                    setPromotionCode(event.target.value)
                                })}
                            />
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            {
                                promotionCodeDone != '' && <div style={{
                                    margin: 10,
                                    textAlign: 'right'
                                }}>
                                    <Tag color="#F037A5">
                                        {promotionCodeDone}
                                    </Tag>
                                </div>
                            }
                            <div style={{
                                color: '#F43B86',
                                fontWeight: 500,
                                fontSize: 18,
                                textAlign: 'right'
                            }}>
                                <span>- </span>{formatter.format(promotion)}
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <div style={{
                                color: '#11052C',
                                fontWeight: 600,
                                fontSize: 20,
                                textAlign: 'right'
                            }}>
                                {formatter.format(totolPrice-promotion)}
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Link to={links.CHECK_OUT}>
                                <Button type="primary" style={{
                                    width: '100%',
                                    fontWeight: 700,
                                }}>
                                    Mua hàng
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}

export default Cart;