jQuery.nearest
==============

no more .parent().parent().find() or .prev() or .siblings()!

$(selector).nearest() allows you to find the nearest element matching selector without relying on DOM structure.

But what about .closest() I hear you say?
-----------------------------------------
.closest() only allows you to select the closest __parent__ matching selector and not the closest __element__. Replace .nearest() with .closest() at the example URL to see it break!