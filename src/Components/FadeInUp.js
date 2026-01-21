// import React, { useEffect, useRef } from 'react';

// const FadeInUp = ({ children }) => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(entries => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           entry.target.classList.add('in-viewUp');
//         } else {
//           entry.target.classList.remove('in-viewUp');
//         }
//       });
//     });

//     observer.observe(sectionRef.current);

//     return () => observer.unobserve(sectionRef.current);
//   }, []);

//   return (
//     <section ref={sectionRef} className="animat-FadeInUp">
//       {children}
//     </section>
//   );
// };

// export default FadeInUp;





import React, { useEffect, useRef } from 'react';

const FadeInUp = ({ children }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    // 1. Capture the current value of the ref
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-viewUp');
        } else {
          entry.target.classList.remove('in-viewUp');
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
  }, []);

  return (
    <section ref={sectionRef} className="animat-FadeInUp">
      {children}
    </section>
  );
};

export default FadeInUp;
