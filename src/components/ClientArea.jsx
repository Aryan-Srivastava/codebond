import React from "react";

// Assuming you have Framer Motion installed in your project
// You can install it using: npm install framer-motion

//--------------------------------------

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  return (
    <div className="bg-neutral-800">
      <div style={{ display: 'flex', height: '12rem', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontWeight: '600', textTransform: 'uppercase', color: '#a0aec0' }}>
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div style={{ display: 'flex', height: '12rem', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontWeight: '600', textTransform: 'uppercase', color: '#a0aec0' }}>
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [1, 0], ["12%", "-95%"]);

  return (
    <section
      ref={targetRef}
      style={{ position: "relative", height: "20vh",backgroundColor: '#2d3748' }}
    >
      <div
        style={{
          backgroundColor: "black",
          position: "sticky",
          // top: 0,
          overflow: "hidden",
          gap: "5px",
          height: "100vh",
        }}
      >
        <motion.div style={{ x, display: "flex",gap:'15px',alignItems:'center',justifyContent:'center' }}>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>

          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
          <div
            style={{
              width: "200px",
              height: "200px",
              background: "red",
            }}
          >
            1
          </div>
        </motion.div>
      </div>
    </section>
  );
};


//--------------------------------------

const ClientArea = () => {
  return <Example />;
};

export default ClientArea;
