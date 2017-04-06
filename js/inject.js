'use strict';

var tracker = document.getElementById('percent-scroll-tracker');
if (tracker === null) {
    try {
        tracker = document.createElement('div');
        tracker.setAttribute('id', 'percent-scroll-tracker');
        tracker.setPercentage = function() {
            tracker.innerHTML  = Math.round(100 * (window.pageYOffset + window.innerHeight) / document.body.scrollHeight);
        };
        tracker.setPercentage(tracker);
        document.body.appendChild(tracker);
        window.addEventListener('scroll', tracker.setPercentage, true);
        window.addEventListener('resize', tracker.setPercentage, true);
    }
    catch (err) {
        console.err('Failed to load percent-scroll widget:', err.message);
    }
}
else {
    if (tracker.hasOwnProperty('setPercentage')){
        window.removeEventListener('scroll', tracker.setPercentage);
        window.removeEventListener('resize', tracker.setPercentage);
    }
    tracker.remove();
}
