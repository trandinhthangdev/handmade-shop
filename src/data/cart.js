import DemoPhoto from "../assets/image/demo.jpg";
import ID_4 from "../assets/image/4.jpg";
import ID_11 from "../assets/image/11.jpg";
import ID_13 from "../assets/image/13.jpg";

export const carts = [
    {
        id: 1,
        amount: 2,
        product: {
            id: 4,
            name: 'Bộ Sgk cũ lớp 8',
            description: 'Mới 70%',
            type: 'handmade',
            image: ID_4,
            photos: [
                ID_4
            ],
            number: Math.floor(Math.random() * 100),
            price: 109000,
        },
    },
    {
        id: 2,
        amount: 1,
        product: {
            id: 11,
            name: 'Nơ buộc tóc',
            description: 'từ khẩu trang',
            type: 'handmade',
            image: ID_11,
            photos: [
                ID_11
            ],
            number: Math.floor(Math.random() * 100),
            price: 3000,
        },
    },
    {
        id: 3,
        amount: 3,
        product: {
            id: 13,
            name: 'Xích đu',
            description: 'từ que gỗ',
            type: 'handmade',
            image: ID_13,
            photos: [
                ID_13
            ],
            number: Math.floor(Math.random() * 100),
            price: 29000,
        }
    }
]