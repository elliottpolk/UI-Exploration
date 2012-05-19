/* Author:

*/

var tr = 0,
	clicked = undefined,
	lorem = '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In condimentum, orci ac hendrerit fermentum, augue sapien convallis velit, non semper sem ante sed dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aenean eget lacus purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut neque lectus. Suspendisse potenti. Proin eget dui mi, ac tincidunt mauris. Cras laoreet accumsan tempus. Quisque turpis nulla, malesuada in congue a, elementum porttitor urna. Integer volutpat tristique neque, vitae adipiscing est interdum quis. In bibendum ipsum non nisi consectetur varius. Cras libero nunc, auctor at porta ac, interdum nec elit. Vestibulum imperdiet vehicula mauris ac iaculis. Nunc vitae tellus luctus urna eleifend pellentesque ut nec neque In at nulla vel elit suscipit viverra. </p>';
lorem += '<p>Integer semper fermentum dapibus. Quisque molestie pharetra felis, ac dapibus urna imperdiet at. Praesent vel dignissim augue. In eleifend nunc ac ipsum adipiscing et ultricies nunc rutrum. Nam sagittis dictum eros, eget posuere odio volutpat a. Nulla facilisi. Nullam lobortis justo et risus mollis viverra id quis nisl. Sed posuere tortor laoreet turpis iaculis imperdiet. Etiam ultrices leo at est lobortis commodo. Praesent justo enim, pretium ac tristique ut, aliquet in lacus. Donec tempor ante purus. </p>';
lorem += '<p>Morbi pulvinar ipsum at sapien vulputate ut porttitor justo mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris libero tellus, laoreet nec volutpat gravida, tincidunt id nisl. Donec nulla orci, vestibulum eget rutrum in, convallis vitae lorem. Praesent id ornare elit. Donec pulvinar metus ut purus mollis nec luctus felis faucibus. Suspendisse malesuada tincidunt dapibus. Sed id lorem purus. Duis eget ipsum felis, vel eleifend elit. Etiam enim leo, consectetur et suscipit ac, dictum id neque. Nullam pharetra purus accumsan mauris bibendum fringilla. Sed pharetra ipsum nec nisi laoreet rhoncus quis venenatis urna. Vivamus ac risus neque.</p>';
lorem += '<p>Duis eu varius arcu. Aliquam ut mauris tortor, eu sodales lectus. Nunc lacus magna, porttitor a malesuada et, tincidunt at felis. Praesent tempus cursus sollicitudin. Vivamus sed accumsan elit. Quisque eget hendrerit libero. Nullam euismod erat nisl.</p>';
lorem += '<p>Curabitur nec aliquam diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id mauris tellus. Proin varius volutpat nisl non ullamcorper. Quisque lectus sapien, auctor eget tristique ut, sodales vel felis. Quisque risus massa, mollis quis feugiat at, pretium in augue. Aenean convallis leo lacus. Nam fringilla neque in odio tempus consequat. Maecenas eu pellentesque mi. Proin a mauris sed urna interdum consectetur. Nam dictum dignissim eros ac sollicitudin. Phasellus sit amet neque massa.</p>';
lorem += '<p>Etiam bibendum lorem eget eros malesuada laoreet. Mauris faucibus blandit tellus, eget luctus metus tempus a. Donec placerat scelerisque risus at gravida. Nunc egestas, leo non vehicula semper, metus mauris feugiat nibh, at bibendum ligula enim et augue. Donec eu eleifend lectus. Pellentesque malesuada tortor quis turpis vulputate hendrerit. Donec nisi risus, elementum eu ornare in, elementum et dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla vitae mauris felis. In id risus luctus urna dignissim blandit. Aenean vel neque ante, eget rhoncus felis. Nam eget nisi arcu.</p>';
lorem += '<p>Proin imperdiet diam quis ligula accumsan condimentum. Suspendisse imperdiet feugiat velit, sed facilisis nisi congue auctor. Vestibulum tincidunt semper tellus id viverra. Donec eget urna eu lectus volutpat hendrerit. Vivamus ante felis, fermentum sit amet porttitor et, faucibus sit amet odio. Integer iaculis molestie libero at euismod. Cras aliquam, magna in tempor commodo, ipsum velit feugiat enim, vel dignissim urna dolor eget tellus. Duis orci velit, congue a rutrum eget, accumsan nec sem. Morbi adipiscing tempor lacus vitae iaculis. Cras sit amet turpis diam.</p>';
lorem += '<p>Ut ac sodales massa. Nulla placerat facilisis dui non porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla fringilla fermentum rhoncus. Nulla id faucibus eros. Sed sed turpis ipsum, vitae bibendum diam. Etiam pharetra feugiat metus at rhoncus. Cras pretium, leo pretium tincidunt ullamcorper, nisl neque hendrerit turpis, eget dapibus mi metus quis sem. Proin pulvinar, lectus ac dapibus sagittis, enim lacus commodo est, et blandit quam lorem a tortor. Nullam sit amet facilisis erat. Aenean vitae est vel quam cursus tempus. Sed ac consectetur purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu sapien tincidunt nunc malesuada laoreet quis nec ipsum. Nulla at urna ante. Sed iaculis lorem id urna viverra at pellentesque quam mollis. Sed sit amet nibh ante, et accumsan massa. Integer arcu velit, facilisis id sagittis eu, tristique eget ligula. Aenean eu sapien eu tellus faucibus porta. Morbi imperdiet vulputate sagittis. Maecenas mollis sem nec dolor pharetra nec tristique metus hendrerit. Integer malesuada congue quam, ut accumsan mauris feugiat sed. Ut vel magna libero, eu imperdiet risus. In quis magna elit, in mollis lorem. Morbi euismod, turpis eget porta dapibus, tortor lectus viverra purus, at pharetra odio leo in nulla. Praesent id libero tellus. Nam consequat, purus vitae viverra venenatis, nisl sapien vestibulum ligula, ut venenatis orci orci vitae nisi. Curabitur gravida nibh ac augue consectetur a tincidunt augue vulputate. Nullam ultrices posuere velit, quis commodo nisi dapibus quis. Integer eleifend justo ut mi iaculis viverra. Vestibulum erat dui, auctor ac feugiat quis, congue at erat. Phasellus posuere porta rhoncus. Cras id odio augue. Sed vitae diam nunc, sed tempus ligula. Nam in pretium magna. Phasellus in justo quis mauris congue commodo. Maecenas erat enim, pellentesque sit amet adipiscing nec, lobortis non lorem. Vestibulum at eros eget sem hendrerit tempor vitae non nibh. Sed eu mauris enim, quis volutpat metus.</p>';


