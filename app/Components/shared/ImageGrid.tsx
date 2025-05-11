import Image from "next/image";
import { ImageGridProps } from "../../types";

export const ImageGrid: React.FC<ImageGridProps> = ({ images }) => (
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
    {images.map((image, index) => (
      <Image 
        key={index} 
        src={image.src} 
        alt={image.alt} 
        width="100" 
        height="100" 
        className={`hover-scale hover-rotate cursor-pointer ${
          image.darkMode?.invert ? "dark:invert" : ""
        } ${
          image.darkMode?.brightness ? `dark:brightness-[${image.darkMode.brightness}%]` : ""
        }`}
      />
    ))}
  </div>
);
