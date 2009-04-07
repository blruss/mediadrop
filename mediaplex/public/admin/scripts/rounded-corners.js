/**
 * Insert class="rounded" for each table and wrap tables in:
 *
 *	<div class="rounded-top-beige">
 *		<div class="rounded-top-left"></div>
 *		<div class="rounded-top-right"></div>
 *	</div>
 *		
 *(if table has tfoot chooses beige)
 *	<div class="rounded-bottom-white">
 *		<div class="rounded-bottom-left"></div>
 *		<div class="rounded-bottom-right"></div>
 *	</div>
*/
var RoundedCorners = new Class({
	initialize: function() {
		$$('table').each(function(t) {
			t.addClass('rounded-table');
			var topDiv = new Element('div',{'class':'rounded-top-beige'});
			var topLDiv = new Element('div',{ 'class':'rounded-top-left'});
			var topRDiv = new Element('div',{'class':'rounded-top-right'});
			var bottomClass = 'rounded-bottom-beige';
			if(t.getChildren('tfoot').length == 0) {
				var trs = t.getChildren('tbody')[0].getChildren('tr');
				var lastTr = trs[trs.length - 1];
				bottomClass = lastTr.hasClass('tr-gray') ? 'rounded-bottom-gray' : 'rounded-bottom-white';
			}
			var bottomDiv = new Element('div',{'class':bottomClass});
			var bottomLDiv = new Element('div',{'class':'rounded-bottom-left'});
			var bottomRDiv = new Element('div',{'class':'rounded-bottom-right'});

			topDiv.inject(t, 'before');
			bottomDiv.inject(t, 'after');
			topLDiv.inject(topDiv);
			topRDiv.inject(topDiv);
			bottomLDiv.inject(bottomDiv);
			bottomRDiv.inject(bottomDiv);
		});
	}
});
window.addEvent('domready', function(){var rc = new RoundedCorners();});
