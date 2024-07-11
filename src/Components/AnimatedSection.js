import React, { useEffect, useRef } from 'react';

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="animated-section">
      {children}
    </section>
  );
};

export default AnimatedSection;






