import { motion } from "framer-motion";
import "../../index.css";
import { Flex } from "@adobe/react-spectrum";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 1 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
        
      },
    };
  },
};

export const FrontPage = () => {


  const navigate = useNavigate();
  return (
    <div className="front-page">
      <motion.h1
        style={{ fontSize: "3rem", color: "lightblue", fontWeight: "bold" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 4, duration: 1 } }}
      >
        CodeSpeak
      </motion.h1>
      {/* <motion.p
        style={{ fontSize: "1.5rem", color: "lightgray", fontWeight: "bold" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 5, duration: 1 } }}
        exit={{ opacity: 0, transition: { delay: 0, duration: 1 } }}
      > */}
        <TypeAnimation
          sequence={[
            "Create innovative software products using voice commands - no matter what's your background.", 
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="p"
          cursor={true}
          repeat={1 }
          style={{ fontSize: "2em" }}
        />
        
      {/* </motion.p> */}
      <motion.button
        style={{
          position: "absolute",
          fontSize: "1.5rem",
          fontWeight: "bold",
          cursor: "pointer",
          backgroundColor: "white",
          height: "50px",
          borderRadius: "10px",
          padding: "10px 20px",
          border: "none",
          color: "black",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 5.5, duration: 1 } }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.6 },
        }}
        whileTap={{ scale: 0.9 }}
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Get Started
      </motion.button>
      <motion.svg
        width="600"
        height="600"
        viewBox="0 0 600 600"
        initial="hidden"
        animate="visible"
      >
        <motion.circle
          cx="100"
          cy="100"
          r="80"
          stroke="#E65C36"
          variants={draw}
          custom={1}
        />
        <motion.line
          x1="220"
          y1="30"
          x2="360"
          y2="170"
          stroke="#4CB884"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="220"
          y1="170"
          x2="360"
          y2="30"
          stroke="#4CB884"
          variants={draw}
          custom={2.5}
        />
        <motion.rect
          width="140"
          height="140"
          x="410"
          y="30"
          rx="20"
          stroke="#496DDB"
          variants={draw}
          custom={3}
        />
        <motion.circle
          cx="100"
          cy="300"
          r="80"
          stroke="#496DDB"
          variants={draw}
          custom={2}
        />
        <motion.line
          x1="220"
          y1="230"
          x2="360"
          y2="370"
          stroke="#E65C36"
          custom={3}
          variants={draw}
        />
        <motion.line
          x1="220"
          y1="370"
          x2="360"
          y2="230"
          stroke="#E65C36"
          custom={3.5}
          variants={draw}
        />
        <motion.rect
          width="140"
          height="140"
          x="410"
          y="230"
          rx="20"
          stroke="#4CB884"
          custom={4}
          variants={draw}
        />
        <motion.circle
          cx="100"
          cy="500"
          r="80"
          stroke="#4CB884"
          variants={draw}
          custom={3}
        />
        <motion.line
          x1="220"
          y1="430"
          x2="360"
          y2="570"
          stroke="#496DDB"
          variants={draw}
          custom={4}
        />
        <motion.line
          x1="220"
          y1="570"
          x2="360"
          y2="430"
          stroke="#496DDB"
          variants={draw}
          custom={4.5}
        />
        <motion.rect
          width="140"
          height="140"
          x="410"
          y="430"
          rx="20"
          stroke="#E65C36"
          variants={draw}
          custom={5}
        />
      </motion.svg>
    </div>
  );
};
