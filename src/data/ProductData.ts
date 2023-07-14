import uniqid from 'uniqid';

export type Product = {
  id: string;
  name: string;
  manufacturer: string;
  category: string;
};

const ProductData: Product[] = [
  {
    id: uniqid(),
    name: 'EP Booster',
    manufacturer: 'Xotic',
    category: 'Boost',
  },
  {
    id: uniqid(),
    name: 'Katana Mini',
    manufacturer: 'Keeley',
    category: 'Boost',
  },
  {
    id: uniqid(),
    name: 'BD-2 Blues Driver',
    manufacturer: 'Boss',
    category: 'Overdrive',
  },
  {
    id: uniqid(),
    name: 'RAT 2',
    manufacturer: 'ProCo',
    category: 'Distortion',
  },
  {
    id: uniqid(),
    name: 'Big Muff',
    manufacturer: 'Electro-Harmonix',
    category: 'Fuzz',
  },
  { id: uniqid(), name: 'DD3', manufacturer: 'Boss', category: 'Delay' },
  {
    id: uniqid(),
    name: 'Afterneath',
    manufacturer: 'Earthquaker Devices',
    category: 'Reverb',
  },
];

export default ProductData;
