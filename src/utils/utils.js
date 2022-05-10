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

/**
 * @description
 * @param {Array} artists
 * @returns {Array}
 */
export const renderArtists = (artists) =>
  artists?.map((creator, i, arr) => {
    const uri = creator?.uri;
    const name = creator?.profile?.name;
    return (
      <div
        key={"creator-last" + uri}
        className="cursor-pointer hover:underline"
        onClick={() => window.location.replace(uri)}
      >
        {name}
        {i !== arr.length - 1 ? "," : ""}
      </div>
    );
  });

/**
 * @description
 * @param {Array} covers
 * @returns {Object}
 */
export const getSmallestAlbumImage = (covers) =>
  covers?.reduce((smallest, image) => {
    if (image.height < smallest.height) return image;
    return smallest;
  }, covers[0]);

/**
 * @description
 * @param {Array} covers
 * @returns {Object}
 */
export const getBiggestAlbumImage = (covers) =>
  covers?.reduce((biggest, image) => {
    if (image.height > biggest.height) return image;
    return biggest;
  }, covers[0]);
