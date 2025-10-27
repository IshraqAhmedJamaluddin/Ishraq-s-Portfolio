import { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";

interface LazyVideoProps {
  src: string;
}

const LazyVideo = ({ src }: LazyVideoProps) => {
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Reset state when src changes
    setHasError(false);
    setIsLoaded(false);
    setVideoSrc(null);
  }, [src]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVideoSrc(src);
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "50px" }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [src]);

  return (
    <Box
      ref={containerRef}
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {((!isLoaded && videoSrc) || hasError) && (
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
          {hasError ? (
            <Typography
              variant="body2"
              sx={{
                color: "text.secondary",
                px: 2,
                textAlign: "center",
              }}
            >
              Loading video...
            </Typography>
          ) : (
            <Box
              sx={{
                width: 40,
                height: 40,
                border: "3px solid #f3f3f3",
                borderTop: "3px solid #e91d63",
                borderRadius: "50%",
                animation: "spin 1s linear infinite",
              }}
            />
          )}
        </Box>
      )}
      {videoSrc && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => {
            console.log("Video loaded successfully:", src);
            setIsLoaded(true);
          }}
          onError={(e) => {
            console.error("Video error:", src, e);
            setIsLoaded(true);
            setHasError(true);
          }}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: isLoaded && !hasError ? 1 : 0,
            transition: "opacity 0.3s ease-in-out",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      )}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </Box>
  );
};

export default LazyVideo;
