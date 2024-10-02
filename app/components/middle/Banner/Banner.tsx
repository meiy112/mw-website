import { useEffect } from "react";
import "./Banner.css";

const ProfileBanner = () => {
  useEffect(() => {
    const center = document.querySelector(".center") as HTMLElement | null;
    if (!center) return;

    const star: HTMLDivElement[] = [];
    for (let i = 0; i < 300; i++) {
      const starDiv = document.createElement("div");
      starDiv.classList.add("star");
      center.appendChild(starDiv);
      starDiv.style.top = `${
        Math.floor(Math.random() * 10) + 300 * Math.random()
      }px`;
      starDiv.style.left = `${Math.floor(
        Math.random() * (Math.random() * (i + 1)) + 2 * i + 2
      )}px`;
      starDiv.style.animation = `star-light ${
        Math.random() + 0.5
      }s ease-in-out ${Math.floor(Math.random())}s infinite alternate`;
      star.push(starDiv);
    }

    const shootingStar: HTMLDivElement[] = [];
    const shootingStarGround: HTMLDivElement[] = [];
    const groundEffect: HTMLDivElement[] = [];
    const shoooosh: HTMLDivElement[] = [];

    for (let i = 0; i < 6; i++) {
      const shootingStarDiv = document.createElement("div");
      const shootingStarGroundDiv = document.createElement("div");
      const shooooshDiv = document.createElement("div");
      const groundEffectDiv = document.createElement("div");

      shootingStarDiv.classList.add("shooting-star");
      shootingStarGroundDiv.classList.add("ground");
      shooooshDiv.classList.add("effect");
      groundEffectDiv.classList.add("ground-effect");

      center.appendChild(shootingStarDiv);
      shootingStarDiv.appendChild(shootingStarGroundDiv);
      shootingStarDiv.appendChild(shooooshDiv);
      shootingStarGroundDiv.appendChild(groundEffectDiv);

      shootingStarDiv.style.top = `${Math.floor(
        Math.random() * 10 + ((100 * i + 100) * Math.random()) / 6
      )}px`;
      shootingStarDiv.style.left = `${Math.floor(
        Math.random() * (Math.random() * (i + 1)) + 50 * i + i * 10
      )}px`;

      shootingStar.push(shootingStarDiv);
    }

    shootingStar[0].style.animation = `shooting-star ${
      Math.floor(Math.random()) + 5
    }s ease-in-out`;

    shootingStar[0].addEventListener("animationend", () => {
      shootingStar[0].style.animation = `none`;
      for (let i = 0; i < 6; i++) {
        shootingStar[i].style.animation = `shooting-star ${
          Math.floor(Math.random()) + i + 5
        }s ease-in-out ${Math.floor(Math.random()) + 6 * i}s infinite`;
      }
    });

    return () => {
      star.forEach((s) => s.remove());
      shootingStar.forEach((s) => s.remove());
    };
  }, []);

  return <div className="w-[100%] h-[100%] center"></div>;
};

export default ProfileBanner;
