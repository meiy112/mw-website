declare module "react-fitty" {
  import { ComponentType, HTMLAttributes } from "react";

  interface FittyProps extends HTMLAttributes<HTMLDivElement> {
    minSize?: number;
    maxSize?: number;
  }

  export const ReactFitty: ComponentType<FittyProps>;
}
