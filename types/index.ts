import { Cycle } from "framer-motion";
import { ReactNode } from "react";

export type ProjectCardProps = {
  title: string;
  description: string;
  link: string;
  imgSrc: string;
  className: string;
};

export type WorkflowCardProps = {
  heading: string;
  subHeading: string;
};

export type ServiceCardProps = {
  price: string;
  className?: string;
  features: Array<string>;
};

export type ResizablePanelProps = {
  children: ReactNode;
  animationName: "fade" | "crossFade" | "slide" | "slideAndFade";
  duration: number;
  containerStyles?: string;
};

export type MenuButtonProps = {
  mobileNav: boolean;
  toggleMobileNav: Cycle;
};