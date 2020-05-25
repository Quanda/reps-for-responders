import ReactGA from 'react-ga';

/**
 * A wrapper around the ga('create', ...) call.
 * Initializes google analytics.
 * @param {String} trackingId
 * @param {Object} options
 */
export const initialize = (trackingId, options = {}) => (
  ReactGA.initialize(trackingId, {
    ...options,
    testMode: process.env.NODE_ENV === 'development' ? true : false,
    gaOptions: {
      siteSpeedSampleRate: 100,
    },
  })
);
