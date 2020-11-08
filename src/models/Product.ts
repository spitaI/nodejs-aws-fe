import * as Yup from 'yup';

export type Product = {
  id: string;
  title: string;
  summary: string;
  author: string;
  pages: number;
  published: string;
  price: number;
  image: string;
};

export const ProductSchema = Yup.object().shape({
  title: Yup.string().required(),
  summary: Yup.string(),
  price: Yup.number().required(),
});
