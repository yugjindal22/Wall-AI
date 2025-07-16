'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';

export default function LoaderComponent() {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(".logo-project img", {
      y: 30,
      duration: 2,
      delay: 1,
      stagger: 0.3,
      opacity: 1
    })
    .to(".logo-project h1", {
      y: 30,
      duration: 2,
      opacity: 1,
    })
    .to(".page-loader #by", {
      y: 30,
      duration: 2,
      stagger: 0.1,
      opacity: 1,
    })
    .to(".page-loader #name", {
      y: 30,
      duration: 2,
      stagger: 0.3,
      opacity: 1,
    })
    .to(".page-loader", {
      duration: 1.5,
      stagger: 0.2,
      opacity: 0,
    })
    .to(".page-loader", {
      display: "none"
    });
  }, []);

  return (
    <div className="page-loader">
      <div className="logo-project">
        <img src="/Images/walmart-logo.webp" alt="img" />
        <h1>Walmart Clone Project</h1>
      </div>

      <h2 id="by">Developed By :</h2>
      
      <h1 id="name">Sonu Kachhap</h1>
    </div>
  );
}
