import { motion } from "framer-motion"
import images from "./images";
import './App.css'
import { useEffect, useRef, useState } from "react";

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])

  return (
    <div className="App">
      <motion.div ref={carousel} className="carousel" whileDrag={{ cursor: "grabbing"}}>
        <motion.div 
          drag="x"
          dragConstraints={{ right: 0, left: -width }} className="inner-carousel">
          {images.map(image => {
            return(
              <motion.div className="item">
                <img src={image} alt="image"/>
              </motion.div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default App
