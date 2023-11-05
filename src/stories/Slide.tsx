import { useState } from "react";
import "./Slide.css";

interface SlideProps {
  src: string;
  label?: string;
}

export const Slide = ({ src, label }: SlideProps) => {
  const [zoom, setZoom] = useState<0 | 1 | 2>(0);
  return (
    <>
      <img onClick={() => setZoom(1)} src={src} aria-label={label} />
      {zoom > 0 && (
        <div onClick={() => setZoom(0)} className="modal-overlay">
          <div className="modal-content">
            {zoom == 1 ? (
              <img
                src={src}
                aria-label={label}
                onClick={(ev) => {
                  setZoom(2);
                  ev.stopPropagation();
                }}
              />
            ) : (
              <img src={src} aria-label={label} className="zoom100" />
            )}
          </div>
        </div>
      )}
    </>
  );
};
