import React, { useEffect, useRef, useState } from "react";

export const WorkSection = () => {
  const workSectionRef = useRef(null);

  const counters = [
    { target: 2000, label: "Project Completed" },
    { target: 6000, label: "Happy Clients" },
    { target: 5000, label: "Cups of Coffee" },
    { target: 3000, label: "Real Professionals" },
  ];

  const [values, setValues] = useState(counters.map(() => 0));
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        const [entry] = entries;
        if (!entry.isIntersecting) return;

        if (!hasStarted) {
          setHasStarted(true);

          const duration = 2000; 
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            setValues(
              counters.map((counter, index) =>
                Math.floor(counter.target * progress)
              )
            );

            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };

          requestAnimationFrame(animate);
        }

        observer.unobserve(workSectionRef.current);
      },
      { root: null, threshold: 0.5 }
    );

    if (workSectionRef.current) observer.observe(workSectionRef.current);

    return () => {
      if (workSectionRef.current) observer.unobserve(workSectionRef.current);
    };
  }, [hasStarted]);

  return (
    <section className="section section-work-data" ref={workSectionRef}>
      <div className="container grid grid-four-column">
        {counters.map((counter, index) => (
          <div key={index}>
            <h2 className="counter-numbers" data-number={counter.target}>
              {hasStarted ? values[index] + "+" : "0+"}
            </h2>
            <p>{counter.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
