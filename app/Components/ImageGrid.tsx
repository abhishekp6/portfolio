import Image from "next/image";
import { ImageGridProps } from "../types";

export const ImageGrid: React.FC<ImageGridProps> = ({ 
  images, 
  className = "",
  columns,
  gap
}) => (
  <div 
    className={`image-grid ${className}`}
    style={{
      gridTemplateColumns: columns ? `repeat(${columns}, 1fr)` : undefined,
      gap: gap
    }}
  >
    {images.map((image, index) => (
      <div 
        key={index} 
        className={`image-item ${image.className || ""} ${
          image.darkMode?.invert ? "dark-invert" : ""
        } ${
          image.darkMode?.brightness ? "dark-bright" : ""
        }`}
      >
        <Image 
          src={image.src} 
          alt={image.alt} 
          width={100} 
          height={100}
        />
      </div>
    ))}
  </div>
);
