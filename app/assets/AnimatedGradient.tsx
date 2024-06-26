export default function AnimatedGradient() {
  return (
    <div className="gradient-bg" style={{ position: "fixed", zIndex: 0 }}>
      <svg xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className="gradients-container">
        <div className="g1" style={{ opacity: 0.2 }}></div>
        <div className="g2" style={{ opacity: 0.2 }}></div>
        <div className="g3" style={{ opacity: 0.2 }}></div>
        <div className="g4" style={{ opacity: 0.2 }}></div>
        {/*<div className="g5" style={{ opacity: 0.3 }}></div>*/}
        {/*<div className="interactive" style={{ opacity: 0.3 }}></div>*/}
      </div>
    </div>
  );
}