$(document).ready(function() {
	$('nav > ul > li').on('click', function(evt) {
		tr = 0,	// reset the transition flag on each click
		clicked = this;
		$('div[role="main"]').html('');	// clear old 'content'

		var clist = $('<div class="content-items"></div>');
		$('div[role="main"]').append(clist);
		for(var i = 1; i <= 10; i++) {
			var _li = $('<div class="content-item"></div>');
			$(_li).attr('id', 'lorem'+i);
			$(_li).html('Lorem ipsum dolor sit amet '+i);
			$(clist).append(_li);

			$(_li).on('click', function() {
				var _this = this;
				$(_this).addClass('selected');

				$('.content-item').each(function() {
					if(this != _this) {
						$(this).animate({
							opacity: 0
						}, 200, function() { transToContent(_this); });
					}
				});
			});
		}
	});
});



var transToContent = function(obj) {
	if(!tr) {
		var offset = $(obj).offset(),
			transTime = offset.top;

		$(obj).css({
			top: offset.top,
			left: offset.left,
			position: 'absolute'
		});

		$('.content-item').each(function() {
			if(this != obj) $(this).remove();
		});

		offset = $('.content-items').offset();
		$(obj).removeClass('selected')
				.removeClass('content-item')
				.addClass('title');
		$(obj).animate({
			top: '0px',
			left: offset.left,
			width: '980px'
		}, transTime, function() {
			var _offset = $(obj).offset();
			$('body').animate({scrollTop: _offset.top}, 400);

			var container = $('<div class="content-container"></div>');
			$('div[role="main"]').append(container);
			$(container).html(lorem);
			$(container).show(30);

			// add close and edit buttons
			var actions = $('<div id="action-btns"></div>'),
				pos = $('<li id="pos-action">edit</li>'),
				neg = $('<li id="neg-action">close</li>');

			$('footer').append(actions);
			$(actions).append($('<ul></ul>')
				.append(pos)
				.append(neg));

			$(pos).on('click', editClick);
			$(neg).on('click', closeClick);
		});
		tr=!0;
	}
};


var editClick = function() {
	var _pos = $('#pos-action'),
		_neg = $('#neg-action'),
		_container = $('.content-container'),
		oldTxt = $(_container).html();

	$(_container)
		.attr('contenteditable', 'true')
		.click()
		.focus();

	$(_pos).unbind('click');
	$(_pos).on('click', function() {
		$(_container).attr('contenteditable', 'false');

		$(_pos).unbind('click');
		$(_pos).on('click', editClick);
		$(_pos).html('edit');

		$(_neg).unbind('click');
		$(_neg).on('click', closeClick);
		$(_neg).html('close');
	});
	$(_pos).html('save');

	$(_neg).unbind('click');
	$(_neg).on('click', function() {
		$(_container).html(oldTxt);
		$(_container).attr('contenteditable', 'false');
	
		$(_neg).unbind('click');
		$(_neg).on('click', closeClick);
		$(_neg).html('close');

		$(_pos).unbind('click');
		$(_pos).on('click', editClick);
		$(_pos).html('edit');
	});
	$(_neg).html('cancel');
};

var closeClick = function() {
	$('#action-btns').remove();
	$(clicked).click();
}

















