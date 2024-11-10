import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const StackPage = () => {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const engineRef = useRef<Matter.Engine | null>(null);
  const requestRef = useRef<number | null>(null);

  const animate = () => {
    engineRef.current = Matter.Engine.create();
    const engine = engineRef.current;

    const box = {
      body: Matter.Bodies.rectangle(150, 0, 40, 40),
      elem: boxRef.current,
      render() {
        const { x, y } = this.body.position;
        if (this.elem) {
          this.elem.style.top = `${y - 20}px`;
          this.elem.style.left = `${x - 20}px`;
          this.elem.style.transform = `rotate(${this.body.angle}rad)`;
        }
      },
    };

    const groundHeight = 60;
    const ground = Matter.Bodies.rectangle(
      window.innerWidth / 2, // x
      window.innerHeight - groundHeight / 2, // y
      window.innerWidth, // w
      groundHeight, // h
      { isStatic: true }
    );

    // Get container dimensions and position
    const container = containerRef.current!;
    const containerRect = container.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const containerLeft = containerRect.left;
    const containerTop = containerRect.top;

    // Define the walls
    const wallThickness = 1;
    const walls = [
      Matter.Bodies.rectangle(
        containerLeft + containerWidth / 2,
        containerTop - wallThickness / 2,
        containerWidth,
        wallThickness,
        { isStatic: true }
      ), // Top wall
      Matter.Bodies.rectangle(
        containerLeft + containerWidth / 2,
        containerTop + containerHeight + wallThickness / 2,
        containerWidth,
        wallThickness,
        { isStatic: true }
      ), // Bottom wall
      Matter.Bodies.rectangle(
        containerLeft - wallThickness / 2,
        containerTop + containerHeight / 2,
        wallThickness,
        containerHeight,
        { isStatic: true }
      ), // Left wall
      Matter.Bodies.rectangle(
        containerLeft + containerWidth + wallThickness / 2,
        containerTop + containerHeight / 2,
        wallThickness,
        containerHeight,
        { isStatic: true }
      ), // Right wall
    ];

    const mouse = Matter.Mouse.create(containerRef.current!);
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
      box.body,
      ground,
      mouseConstraint,
      ...walls,
    ]);

    (function rerender() {
      box.render();
      Matter.Engine.update(engine);
      requestRef.current = requestAnimationFrame(rerender);
    })();
  };

  useEffect(() => {
    animate();
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
      if (engineRef.current) {
        Matter.Engine.clear(engineRef.current);
      }
    };
  }, []);

  return (
    <div className="relative h-[100%] m-0" ref={containerRef}>
      <div
        className="absolute bg-red-300 h-[40px] w-[40px] cursor-move"
        ref={boxRef}
      ></div>
    </div>
  );
};

export default StackPage;
