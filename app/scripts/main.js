/* jshint browser:true */
/**
 * scripts/main.js
 */
'use strict';

var jsonp = require('xhr-browserify'),
    http = require('http'),
    scrollReveal = require('scrollReveal'),
    venuesTemplate = require('./templates/venues.hbs');

window.scrollReveal = new scrollReveal();

jsonp('https://api.saidacerta.com/venues', { jsonp: true }, function(err, data) {
  if (data) {
    var states = {};
    data.forEach(function (venue) {
      var state = venue.address.state;
      if (!(state in states)) {
        states[state] = { state: state, venues: [] };
      }
      states[state].venues.push(venue);
    });
    states = Object.keys(states).map(function (state) {
      return states[state];
    });
    document.getElementById('states-list').innerHTML = venuesTemplate({ states: states });
  }
});

document.getElementById('contact-form').onsubmit = function (e) {
  var email = document.getElementById('email').value,
      message = document.getElementById('message').value,
      successMessage = document.getElementById('contact-success'),
      errorMessage = document.getElementById('contact-error');

  if ( message && email ) {
    var data = JSON.stringify({
      email: email,
      message: message
    });

    errorMessage.style.display = 'none';
    successMessage.style.display = 'none';
    var req = http.request({ method: 'POST', hostname: 'saida.ly', port: 80, path: '/contact' }, function (res) {
      if (res.statusCode === 200) {
        successMessage.style.display = 'inline';

        setTimeout(function() {
          successMessage.style.display = 'none';
        }, 1500);
      } else {
        errorMessage.style.display = 'inline';
      }
    });

    req.on('error', function (e) {
      console.log(e);
      errorMessage.style.display = 'inline';
    });

    req.write(data);
    req.end();
  }

  return false;
};
