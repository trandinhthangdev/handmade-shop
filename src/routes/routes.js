import * as links from "../constants/links";
import {BUY_SECONDHAND, PAGE_404} from "../constants/links";
import Page404 from "../pages/Page404";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import BuySecondHand from "../pages/BuySecondHand";
import Product from "../pages/Product";
import ViewProduct from "../pages/ViewProduct";
import Cart from "../pages/Cart";
import CheckOut from "../pages/CheckOut";
import CheckOutSuccess from "../pages/CheckOutSuccess";
// const Page403 = lazy(() => import("../theme/PageError/Page403"));
// const Page404 = lazy(() => import("../theme/PageError/Page404"));
// const Page400 = lazy(() => import("../theme/PageError/Page400"));
// const Page500 = lazy(() => import("../theme/PageError/Page500"));
// const RegistrationNotLogin = lazy(() => import("../components/client/registrationInformation/RegistrationNotLogin"));


const arrayRoutes = [
    {
        path: links.PAGE_404,
        component: () => <Page404 />,
        exact: false,
    },
    {
        path: links.ABOUT_US,
        component: () => <AboutUs />,
        exact: true,
    },
    {
        path: links.CONTACT,
        component: () => <Contact />,
        exact: true,
    },
    {
        path: links.BUY_SECONDHAND,
        component: () => <BuySecondHand />,
        exact: true,
    },
    {
        path: links.PRODUCT,
        component: () => <Product />,
        exact: true,
    },
    {
        path: links.HOME,
        component: () => <Product />,
        exact: true,
    },
    {
        path: links.VIEW_PRODUCT,
        component: () => <ViewProduct />,
        exact: true,
    },
    {
        path: links.CART,
        component: () => <Cart />,
        exact: true,
    },
    {
        path: links.CHECK_OUT,
        component: () => <CheckOut />,
        exact: true,
    },
    {
        path: links.CHECK_OUT_SUCCESS,
        component: () => <CheckOutSuccess />,
        exact: true,
    },
];


export default arrayRoutes;
