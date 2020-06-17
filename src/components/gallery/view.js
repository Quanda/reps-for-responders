import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { wrap } from '@popmotion/popcorn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Lightbox from 'react-image-lightbox';
import { Container } from './style';
import 'react-image-lightbox/style.css';

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const Gallery = ({ images }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const imageIndex = wrap(0, images.fixed.length, page);
  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  // lightbox
  const [isLightboxOpen, toggleLightboxOpen] = useState(false);

  return (
    <Container>
      <AnimatePresence initial={false} custom={direction}>
        <div className="img-wrapper">
          <motion.img
            key={page}
            src={images.fixed[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 200 },
              opacity: { duration: 1 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            onClick={() => toggleLightboxOpen(true)}
          />
        </div>
      </AnimatePresence>
      <FontAwesomeIcon
        size="1x"
        icon={['fas', 'caret-right']}
        className="next"
        onClick={() => paginate(1)}
      />
      <FontAwesomeIcon
        size="1x"
        icon={['fas', 'caret-left']}
        className="prev"
        onClick={() => paginate(-1)}
      />

      {isLightboxOpen && (
        <Lightbox
          mainSrc={images.fluid[imageIndex]}
          nextSrc={images.fluid[(imageIndex + 1) % images.fluid.length]}
          prevSrc={
            images.fluid[
              (imageIndex + images.fluid.length - 1) % images.fluid.length
            ]
          }
          onCloseRequest={() => toggleLightboxOpen(false)}
          onMovePrevRequest={() => paginate(-1)}
          onMoveNextRequest={() => paginate(1)}
        />
      )}
    </Container>
  );
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

Gallery.propTypes = {
  images: PropTypes.shape({
    fixed: PropTypes.array,
    fluid: PropTypes.array,
  }),
};

export default Gallery;
