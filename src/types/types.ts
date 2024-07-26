import { ReactNode } from "react";

export type Technology = {
    title: string;
  };
  
  export type Project = {
    title: string;
    summary: string;
    technologies: Technology[];
  };
  
  export type Cards = {
    h5: string;
    h1: string;
    link: string;
    icon: ReactNode;
  };