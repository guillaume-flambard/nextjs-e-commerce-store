export interface Billboard {
  id: number;
  imageUrl: string;
  label: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: string;
}

export interface Product {
  id: string;
  category: Category;
  name: string;
  price: number;
  isFeatured: boolean;
  size: string;
  color: string;
  images: Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}
