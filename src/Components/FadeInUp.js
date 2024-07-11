import React, { useEffect, useRef } from 'react';

const FadeInUp = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewUp');
        } else {
          entry.target.classList.remove('in-viewUp');
        }
      });
    });

    observer.observe(sectionRef.current);

    return () => observer.unobserve(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="animat-FadeInUp">
      {children}
    </section>
  );
};

export default FadeInUp;






