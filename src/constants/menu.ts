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
    href: "/allProducts?type=All-Products&brand=allProduct",
  },
  {
    name: "giày cỏ nhân tạo",
    href: "/allProducts?type=artificial-soccer-shoes&brand=artificialSoccerShoes",
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
    href: "/allProducts/?type=futsal-soccer-shoes&brand=FutsalSoccerShoes",
    children: [
      {
        name: "nike",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsalnike",
      },
      {
        name: "adidas",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsaladidas",
      },
      {
        name: "athleta",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsalathleta",
      },
      {
        name: "mizuno",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsalmizuno",
      },
      {
        name: "kamito",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsalkamito",
      },
      {
        name: "joma",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsaljoma",
      },
      {
        name: "asics",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsalasics",
      },
      {
        name: "desporte",
        href: "/allProducts/?type=futsal-soccer-shoes&brand=futsaldesporte",
      },
    ],
  },
  {
    name: "thương hiệu",
    href: "/",
    children: [
      { name: "nike", href: "/" },
      { name: "adidas", href: "/" },
      { name: "puma", href: "/" },
      { name: "mizuno", href: "/" },
      { name: "kamito", href: "/" },
      { name: "joma", href: "/" },
      { name: "asics", href: "/" },
      { name: "desporte", href: "/" },
      { name: "zocker", href: "/" },
    ],
  },
  {
    name: "hot sales",
    href: "/",
    children: [
      {
        name: "hot deal - giày nhân tạo",
        href: "/",
        children: [
          { name: "hot deal - nike", href: "/" },
          { name: "hot deal - adidas", href: "/" },
          { name: "hot deal - puma", href: "/" },
          { name: "hot deal - mizuno", href: "/" },
          { name: "hot deal - joma", href: "/" },
          { name: "hot deal - kamito", href: "/" },
        ],
      },
      {
        name: "hot deal - giày futsal",
        href: "/",
        children: [
          { name: "hot deal - nike", href: "/" },
          { name: "hot deal - adidas", href: "/" },
          { name: "hot deal - puma", href: "/" },
          { name: "hot deal - mizuno", href: "/" },
          { name: "hot deal - joma", href: "/" },
          { name: "hot deal - kamito", href: "/" },
        ],
      },
    ],
  },
  {
    name: "phụ kiện",
    href: "/",
    children: [
      { name: "phụ kiện nike", href: "/" },
      { name: "phụ kiện adidas", href: "/" },
      { name: "phụ kiện puma", href: "/" },
      { name: "phụ kiện mizuno", href: "/" },
      { name: "dép unbox", href: "/" },
      { name: "starbalm", href: "/" },
      { name: "grandsport", href: "/" },
      { name: "bóng động lực", href: "/" },
      { name: "bóng gerustar", href: "/" },
      { name: "bóng desporte", href: "/" },
      { name: "bóng zocker", href: "/" },
      { name: "phụ kiện thanh hùng futsal", href: "/" },
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
