import { useEffect } from "react";
import "./Footer.css";

const StarsBackground = () => {
  useEffect(() => {
    const container = document.querySelector(
      ".stars-container"
    ) as HTMLElement | null;
    if (!container) return;

    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const numStars = Math.floor((screenWidth * screenHeight) / 2000);

    const stars: HTMLDivElement[] = [];
    for (let i = 0; i < numStars; i++) {
      const starDiv = document.createElement("div");
      starDiv.classList.add("star");
      container.appendChild(starDiv);

      starDiv.style.top = `${Math.random() * screenHeight}px`;
      starDiv.style.left = `${Math.random() * screenWidth}px`;

      starDiv.style.animation = `star-light ${
        Math.random() + 0.5
      }s ease-in-out ${Math.floor(Math.random())}s infinite alternate`;
      stars.push(starDiv);
    }

    const numShootingStars = Math.floor(screenWidth / 400); // 1 shooting star for every 400px of screen width

    const shootingStars: HTMLDivElement[] = [];
    for (let i = 0; i < numShootingStars; i++) {
      const shootingStarDiv = document.createElement("div");
      const shootingStarGroundDiv = document.createElement("div");
      const effectDiv = document.createElement("div");
      const groundEffectDiv = document.createElement("div");

      shootingStarDiv.classList.add("shooting-star");
      shootingStarGroundDiv.classList.add("ground");
      effectDiv.classList.add("effect");
      groundEffectDiv.classList.add("ground-effect");

      container.appendChild(shootingStarDiv);
      shootingStarDiv.appendChild(shootingStarGroundDiv);
      shootingStarDiv.appendChild(effectDiv);
      shootingStarGroundDiv.appendChild(groundEffectDiv);

      const randomPositionChoice = Math.random() > 0.5 ? 1 : 2;

      if (randomPositionChoice === 1) {
        shootingStarDiv.style.top = `${Math.random() * screenHeight}px`;
        shootingStarDiv.style.left = `${-Math.random() * 100}px`;
      } else {
        shootingStarDiv.style.top = `${-Math.random() * 100}px`;
        shootingStarDiv.style.left = `${Math.random() * screenWidth}px`;
      }

      shootingStars.push(shootingStarDiv);
    }

    shootingStars[0].style.animation = `shooting-star ${
      Math.random() * 5 + 5
    }s ease-in-out`;

    shootingStars[0].addEventListener("animationend", () => {
      shootingStars[0].style.animation = `none`;
      shootingStars.forEach((star, i) => {
        star.style.animation = `shooting-star ${
          Math.random() * 5 + 5
        }s ease-in-out ${Math.random() * 6 + i}s infinite`;
      });
    });

    return () => {
      stars.forEach((s) => s.remove());
      shootingStars.forEach((s) => s.remove());
    };
  }, []);

  return (
    <div className="w-[100%] h-[100%] absolute stars-container overflow-hidden">
      {/* You can customize this further */}
    </div>
  );
};

export default StarsBackground;
