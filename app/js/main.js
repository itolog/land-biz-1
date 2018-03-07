$(document).ready(function() {
	$('#fullpage').fullpage({
		//Navigation
		// menu: '#menu',
		lockAnchors: false,
		anchors:['firstPage', 'about', 'Our_values', 'fourthPage'],
		menu: '#myMenu',
		navigation: false,
		navigationPosition: 'right',
		navigationTooltips: ['firstPage', 'about', 'Our_values', 'fourthPage'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'bottom',

		//Scrolling
		css3: true,
		scrollingSpeed: 700,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease-in',
		loopBottom: false,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: true,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: true,
		verticalCentered: true,
		sectionsColor : [],
		// paddingTop: '3em',
		// paddingBottom: '10px',
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){
			let that = $(this);
			if(anchorLink == 'firstPage'){
			$('.page-1__content__title').addClass('fadeIn');
			$('.page-1__content__text').addClass('fadeIn');
			$('.page-1__content__border').addClass('fadeIn');
			$('.page-1__action__li').addClass('fadeIn');
			// anim cristals
			$('.cris1').css({
				'transform': 'translate3d(200px, 20px, 0)',
				'transition': '4s'
			});
			$('.cris2').css({
				'transform': 'translate3d(200px, -170px, 0)',
				'transition': '4s'
			});
			// 
			}
			// about
			if(anchorLink == 'about'){
			$('.page-2__content__text').addClass('animated tada');
			}
			// Vslues
			if(anchorLink == 'Our_values'){
				const p = $('.page-3__li');
				p.css('opacity', 0);
				p.addClass('zoomInUp').css('opacity', 1);
				}
		},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});
});