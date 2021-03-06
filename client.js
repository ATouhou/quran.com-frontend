/*global document, window, $ */
require('babel/polyfill');

import React from 'react';
import debug from 'debug';
import app from './app';
import reactCookie from 'react-cookie';

const debugClient = debug('quran-com');
const dehydratedState = window.App; // Sent from the server

// expose debug object to browser, so that it can be enabled/disabled from browser:
// https://github.com/visionmedia/debug#browser-support
window.fluxibleDebug = debug;
window.React = React; // For chrome dev tool support
window.clearCookies = function() {
  reactCookie.remove('quran');
  reactCookie.remove('content');
  reactCookie.remove('audio');
  reactCookie.remove('isFirstTime');
};

// Init tooltip
if (typeof window !== 'undefined') {
  $(function () {
    $(document.body).tooltip({
      selector: '[data-toggle="tooltip"]',
      animation: false
    });
  });
}

debugClient('rehydrating app');
// pass in the dehydrated server state from server.js
app.rehydrate(dehydratedState, function (err, context) {
  if (err) {
    throw err;
  }
  window.context = context;
  const mountNode = document.getElementById('app');

  debugClient('React Rendering');
  React.render(context.createElement(), mountNode, function () {
    debugClient('React Rendered');
  });
});
