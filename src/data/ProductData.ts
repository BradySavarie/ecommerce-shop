import uniqid from 'uniqid';
import katanaMini__keeley from '../assets/katana-mini__keeley.webp';
import epBooster__xotic from '../assets/ep-booster__xotic.webp';
import bd2__boss from '../assets/bd2__boss.jpeg';
import rat2__proco from '../assets/rat2__proco.webp';
import bigMuff__electroHarmonix from '../assets/big-muff__electro-harmonix.webp';
import dd3__boss from '../assets/dd3__boss.webp';
import afterneath__earthquakerDevices from '../assets/afterneath__earthquaker-devices.jpeg';

export type Product = {
  id: string;
  model: string;
  manufacturer: string;
  image: string;
  category: string;
};

const ProductData: Product[] = [
  {
    id: uniqid(),
    model: 'EP Booster',
    image: epBooster__xotic,
    manufacturer: 'Xotic',
    category: 'Boost',
  },
  {
    id: uniqid(),
    model: 'Katana Mini',
    image: katanaMini__keeley,
    manufacturer: 'Keeley',
    category: 'Boost',
  },
  {
    id: uniqid(),
    model: 'BD-2 Blues Driver',
    image: bd2__boss,
    manufacturer: 'Boss',
    category: 'Overdrive',
  },
  {
    id: uniqid(),
    model: 'RAT 2',
    image: rat2__proco,
    manufacturer: 'ProCo',
    category: 'Distortion',
  },
  {
    id: uniqid(),
    model: 'Big Muff',
    image: bigMuff__electroHarmonix,
    manufacturer: 'Electro-Harmonix',
    category: 'Fuzz',
  },
  {
    id: uniqid(),
    model: 'DD3',
    image: dd3__boss,
    manufacturer: 'Boss',
    category: 'Delay',
  },
  {
    id: uniqid(),
    model: 'Afterneath',
    image: afterneath__earthquakerDevices,
    manufacturer: 'Earthquaker Devices',
    category: 'Reverb',
  },
];

export default ProductData;
