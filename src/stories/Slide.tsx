import { KeyboardEventHandler, useCallback, useState } from "react";
import "./Slide.css";

interface SlideProps {
  src: string;
  label?: string;
}

export const Slide = ({ src, label }: SlideProps) => {
  const [zoom, setZoom] = useState<0 | 1 | 2>(0);
  const onKeyDown = useCallback<KeyboardEventHandler>(
    (ev) => {
      if (ev?.key === "Enter") {
        setZoom(((zoom + 1) % 3) as 0 | 1 | 2);
        ev.stopPropagation();
      } else if (ev?.key === "Escape" && zoom > 0) {
        setZoom(0);
        ev.stopPropagation();
      }
    },
    [zoom]
  );
  return (
    <>
      <img
        onClick={() => setZoom(1)}
        onKeyDown={onKeyDown}
        src={src}
        aria-label={label}
        tabIndex={0}
      />
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
                onKeyDown={onKeyDown}
                tabIndex={0}
              />
            ) : (
              <img
                src={src}
                aria-label={label}
                className="zoom100"
                onKeyDown={onKeyDown}
                tabIndex={0}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};
