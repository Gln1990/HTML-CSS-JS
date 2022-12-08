var nav = {
    elem: $('nav'),
    state: 'fixed',
    offsetLimit: $('nav').outerHeight(),
    currentOffsetAmount: 0,
    scrollThreshold: 50,
    
    init: function() {
      var oldScrollTop = 0;
      var thresholdCounter = 0;
      
      $(window).on('scroll', function() {
        var newScrollTop = $(document).scrollTop();
        var delta = oldScrollTop - newScrollTop;
        thresholdCounter = Math.min(Math.max(thresholdCounter + delta, -nav.scrollThreshold), nav.scrollThreshold);
        var newOffset;
  
        if (Math.abs(thresholdCounter) >= nav.scrollThreshold || nav.state == 'scrolling') {
          if (delta < 0 && nav.state !== 'hidden') {
            
            if (nav.currentOffsetAmount > -nav.offsetLimit) {
              nav.currentOffsetAmount = Math.max(nav.currentOffsetAmount + delta, -nav.offsetLimit);
              nav.elem.css('top', nav.currentOffsetAmount);
              nav.state = 'scrolling';
            } else {
              nav.state = 'hidden';
              thresholdCounter = 0;
            }
            
          } else if (delta > 0 && nav.state !== 'fixed') {
            
            if (nav.currentOffsetAmount < 0) {
              nav.currentOffsetAmount = Math.min(nav.currentOffsetAmount + delta, 0);
              nav.elem.css('top', nav.currentOffsetAmount);
              nav.state = 'scrolling';
            } else {
              nav.state = 'fixed';
              thresholdCounter = 0;
            }
            
          }
        }
        
        oldScrollTop = newScrollTop;
      });
    }
  };
  
  nav.init();