export interface IProduct {
  Thumbnail: string[];
  totalMoney: number;
  size: number;
  id: number;
  image: string;
  name: string;
  originalPrice: string;
  discountedPrice: number;
  discount: string;
  installment?: string;
  badge: string;
  shoeType: string;
  codeSP: string;
  color: string;
  quantity: number;
}
