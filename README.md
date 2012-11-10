jQuery.nearest
==============

What is this?
-------------
`.nearest(selector)` allows you to find the nearest element matching selector without relying on DOM structure.

No more `.parent().parent().find(selector)` or `.prev()` or `.siblings(selector)`! If you don't know or don't want to assume __where__ the element you are trying to select is likely to be, then `.nearest()` can help.


But what about .closest() and parents()?
--------------------------
Both of these methods only allow you to select parents (either the closest __parent__ or all of it's __parents__), however, `.nearest()` will allow you to select the closest __element__.

Replace `.nearest()` with `.closest()` at the example URL to see it break!

How do I use it?
----------------
    $('.foo').nearest('.bar');

A more practical use case would be:

    $('.foo').on('click', function() {
        $(this).nearest('.bar').css('background', 'red');
    });