import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import StackComponent from "./StackComponent";
import { createRoot } from "react-dom/client";
import { languageList, svgList } from "./utils";
import s from "./Stack.module.css";

const StackPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const requestRef = useRef<number | null>(null);
  const boxesRef = useRef<any[]>([]);
  const largeBoxesRef = useRef<any[]>([]);

  const animate = () => {
    engineRef.current = Matter.Engine.create();
    const engine = engineRef.current;

    const container = containerRef.current!;
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;

    const fontSize = parseFloat(getComputedStyle(container).fontSize);
    const boxWidthEm = 5;
    const boxHeightEm = 5;
    const boxWidthPx = boxWidthEm * fontSize;
    const boxHeightPx = boxHeightEm * fontSize;

    const boxes = svgList.map((item, index) => {
      const boxElem = document.createElement("div");
      boxElem.style.position = "absolute";
      boxElem.style.width = `${boxWidthPx}px`;
      boxElem.style.height = `${boxHeightPx}px`;
      container.appendChild(boxElem);

      const stackComponentElement = document.createElement("div");
      boxElem.appendChild(stackComponentElement);

      const root = createRoot(stackComponentElement);
      root.render(
        <StackComponent
          svg={item.svg}
          fadeOut={item.fadeOut || false}
          key={index}
        />
      );

      const x = Math.random() * (containerWidth - boxWidthPx) + boxWidthPx / 2;
      const y =
        Math.random() * (containerHeight - boxHeightPx) + boxHeightPx / 2;
      const body = Matter.Bodies.rectangle(x, y, boxWidthPx, boxHeightPx);
      return {
        body,
        elem: boxElem,
        render() {
          const { x, y } = this.body.position;
          this.elem.style.top = `${y - boxWidthPx / 2}px`;
          this.elem.style.left = `${x - boxWidthPx / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
      };
    });

    boxesRef.current = boxes;

    const largeBoxWidthEm = 7.5;
    const largeBoxHeightEm = 7.5;
    const largeBoxWidthPx = largeBoxWidthEm * fontSize;
    const largeBoxHeightPx = largeBoxHeightEm * fontSize;

    const largeBoxes = languageList.map((item, index) => {
      const boxElem = document.createElement("div");
      boxElem.style.position = "absolute";
      boxElem.style.width = `${largeBoxWidthPx}px`;
      boxElem.style.height = `${largeBoxHeightPx}px`;
      container.appendChild(boxElem);

      const stackComponentElement = document.createElement("div");
      boxElem.appendChild(stackComponentElement);

      const root = createRoot(stackComponentElement);
      root.render(
        <StackComponent
          svg={item.svg}
          fadeOut={item.fadeOut || false}
          key={index}
        />
      );

      const x =
        Math.random() * (containerWidth - largeBoxWidthPx) +
        largeBoxWidthPx / 2;
      const y =
        Math.random() * (containerHeight - largeBoxHeightPx) +
        largeBoxHeightPx / 2;
      const body = Matter.Bodies.rectangle(
        x,
        y,
        largeBoxWidthPx,
        largeBoxHeightPx
      );
      return {
        body,
        elem: boxElem,
        render() {
          const { x, y } = this.body.position;
          this.elem.style.top = `${y - largeBoxWidthPx / 2}px`;
          this.elem.style.left = `${x - largeBoxWidthPx / 2}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        },
      };
    });

    largeBoxesRef.current = largeBoxes;

    const wallThickness = 1;
    const walls = [
      Matter.Bodies.rectangle(
        containerWidth / 2,
        -wallThickness / 2,
        containerWidth,
        wallThickness,
        { isStatic: true }
      ), // Top wall
      Matter.Bodies.rectangle(
        containerWidth / 2,
        containerHeight + wallThickness / 2,
        containerWidth,
        wallThickness,
        { isStatic: true }
      ), // Bottom wall
      Matter.Bodies.rectangle(
        -wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight,
        { isStatic: true }
      ), // Left wall
      Matter.Bodies.rectangle(
        containerWidth + wallThickness / 2,
        containerHeight / 2,
        wallThickness,
        containerHeight,
        { isStatic: true }
      ), // Right wall
    ];

    const mouse = Matter.Mouse.create(container);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: {
          visible: false,
        },
      },
    });

    Matter.Composite.add(engine.world, [
      ...largeBoxes.map((b) => b.body),
      ...boxes.map((b) => b.body),
      mouseConstraint,
      ...walls,
    ]);

    (function rerender() {
      boxes.forEach((b) => b.render());
      largeBoxes.forEach((b) => b.render());
      Matter.Engine.update(engine);
      requestRef.current = requestAnimationFrame(rerender);
    })();
  };

  useEffect(() => {
    if (containerRef.current) {
      animate();
    }
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
      // Remove all box elements from the container
      boxesRef.current.forEach((box) => {
        if (box.elem && containerRef.current) {
          containerRef.current.removeChild(box.elem);
        }
      });
      largeBoxesRef.current.forEach((box) => {
        if (box.elem && containerRef.current) {
          containerRef.current.removeChild(box.elem);
        }
      });
    };
  }, [containerRef.current]);

  return (
    <div className="relative h-[100%] m-0 overflow-hidden" ref={containerRef}>
      <div className="px-[1em] select-none absolute w-[100%] flex flex-col items-center">
        <span
          className={`text-white text-[3.5rem] font-medium gradientBackground`}
        >
          Tech Stack
        </span>
        <span className="opacity-[0.5] --text-gradient-pink">
          Yes, you can actually stack them.
        </span>
      </div>
    </div>
  );
};

export default StackPage;
