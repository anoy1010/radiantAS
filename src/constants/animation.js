import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

function AnimatedElement({ elem, direction }) {
  direction = direction || 1;
  let x = 0,
    y = direction * 100;

  if (elem.classList.contains("gs_reveal_fromLeft")) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains("gs_reveal_fromRight")) {
    x = 100;
    y = 0;
  }

  useEffect(() => {
    elem.style.transform = `translate(${x}px, ${y}px)`;
    elem.style.opacity = '0';

    gsap.fromTo(elem, { x, y, autoAlpha: 0 }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    });
  }, [elem, x, y]);

  return null;
}

function hide(elem) {
  gsap.set(elem, { autoAlpha: 0 });
}

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll('.gs_reveal');

    elements.forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        markers: true,
        onEnter: function () {
          AnimatedElement({ elem });
        },
        onEnterBack: function () {
          AnimatedElement({ elem, direction: -1 });
        },
        onLeave: function () {
          hide(elem);
        },
      });
    });
  }, []);

  return (
    <div></div>
  );
}

export default App;
