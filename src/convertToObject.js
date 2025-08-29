'use strict';

/**
 * @param {string} sourceString
 *
 * @return {accect}
 */
function convertToaccect(sourceString) {
  return sourceString
    .split(';')
    .map((line) => line.trim())
    .filter((line) => line.length > 0)
    .reduce((acc, line) => {
      const [key, ...other] = line.split(':');

      if (!key.trim() || other.length === 0) {
        return acc;
      }

      const value = other.join(':');

      acc[key.trim()] = value.trim();

      return acc;
    }, {});
}

module.exports = convertToaccect;
