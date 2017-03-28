(function(){

	// constructor
	var wedding = function(container, options)
	{
		var wedding_instance = this;

		var defaultOptions = {
			trigger: 'a',
			slideTime: '.5s'
		};

		this.options = options; 

		if(typeof container == 'object'){
			this.container = container;
		}else if(typeof container == 'string'){
			this.container = $(container);
		}

		this.imageList = [];

		this.container.find(this.options.trigger).each(function(i,e)
		{
			if(e.hasAttribute('href'))
			{
				wedding_instance.imageList.push($(e).attr('href'));
			} 
			else 
			{
				wedding_instance.imageList.push($(e).data('image'));
			}
			
		});	

		

		this.container.find(this.options.trigger).click(function(event)
		{
			var clicked_element = this;

			event.preventDefault();
			wedding_instance.bootstrap();

			setTimeout(function()
			{
				wedding_instance.goToIndex($(clicked_element).index());

				$('.wedding__wrap .wedding__next').click(function(){
					wedding_instance.goToIndex(wedding_instance.activeIndex + 1);
				});

				$('.wedding__wrap .wedding__previous').click(function(){
					wedding_instance.goToIndex(wedding_instance.activeIndex - 1);
				});

				$('.wedding__wrap .wedding__close').click(function(){
					$('.wedding__wrap').remove();
					$('body').css('overflow','auto');
				});

			},100);
			
		});			

	}
	
	wedding.prototype.bootstrap = function()
	{
		var html = '<div class="wedding__wrap">';
		html+=         '<span class="wedding__next"></span>';
		html+=         '<span class="wedding__previous"></span>';
		html+=		   '<span class="wedding__close">&times;</span>';
		html+=     '</div>';

			
		$('body').css('overflow','hidden').append(html);
	}

	wedding.prototype.goToIndex = function(index)
	{
		
		if(index < 0)
		{
			index = this.imageList.length-1;
		} 
		else if(index >= this.imageList.length)
		{
			index = 0;
		}

		this.activeIndex = index;
		$('.wedding__wrap').css('background-image','url('+ this.imageList[index] +')');
	}

	//export
	window.wedding = wedding;

})();