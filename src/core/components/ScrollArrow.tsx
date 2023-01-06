'use client';

import React, { useCallback, useEffect, useState } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const PAGE_T_OFFSET = 400;

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = useCallback(() => {
    if (!showScroll && window.pageYOffset > PAGE_T_OFFSET) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= PAGE_T_OFFSET) {
      setShowScroll(false);
    }
  }, [showScroll]);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
  }, [checkScrollTop]);

  const scrollTop = () => {
    if (window) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <FaArrowCircleUp
      onClick={scrollTop}
      className="scroll-arrow"
      style={{ display: showScroll ? 'flex' : 'none' }}
    />
  );
};
