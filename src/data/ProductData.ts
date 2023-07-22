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
  description: string;
  price: number;
  quantity: number;
};

const ProductData: Product[] = [
  {
    id: uniqid(),
    model: 'EP Booster',
    image: epBooster__xotic,
    manufacturer: 'Xotic',
    category: 'Boost',
    description:
      "What do the tones of renowned guitarist such as Page, EVH and Johnson have in common? They all used the legendary echo machine EP-3 as a pre-amp. We've captured that magic in a new Xotic Effects pedal, the EP Booster. We've used the highest quality parts available with a discrete FET design and low impedance output, the EP Booster provides up to +20dB of unadulterated boost with multi-dimensional, shimmering highs and lows, and no ear fatigue. The internal DIP switches let you choose the boost frequencies, and EQ settings. A simple pure boost that pays reverence to the magical EP-3 and captures the celebrated tones of the world's most famous players. The EP-Booster,great tone starts here! True bypass for eliminating any signal interference when switched off. Can be used with AC adaptor (optional) or 9V Battery.",
    price: 130,
    quantity: 1,
  },
  {
    id: uniqid(),
    model: 'Katana Mini',
    image: katanaMini__keeley,
    manufacturer: 'Keeley',
    category: 'Boost',
    description:
      "Clean and super powerful MINI KATANA CLEAN BOOST! Keeley's oldest design, made smaller and with an additional feature. The Katana started back in 2002 within the Time Machine Boost. It was a dual class A JFET design that gave players an incredible boost and sounded so good, they never turned off. In fact, they often ran two or three on stages like John Mayer! The Mini Katana boost provides over 35dB of boost - enough for the most demanding players and sound reinforcement.",
    price: 155,
    quantity: 1,
  },
  {
    id: uniqid(),
    model: 'BD-2 Blues Driver',
    image: bd2__boss,
    manufacturer: 'Boss',
    category: 'Overdrive',
    description:
      "The BOSS BD-2 Blues Driver guitar effects pedal delivers that creamy yet crunchy sound you've heard countless great blues guitar players call up - and at a great value! The BD-2 Blues Driver simulates the sound of a vintage tube amplifier, giving you instant access to timeless tones. It also responds to your playing dynamics, so you can pull out a range of tones to give each note the perfect flavor and feel. All in all, you'll love the warm overdrive and emotive distortion the BOSS BD-2 Blues Driver adds to your rig.",
    price: 159,
    quantity: 1,
  },
  {
    id: uniqid(),
    model: 'RAT 2',
    image: rat2__proco,
    manufacturer: 'ProCo',
    category: 'Distortion',
    description:
      "The RAT2 will be your go-to distortion pedal for every gig, whether it's rock, blues, punk, or jazz. This is the standard that all other distortion devices are measured against. Heard on thousands of recordings, it has helped define the sound of the past three decade's most influential bands.",
    price: 99,
    quantity: 1,
  },
  {
    id: uniqid(),
    model: 'Big Muff',
    image: bigMuff__electroHarmonix,
    manufacturer: 'Electro-Harmonix',
    category: 'Fuzz',
    description:
      'Hendrix and Santana were among the first to get a piece of the Pi and, for over 40 years, the Big Muff Pi has been defining the sound of rock guitar. Revered by contemporary guitarists and rock legends for its rich, creamy, violin-like sustain - from Pink Floyd to The White Stripes -everyone still wants a piece of the Pi!',
    price: 125,
    quantity: 1,
  },
  {
    id: uniqid(),
    model: 'DD3',
    image: dd3__boss,
    manufacturer: 'Boss',
    category: 'Delay',
    description:
      "Since its launch in 1986, the Boss DD-3 has remained the go-to digital delay for players - both bedroom and pro - looking for something reliable, easy to use and familiar. If you're looking to go digital, there's no better place to start.",
    price: 139,
    quantity: 1,
  },
  {
    id: uniqid(),
    model: 'Afterneath',
    image: afterneath__earthquakerDevices,
    manufacturer: 'Earthquaker Devices',
    category: 'Reverb',
    description:
      "The Afterneath sounds a lot like it looks - a wizard in a cave in a box. You are the wizard - or sorceress, if you prefer - and the cave is your instrument's signal, vast, expansive, and magical. It is true-bypass, and built one-at-a-time by a wizard, two bards, a paladin, a monk, a handful of rangers, a couple druids, a barbarian, a rogue, and a Dungeon Master in the Gelatinous Cube of Akron, Ohio, USA. The Afterneath uses silent relay-based soft touch switching. Audio will not pass without power.",
    price: 259,
    quantity: 1,
  },
];

export default ProductData;
