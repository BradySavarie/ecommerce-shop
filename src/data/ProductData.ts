import uniqid from 'uniqid';
import katanaMini__keeley from '../assets/katana-mini__keeley.webp';
import epBooster__xotic from '../assets/ep-booster__xotic.webp';
import bd2__boss from '../assets/bd2__boss.jpeg';
import rat2__proco from '../assets/rat2__proco.webp';
import bigMuff__electroHarmonix from '../assets/big-muff__electro-harmonix.webp';
import dd3__boss from '../assets/dd3__boss.webp';
import afterneath__earthquakerDevices from '../assets/afterneath__earthquaker-devices.jpeg';
import sd1__boss from '../assets/sd1__boss.webp';
import soulFood__electroHarmonix from '../assets/soul-food__electro-harmonix.webp';
import fuzzBender__keeley from '../assets/fuzz-bender__keeley.webp';
import mood__chaseBliss from '../assets/mood__chase-bliss.webp';
import aurora__keeley from '../assets/aurora__keeley.webp';

export type Product = {
  id: string;
  model: string;
  manufacturer: string;
  image: string;
  category: string;
  description: string;
  price: number;
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
  },
  {
    id: uniqid(),
    model: 'BD-2',
    image: bd2__boss,
    manufacturer: 'Boss',
    category: 'Overdrive',
    description:
      "The BOSS BD-2 Blues Driver guitar effects pedal delivers that creamy yet crunchy sound you've heard countless great blues guitar players call up - and at a great value! The BD-2 Blues Driver simulates the sound of a vintage tube amplifier, giving you instant access to timeless tones. It also responds to your playing dynamics, so you can pull out a range of tones to give each note the perfect flavor and feel. All in all, you'll love the warm overdrive and emotive distortion the BOSS BD-2 Blues Driver adds to your rig.",
    price: 159,
  },
  {
    id: uniqid(),
    model: 'SD-1',
    image: sd1__boss,
    manufacturer: 'Boss',
    category: 'Overdrive',
    description:
      "The SD-1 Super OverDrive pedal produces the warm, natural distortion of an overdriven tube amplifier while maintaining the subtle nuances of a player's picking technique. This is one of BOSS' more subtle and smooth overdrive pedals, perfect for blues and rock.",
    price: 86,
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
  },
  {
    id: uniqid(),
    model: 'Soul Food',
    image: soulFood__electroHarmonix,
    manufacturer: 'Electro-Harmonix',
    category: 'Distortion',
    description:
      "Transparent overdrive with great touch and response! Tone aficionados kept telling Mike Matthews about a pedal that had achieved a lot of buzz because it was only obtainable at an exorbitant price. That pedal was the Klon Cantaur. A believer in bringing great tools to starving musicians, Mike tasked his trusty team to create an affordable alternative, and that is how the EHX Soul Food Transparent Overdrive was cooked up. Its circuitry features boosted power rails to provide abundant headroom and increased definition. Best of all, you don't have to be a rock star to own one!",
    price: 125,
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
  },
  {
    id: uniqid(),
    model: 'Fuzz Bender',
    image: fuzzBender__keeley,
    manufacturer: 'Keeley',
    category: 'Fuzz',
    description:
      'The Keeley Fuzz Bender is a modern fuzz using a combination of high-gain silicon and silky smooth germanium transistors. What makes this fuzz better? An Active EQ! Using two gyrators as an active EQ gives you the ability to create massive fuzz tones not possible with typical square-wave boxes.Pummel your amp with over 20dB of boost/cut at 100Hz and 10K Hz! The Fuzz Bender is built around vintage Japanese germanium to create its monumental fuzz tones. With the all new Bias Control, you control the attack and decay of your notes. Anything from Fat Square Waves to Angular Fuzz to glitchy-Velcro attacks are possible with the Bias Control.',
    price: 219,
  },
  {
    id: uniqid(),
    model: 'DD-3',
    image: dd3__boss,
    manufacturer: 'Boss',
    category: 'Delay',
    description:
      "Since its launch in 1986, the Boss DD-3 has remained the go-to digital delay for players - both bedroom and pro - looking for something reliable, easy to use and familiar. If you're looking to go digital, there's no better place to start.",
    price: 139,
  },
  {
    id: uniqid(),
    model: 'Mood',
    image: mood__chaseBliss,
    manufacturer: 'Chase Bliss',
    category: 'Delay',
    description:
      'The Mood is the result of a collaboration between Chase Bliss, Old Blood Noise Endeavors, and the Belgium-based Drolo. Its two channels of delays and looping options allow you to stretch, twist, freeze, and otherwise manipulate your audio in myriad ways.',
    price: 400,
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
  },
  {
    id: uniqid(),
    model: 'Aurora',
    image: aurora__keeley,
    manufacturer: 'Keeley',
    category: 'Reverb',
    description:
      "Join Keeley Electronics' grand entrance into the hallowed halls of psycho-acoustic processing - the Aurora Reverb. Few effects complement a guitar better than reverb; from spring reverb coils in a tank to the distant echo of cathedrals to 600 pound sheet-metal plate vibrations. Reverb captures our imaginations and plunges us deeply into our musical psyches.  Reverb IS the key to the highway. At Keeley Electronics, the Aurora Reverb had to meet certain specific criteria. It had to be affordable with no compromise to audio quality. It had to be easy for guitarists to use and be inspiring. And it had to offer the essentials for tailoring your tone without a dozen knobs to learn. Now achieved, we are proud to offer a true bypass, 100% dry analog path, low noise, 24 bit, high-fidelity reverb processor. AND IT SOUNDS GREAT!",
    price: 269,
  },
];

export default ProductData;
