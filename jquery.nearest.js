/*!
 * jQuery nearest
 * Example at: http://jsbin.com/jquery_nearest
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * $('.foo').nearest('.bar');
 * $('.foo').nearest('p');
 */
(function($) {
  $.fn.nearest = function(selector) {
    var nearest,
        parent = this[0] ? this[0].parentNode : 0,
        hasQsa = parent && parent.querySelectorAll;
    while (parent) {
      nearest = hasQsa ?
        parent.querySelectorAll(selector) : $(parent).find(selector);
      if (nearest.length) break;
      parent = parent.parentNode;
    }
    return $(nearest);
  };
}(jQuery));