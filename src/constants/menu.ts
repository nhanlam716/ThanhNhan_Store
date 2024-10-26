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
  { name: "tất cả sản phẩm", href: "/" },
  {
    name: "giày cỏ nhân tạo",
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
    name: "giày futsal",
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
  { name: "phụ kiện", href: "/" },
  { name: "tin tức giày", href: "/" },
  { name: "khách hàng", href: "/" },
  { name: "cửa hàng", href: "/" },
  { name: "tuyển dụng", href: "/" },
  { name: "liên hệ", href: "/" },
];
