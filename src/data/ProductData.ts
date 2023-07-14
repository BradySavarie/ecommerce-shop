// Remember to install uniquid to generate id's

export type Product = {
  id: number;
  name: string;
  manufacturer: string;
  category: string;
};

const ProductData: Product[] = [
  { id: 1, name: 'EP Booster', manufacturer: 'Xotic', category: 'Boost' },
  {
    id: 2,
    name: 'BD-2 Blues Driver',
    manufacturer: 'Boss',
    category: 'Overdrive',
  },
  { id: 3, name: 'RAT 2', manufacturer: 'ProCo', category: 'Distortion' },
  {
    id: 4,
    name: 'Big Muff',
    manufacturer: 'Electro-Harmonix',
    category: 'Fuzz',
  },
  { id: 5, name: 'DD3', manufacturer: 'Boss', category: 'Delay' },
  {
    id: 6,
    name: 'Afterneath',
    manufacturer: 'Earthquaker Devices',
    category: 'Reverb',
  },
];

export default ProductData;
