export type Position = {
  xOrigin: number;
  x: number;
  yOrigin: number;
  y: number;
  style?: React.CSSProperties;
};

export type TrailImageProps = {
  position: Position | null;
  image: string;
};
