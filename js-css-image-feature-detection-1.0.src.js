/* JS CSS and Image Feature Detection
// Dave Smith, github.com/davesmith, 2013 October 19
*/

(function() {

    'use strict';

    var scripts = document.getElementsByTagName('script')
        ,script = scripts[scripts.length - 1]
        ,overflowAuto = 'auto'
        ,overflowActual
        ,img = new Image()
        ,img2 = new Image()
        ,images = false
        ,documentElement = document.documentElement
        
        // Variables to make code smaller when minified
        ,ClassName = 'className'
        ,imagesClass = ' images'
        ;
    
    
    
    // CSS
    
    // Set a script element with an overflow of 'auto'
    script.style.overflow = overflowAuto;
    
    // Get the actual overflow applied (feature detecting currentStyle first because of Opera 10.63, which ok'd document.defaultView.getComputedStyle but failed
    overflowActual = (script.currentStyle) ? script.currentStyle.overflow : document.defaultView.getComputedStyle(script,null).getPropertyValue('overflow');
    
	// CSS is on if the set and actual values are the same
	if (overflowActual === overflowAuto) {
    	documentElement[ClassName] = documentElement[ClassName] + ' css';
	}
	
    
    
    // Images and DataURI
    
    // img.onload is run immediately for browsers that support DataURI
    img.onload = function() {
    
        // Images on: Firefox, Chrome, IE 8+, Opera Mini
        // Images off: Firefox, Opera Mini
        documentElement[ClassName] = documentElement[ClassName] + ' datauri';
        
        // Accommodating Firefox
        // The option in Firefox is to disable images loaded via URL hence this workaround
        // Firefox detection: http://stackoverflow.com/questions/9847580/how-to-detect-safari-chrome-ie-firefox-and-opera-browser/9851769#9851769
        var isFirefox = window.InstallTrigger !== undefined;
        if (isFirefox) {
        
            img2.onerror = function() {
                // When images are off this is run immediately
                images = 'off';
            };
            
            // Make the src that of the current page which is already loaded and cached
            img2.src = window.location.href + '#' + new Date();
            // Added # new Date() after in Firefox images were indicated falsely as disabled
            // After this change I no longer saw the issue
            
            setTimeout(function() {
                if (images === false) {
                    documentElement[ClassName] = documentElement[ClassName] + imagesClass;
                }
            },1);
            
        }
        else {
            if (this.width !== 0) {
                documentElement[ClassName] = documentElement[ClassName] + imagesClass;
                // Opera Mini on the simulator seems to get here for
                // both images on and off
            }                
        }
    };
    
    img.onerror = function() {
        // Images on: IE 7-
        // Images off: No known browser
        documentElement[ClassName] = documentElement[ClassName] + imagesClass;
    };

    
    // Try a 1 pixel transparent DataURI image
    img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
	
	
	
	// JS
    documentElement[ClassName] = documentElement[ClassName].replace(/\bno-js\b/g, 'js');


    
}());