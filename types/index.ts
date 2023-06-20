import { Cycle } from "framer-motion";
import { ReactNode } from "react";

export interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  className: string;
}

export interface WorkflowCardProps {
  heading: string;
  subHeading: string;
}

export interface ServiceCardProps {
  price: string;
  previousPrice?: string;
  className?: string;
  features: Array<string>;
}
export interface ResizablePanelProps {
  children: ReactNode;
  animationName: "fade" | "crossFade" | "slide" | "slideAndFade";
  duration: number;
  containerStyles?: string;
}

export interface MenuButtonProps {
  mobileNav: boolean;
  toggleMobileNav: Cycle;
}