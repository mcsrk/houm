import { useEffect } from "react";

/**
 * @description
 * @param {Number} num
 * @returns {String}
 */
export const padTo2Digits = (num) => {
  return num.toString().padStart(2, "0");
};

/**
 * @description
 * @param {Number} milliseconds
 * @returns {String}
 */
export const convertMsToMinSec = (milliseconds) => {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.round((milliseconds % 60000) / 1000);
  return seconds === 60
    ? `${minutes + 1}:00`
    : `${minutes}:${padTo2Digits(seconds)}`;
};

/**
 * @description
 * @param {Function} effect
 * @param {Array} deps
 * @param {Number} delay
 * @returns Void
 */
export const useDebouncedEffect = (effect, deps, delay) => {
  useEffect(() => {
    const handler = setTimeout(() => effect(), delay);
    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...(deps || []), delay]);
};
