import React from "react";

const FadeInSection = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const [isVisible, setVisible] = React.useState(true);
    const domRef = React.useRef<any>();

    React.useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => setVisible(entry.isIntersecting));
      });
      observer.observe(domRef.current);
      // @ts-ignore
      if(!domRef) return () => observer.unobserve(domRef.current);
    }, []);

    return (
      <div
        className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
        ref={domRef}
      >
        {props.children}
      </div>
    );
}

export default FadeInSection;