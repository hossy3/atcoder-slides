import "./Slide.css";

interface SlideProps {
  src: string;
  label?: string;
}

export const Slide = ({ src, label }: SlideProps) => {
  return <img src={src} aria-label={label} />;
};
