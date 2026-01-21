// import React, { useEffect, useRef } from 'react';

// const AnimatedSection = ({ children }) => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-view');
//         } else {
//           entry.target.classList.remove('in-view');
//         }
//       });
//     });

//     observer.observe(sectionRef.current);

//     return () => observer.unobserve(sectionRef.current);
//   }, []);

//   return (
//     <section ref={sectionRef} className="animated-section">
//       {children}
//     </section>
//   );
// };

// export default AnimatedSection;






import React, { useEffect, useRef } from 'react';

const AnimatedSection = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Capture the current value of the ref
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        } else {
          entry.target.classList.remove('in-view');
        }
      });
    });

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      // 2. Use the captured variable in the cleanup
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []); // Dependencies are correct as we only want to set this up once

  return (
    <section ref={sectionRef} className="animated-section">
      {children}
    </section>
  );
};

export default AnimatedSection;