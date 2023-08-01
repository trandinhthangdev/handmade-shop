import './App.css';
import {Router, Switch, Route, Link} from 'react-router-dom'
// export const history = createBrowserHistory();
import React, {Suspense, useState} from 'react';
import LoadingAction from "./components/LoadingAction";
import arrayRoutes from "./routes/routes";
import {Badge, Col, Layout, Menu, Row} from "antd";
import {
    BugOutlined,
    ProjectOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    ContactsOutlined,
    DeploymentUnitOutlined, ShoppingCartOutlined
} from "@ant-design/icons";
import * as links from "./constants/links";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './assets/css/app.css';
import {carts} from "./data/cart";
import Logo from "./assets/image/logo.png";
import useWindowSize from "./components/useWindowSize";
import Page404 from "./pages/Page404";
const { Header, Content, Footer, Sider } = Layout;

const { SubMenu } = Menu;

const App = (props) => {
    const {
        tReady
    } = props;
    const [collapsedSidebar, setCollapsedSidebar] = useState(false);
    const toggleCollapsedSidebar = () => {
        if (size.width >= 700) {
            setCollapsedSidebar(prev => {
                return !prev
            });
        }
    };
    const size = useWindowSize();
    console.log(collapsedSidebar)
    if (size.width < 700 && collapsedSidebar === false) {
        setCollapsedSidebar(true)
    }
    return <Layout style={{minHeight: '100vh'}}>
        <Sider trigger={null} collapsible collapsed={collapsedSidebar}>
            <div className="logo">
                <Link to={links.PRODUCT}>
                    <img src={Logo} width={50}/>
                </Link>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                <SubMenu icon={<DeploymentUnitOutlined />} title="Sản phẩm">
                    <Menu.Item>
                        <Link to={links.PRODUCT}>
                            Đồ handmade
                        </Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link to={links.PRODUCT}>
                            Đồ cũ
                        </Link>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item icon={<BugOutlined />}>
                    <Link to={links.BUY_SECONDHAND}>
                        Thu mua đồ cũ
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<ContactsOutlined />}>
                    <Link to={links.CONTACT}>
                        Liên hệ
                    </Link>
                </Menu.Item>
                <Menu.Item icon={<ProjectOutlined />}>
                    <Link to={links.ABOUT_US}>
                        Về chúng tôi
                    </Link>
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }}>
                <Row>
                    <Col flex="100px">
                        {
                            collapsedSidebar ?
                                <MenuUnfoldOutlined className="trigger" onClick={toggleCollapsedSidebar}/>
                                :
                                <MenuFoldOutlined  className="trigger" onClick={toggleCollapsedSidebar} />
                        }
                    </Col>
                    <Col flex="auto" style={{
                        textAlign: 'center'
                    }}>
                        <Link to={links.CART}>
                            <Badge count={carts.length}>
                                <ShoppingCartOutlined style={{
                                    fontSize: '200%'
                                }}/>
                            </Badge>
                        </Link>
                    </Col>
                </Row>
            </Header>
            <Content style={{ margin: '0 16px' }}>
                <Suspense fallback={<LoadingAction/>}>
                    <Switch>
                        {arrayRoutes.map(item=>{
                            return <Route
                                path={item.path}
                                exact={item.exact}
                                component={item.component}
                            />;
                        })}
                        <Route
                            path="*"
                            exact={true}
                            component={() => <Page404 />}
                        />
                    </Switch>
                </Suspense>
            </Content>
            <Footer style={{
                textAlign: 'center',
                fontWeight: 600
            }}>©2021</Footer>
        </Layout>
    </Layout>
}

export default App;
