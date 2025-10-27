import { useState, useEffect, useRef } from "react";
import { Box } from "@mui/material";

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
}

const LazyImage = ({ src, alt, className }: LazyImageProps) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setImageSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src]);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        width: "100%",
        height: "auto",
      }}
    >
      {!isLoaded && imageSrc && (
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "#e0e0e0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1,
          }}
        >
          <Box
            sx={{
              width: 50,
              height: 50,
              border: "3px solid #f3f3f3",
              borderTop: "3px solid #e91d63",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        </Box>
      )}
      <img
        ref={imgRef}
        src={imageSrc || ""}
        alt={alt}
        className={className}
        onLoad={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        style={{
          opacity: isLoaded ? 1 : 0,
          width: "100%",
          height: "auto",
          transition: "opacity 0.3s ease-in-out",
        }}
        loading="lazy"
        decoding="async"
      />
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default LazyImage;
