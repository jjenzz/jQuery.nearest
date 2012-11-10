/*!
 * jQuery nearest
 * Example at: http://jsbin.com/jquery_nearest
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
  $.fn.nearest = function(selector) {
    var nearest, parent, el,
        hasQsa = document.querySelectorAll;

    this.each(function() {
      parent = this.parentNode;

      while (parent) {
        el = hasQsa ?
          $(parent.querySelectorAll(selector)) : $(parent).find(selector);
        if (el.length) {
          nearest = nearest ? nearest.add(el) : el;
          break;
        }
        parent = parent.parentNode;
      }
    });

    return nearest;
  };
}(jQuery));