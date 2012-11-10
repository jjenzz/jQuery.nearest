/*!
 * jQuery nearest
 * Example at: http://jsbin.com/jquery_nearest/5
 * Copyright (c) 2012 J. Smith (@jjenzz)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
(function($) {
  $.fn.nearest = function(selector) {
    var nearest, el, p,
        hasQsa = document.querySelectorAll;

    function update(el) {
      nearest = nearest ? nearest.add(el) : el;
    }

    this.each(function() {
      var self = this;

      $.each(selector.split(','), function() {
        var s = $.trim(this);

        if (!s.indexOf('#')) {
          // is an ID selector
          // so do a regular
          // $(id) selection
          update($(s));
        } else {
          // is a class or tag
          // selector so need to
          // traverse
          p = self.parentNode;
          while (p) {
            el = hasQsa ? $(p.querySelectorAll(s)) : $(p).find(s);
            update(el);
            if (el.length) break;
            p = p.parentNode;
          }
        }
      });

    });

    return nearest;
  };
}(jQuery));