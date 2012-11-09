jQuery.nearest
==============

What is this?
-------------
no more `.parent().parent().find()` or `.prev()` or `.siblings()`!

`$(selector).nearest()` allows you to find the nearest element matching selector without relying on DOM structure.

But what about .closest() and parents()?
--------------------------
Both of these methods only allow you to select parents, either the closest __parent__ or all of it's __parents__. `.nearest()` will allow you to select the closest __element__. It could be next to your element or the elememts parent or a child of it's parents parent. You don't need to know __where__ the element is likely to be in order to select it which completely removes the reliance on DOM structure.

Replace `.nearest()` with `.closest()` at the example URL to see it break!

How do I use it?
----------------
Simple...

    $(selector).nearest(selector);

e.g.

    $('.foo').nearest('.bar');