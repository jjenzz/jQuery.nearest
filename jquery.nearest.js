/*!------------------------------------------------------
 * jQuery nearest
 * http://github.com/jjenzz/jQuery.nearest
 * ------------------------------------------------------
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($, d) {
  $.fn.nearest = function(selector) {
    var self, nearest, el, s, p,
        hasQsa = d.querySelectorAll;

    function update(el) {
      nearest = nearest ? nearest.add(el) : $(el);
    }

    this.each(function() {
      self = this;

      $.each(selector.split(','), function() {
        s = $.trim(this);

        if (!s.indexOf('#')) {
          // is an ID selector so do
          // a regular $(id) query
          update(d.getElementById(s));
        } else {
          // is a class or tag selector
          // so need to traverse
          p = self.parentNode;
          while (p) {
            el = hasQsa ? p.querySelectorAll(s) : $(p).find(s);
            if (el.length) {
              update(el);
              break;
            }
            p = p.parentNode;
          }
        }
      });

    });

    return nearest;
  };
}(jQuery, document));