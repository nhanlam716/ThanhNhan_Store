export const BRAND = [
  { name: "nike" },
  { name: "adidas" },
  { name: "puma" },
  { name: "mizuno" },
  { name: "kamito" },
  { name: "joma" },
  { name: "asics" },
  { name: "desporte" },
  { name: "zocker" },
];

export const ACCESSORY = [
  { name: "phụ kiện nike" },
  { name: "phụ kiện adidas" },
  { name: "phụ kiện puma" },
  { name: "phụ kiện mizuno" },
  { name: "dép unbox" },
  { name: "starbalm" },
  { name: "grandsport" },
  { name: "bóng động lực" },
  { name: "bóng gerustar" },
  { name: "bóng desporte" },
  { name: "bóng zocker" },
  { name: "phụ kiện thanh hùng futsal" },
];

export type IMenu = {
  name?: string;
  href?: string;
  children?: IMenu[];
};

export const MENU: IMenu[] = [
  { name: "trang chủ", href: "/" },
  {
    name: "tất cả sản phẩm",
    href: "/allProducts",
  },
  {
    name: "giày cỏ nhân tạo",
    href: "/allProducts?type=artificial-soccer-shoes",
    children: [
      {
        name: "nike",
        href: "/allProducts?type=artificial-soccer-shoes&brand=nike",
      },
      {
        name: "adidas",
        href: "/allProducts?type=artificial-soccer-shoes&brand=adidas",
      },
      {
        name: "puma",
        href: "/allProducts?type=artificial-soccer-shoes&brand=puma",
      },
      {
        name: "mizuno",
        href: "/allProducts?type=artificial-soccer-shoes&brand=mizuno",
      },
      {
        name: "kamito",
        href: "/allProducts?type=artificial-soccer-shoes&brand=kamito",
      },
      {
        name: "joma",
        href: "/allProducts?type=artificial-soccer-shoes&brand=joma",
      },
      {
        name: "asics",
        href: "/allProducts?type=artificial-soccer-shoes&brand=asics",
      },
      {
        name: "desporte",
        href: "/allProducts?type=artificial-soccer-shoes&brand=desporte",
      },
      {
        name: "zocker",
        href: "/allProducts?type=artificial-soccer-shoes&brand=zocker",
      },
    ],
  },
  {
    name: "giày futsal",
    href: "/allProducts?type=futsal-soccer-shoes",
    children: [
      {
        name: "nike",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsalnike",
      },
      {
        name: "adidas",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsaladidas",
      },
      {
        name: "athleta",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsalathleta",
      },
      {
        name: "mizuno",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsalmizuno",
      },
      {
        name: "kamito",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsalkamito",
      },
      {
        name: "joma",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsaljoma",
      },
      {
        name: "asics",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsalasics",
      },
      {
        name: "desporte",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsaldesporte",
      },
    ],
  },
  {
    name: "thương hiệu",
    href: "/",
    children: [
      {
        name: "nike",
        href: "/allProducts?type=artificial-soccer-shoes&brand=nike",
        children: [
          {
            name: "nike mercurial",
            href: "",
          },
          {
            name: "nike tiempo",
            href: "",
          },
          {
            name: "nike phantom",
            href: "",
          },
          {
            name: "nike react gato",
            href: "",
          },
          {
            name: "nike lunar gato",
            href: "",
          },
          {
            name: "nike street gato",
            href: "",
          },
        ],
      },
      {
        name: "adidas",
        href: "/allProducts?type=artificial-soccer-shoes&brand=adidas",
        children: [
          {
            name: "adidas f50",
            href: "",
          },
          {
            name: "adidas x",
            href: "",
          },
          {
            name: "adidas predator",
            href: "",
          },
          {
            name: "adidas copa",
            href: "",
          },
          {
            name: "adidas top sala",
            href: "",
          },
        ],
      },
      {
        name: "puma",
        href: "/allProducts?type=artificial-soccer-shoes&brand=puma",
        children: [
          {
            name: "puma ultra",
            href: "",
          },
          {
            name: "puma future",
            href: "",
          },
          {
            name: "puma king",
            href: "",
          },
        ],
      },
      {
        name: "mizuno",
        href: "/allProducts?type=artificial-soccer-shoes&brand=mizuno",
        children: [
          {
            name: "mizuno monarcida",
            href: "",
          },
          {
            name: "mizuno alpha",
            href: "",
          },
          {
            name: "mizuno morelia",
            href: "",
          },
        ],
      },
      {
        name: "kamito",
        href: "/allProducts?type=artificial-soccer-shoes&brand=kamito",
        children: [
          {
            name: "kamito TA 11",
            href: "",
          },
        ],
      },
      {
        name: "athleta",
        href: "/allProducts?type=futsal-soccer-shoes&brand=futsalathleta",
        children: [
          {
            name: "athleta o-rei",
            href: "",
          },
        ],
      },
      {
        name: "joma",
        href: "/allProducts?type=artificial-soccer-shoes&brand=joma",
        children: [
          {
            name: "joma top flex",
            href: "",
          },
          {
            name: "joma regate",
            href: "",
          },
          {
            name: "joma cancha",
            href: "",
          },
          {
            name: "joma mundial",
            href: "",
          },
        ],
      },
      {
        name: "asics",
        href: "/allProducts?type=artificial-soccer-shoes&brand=asics",
        children: [
          {
            name: "asics destaque",
            href: "",
          },
          {
            name: "asics calcetto",
            href: "",
          },
          {
            name: "asics ds light",
            href: "",
          },
        ],
      },
      {
        name: "desporte",
        href: "/allProducts?type=artificial-soccer-shoes&brand=desporte",
        children: [
          {
            name: "desporte campinas",
            href: "",
          },
          {
            name: "desporte tessa light",
            href: "",
          },
          {
            name: "desporte boa vista",
            href: "",
          },
          {
            name: "desporte sao luis",
            href: "",
          },
        ],
      },
      {
        name: "zocker",
        href: "/allProducts?type=fu&brand=zocker",
        children: [
          {
            name: "zocker winner energy",
            href: "",
          },
          {
            name: "zocker inspire",
            href: "",
          },
        ],
      },
    ],
  },
  {
    name: "hot sales",
    href: "#",
    children: [
      {
        name: "hot deal - giày nhân tạo",
        href: "/allProducts?type=hotdeal",
        children: [
          {
            name: "hot deal - nike mercurial vapor 15 pro tf",
            href: "/allProducts?type=hotdeal&brand=nikeMercurial",
          },
          {
            name: "hot deal - adidas x crazyfast.3/league tf",
            href: "/allProducts?type=hotdeal&brand=adidasX",
          },
          {
            name: "hot deal - nike phantom gx academy tf",
            href: "/allProducts?type=hotdeal&brand=nikePhantom",
          },
          {
            name: "hot deal - giày đế tf trên 2tr",
            href: "/allProducts?type=hotdeal&brand=TFT2tr",
          },
          {
            name: "hot deal - giày đế tf dưới 2tr",
            href: "/allProducts?type=hotdeal&brand=TF2tr",
          },
          {
            name: "hot deal - giày đế tf dưới 1tr5",
            href: "/allProducts?type=hotdeal&brand=TFD2tr",
          },
        ],
      },
      {
        name: "hot deal - giày futsal",
        href: "/allProducts?type=hotdeal",
        children: [
          {
            name: "hot deal - giày futsal trên 2tr",
            href: "/allProducts?type=hotdeal&brand=futsalT2tr",
          },
          {
            name: "hot deal - giày futsal dưới 2tr",
            href: "/allProducts?type=hotdeal&brand=futsal2tr",
          },
          {
            name: "hot deal - giày futsal dưới 1tr5",
            href: "/allProducts?type=hotdeal&brand=futsalD2tr",
          },
        ],
      },
    ],
  },
  {
    name: "phụ kiện",
    href: "/allProducts?type=accessory",
    children: [
      {
        name: "phụ kiện activital",
        href: "/allProducts?type=accessory&brand=activital",
      },
      {
        name: "phụ kiện adidas",
        href: "/allProducts?type=accessory&brand=adidas",
      },
      {
        name: "phụ kiện joma",
        href: "/allProducts?type=accessory&brand=joma",
      },
      {
        name: "phụ kiện mizuno",
        href: "/allProducts?type=accessory&brand=mizuno",
      },
      {
        name: "phụ kiện zocker",
        href: "/allProducts?type=accessory&brand=zocker",
      },
      {
        name: "phụ kiện ligpro",
        href: "/allProducts?type=accessory&brand=ligpro",
      },
      {
        name: "phụ kiện lh goalkeeping",
        href: "/allProducts?type=accessory&brand=goalkeeping",
      },
      {
        name: "phụ kiện thanh hùng futsal",
        href: "/allProducts?type=accessory&brand=thanhhungfutsal",
      },
      {
        name: "dép unbox",
        href: "/allProducts?type=accessory&brand=sandal",
      },
      {
        name: "starbalm",
        href: "/allProducts?type=accessory&brand=starbalm",
      },
      {
        name: "grandsport",
        href: "/allProducts?type=accessory&brand=grandsport",
      },
      {
        name: "bóng động lực",
        href: "/allProducts?type=accessory&brand=dongluc",
      },
      {
        name: "bóng gerustar",
        href: "/allProducts?type=accessory&brand=gerustar",
      },
    ],
  },
  { name: "tin tức giày", href: "/" },
  { name: "khách hàng", href: "/" },
  { name: "cửa hàng", href: "/" },
  {
    name: "tuyển dụng",
    href: "/",
    children: [
      { name: "cửa hàng trưởng", href: "/" },
      { name: "nhân viên bán hàng", href: "/" },
    ],
  },
  { name: "liên hệ", href: "/" },
];
