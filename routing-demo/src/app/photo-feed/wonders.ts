import { StaticImageData } from "next/image";
import photo1 from "./photos/1.webp";
import photo2 from "./photos/2.webp";
import photo3 from "./photos/3.webp";
import photo4 from "./photos/4.webp";
import photo5 from "./photos/5.webp";
import photo6 from "./photos/6.webp";
import photo7 from "./photos/7.webp";
import photo8 from "./photos/8.webp"; 

export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Digital Data Nexus",
    src: photo1,
    photographer: "AI Generated",
    location: "Cyberspace",
  },
  {
    id: "2",
    name: "Techtopia Landscape",
    src: photo2,
    photographer: "AI Generated",
    location: "Digital Realm",
  },
  {
    id: "3",
    name: "Futuristic Learning Hub",
    src: photo3,
    photographer: "AI Generated",
    location: "Virtual Academy",
  },
  {
    id: "4",
    name: "Neon Metropolis",
    src: photo4,
    photographer: "AI Generated",
    location: "Simulated Cityscape",
  },
  {
    id: "5",
    name: "Next-Generation Urbanism",
    src: photo5,
    photographer: "AI Generated",
    location: "Virtual Megacity",
  },
  {
    id: "6",
    name: "Code Universe",
    src: photo6,
    photographer: "AI Generated",
    location: "Digital Cosmos",
  },
  {
    id: "7",
    name: "Circuitry Synthesis",
    src: photo7,
    photographer: "AI Generated",
    location: "Silicon Synapse",
  },
  {
    id: "8",
    name: "Framework of Innovation",
    src: photo8, 
    photographer: "AI Generated",
    location: "Blueprint City",
  },
];

export default wondersImages;
