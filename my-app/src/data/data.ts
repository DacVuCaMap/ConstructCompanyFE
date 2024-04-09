import { GridColDef } from "@mui/x-data-grid";

export const sideBarAdmin = [
    {
        id: 1,
        title: "Chính",
        listItems: [
            {
                id: 11,
                title: "Home",
                url: "/",
            },
            {
                id: 12,
                title: "Biên Bản NT và xác nhận KL",
                url: "/invoice",
            },
        ],
    },
    {
        id: 2,
        title: "Quản Lí Chung",
        listItems: [

            {
                id: 21,
                title: "Sản Phẩm",
                url: "/product/get?size=10&page=0",
            },
            {
                id: 22,
                title: "Khách Hàng",
                url: "/customer/get?size=10&page=0",
            },
            {
                id: 24,
                title: "Admin",
                url: "/admin",
            },
        ],
    },
    {
        id: 3,
        title: "More",
        listItems: [

            {
                id: 31,
                title: "Logs",
                url: "/faculties",
            },
        ],
    },
];




export const inputOrderProduct = [
    {
        id: "1",
        title: "Represenative Customer",
        dataName: "represenativeCustomer",
        type: "text"
    },
    {
        id: "2",
        title: "Represenative Seller",
        dataName: "represenativeCustomer",
        type: "text"
    },
]
export const testData = [
    {
        id: 1,
        name: "BASE A",
        unit: "m3",
        inventory: 23.2,
        price: 12.1,
        description: "oke con de",
        create_At: 12-1-20,
        update_At: 12-1-20
    }
]

export const sellerData = {
    id:1
    ,companyName:"CÔNG TY TNHH XÂY DỰNG VÀ THƯƠNG MẠI TIẾN ĐÔNG",
    address:"Thôn Thuận An 1, xã Hữu Văn, Huyện Chương Mỹ, TP Hà Nội",
    taxCode:"0110128690"
}