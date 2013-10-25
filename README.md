JS, CSS and Image Feature Detection
===================================

JavaScript that detects JS, CSS and Images in the user's browser

On page load, tests are made for each feature and classes added to the html element.

##Download
Version 1.0 [source](js-css-image-feature-detection-1.0.src.js), [minified](js-css-image-feature-detection-1.0.js)

##Usage
Add a no-js class to the html element:
```
<html class="no-js">
```
Add the script (nearer the top the better):
```
<script src="js-css-image-feature-detection-1.0.js"></script>
```
Script and style stuff based on the detected features:
```
<html class="js css images datauri">
```

##Notes
The script's focus was to provide image detection as immediately as possible without the need insert an image 
into the DOM, wait on images loading or produce extra http requests.

The script is just your regular JavaScript and relies on no other scripts or frameworks.

##How it works
Most browsers I tested fire the onload or onerror events when images are on, and don't when images are off. And this is the starting point for the image detection used in this script.

I used the DataURI scheme to load a 1 pixel transparent image for browsers that support it, avoiding http requests, and for those that don't the onerror event is fired.

Beyond that it was about accommodating browsers that fall outside the norm.
    
##Browser Compatibility
Yes means works as expected

* Desktop
    * Chrome
        * 30
            * JS: Yes
            * CSS: Couldn't find the CSS off switch, but assume would work as Safari works
            * Images: Yes
            * DataURI: Yes
    * Firefox
        * 24
            * JS: Yes
            * CSS: Yes
            * Images: Yes. Note that turning off images in Firefox turns off images loaded via URL so dataURI images still show, there is a <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=331257">bug report</a>
            * DataURI: Yes
        * 3.6
            * JS: Yes
            * CSS: Yes
            * Images: Couldn't find on/off
            * DataURI: Yes
    * IE
        * 10 (and 7, 8 and 9 with Developer Toolbar)
            * JS: Yes
            * CSS: Yes
            * Images: Yes
            * DataURI: Yes
        * 6, 7
            * JS: Yes
            * CSS: Yes
            * Images: Yes
            * DataURI: Yes (not supported in browser)
    * Opera
        * 17
            * JS: Yes
            * CSS: Couldn't find the CSS off switch, but as Opera is now Webkit I assume would work as Safari works
            * Images: Yes
            * DataURI: Yes
        * 12.14, 11.64, 10.63
            * JS: Yes
            * CSS: Yes
            * Images: Yes
            * DataURI: ?
    * Safari
        * 6
            * JS: Yes
            * CSS: Yes
            * Images: Yes
            * DataURI: Yes
* Mobile
    * Android Browser
        * 2.3.5, 4.1.2
            * JS: Yes
            * CSS: Couldn't find the CSS off switch
            * Images: Yes
            * DataURI: Yes
    * Opera Mini
        * 7 (online Simulator)
            * JS: Couldn't find on/off
            * CSS: Couldn't find on/off
            * Images: No. When images are off, images on is indicated. Caused by the onload event being called when images are on and off
            * DataURI: Yes
    * Opera Mobile
        * 12 (emulator)
            * JS: Couldn't find on/off
            * CSS: Couldn't find on/off
            * Images: Yes
            * DataURI: Yes
    * Safari
        * 7 (simulator)
            * JS: Yes
            * CSS: Couldn't find on/off
            * Images: Couldn't find on/off
            * DataURI: Yes


##Thanks
* [Image check by Steve Faulkner](http://www.html5accessibility.com/tests/imagecheck.html)
* [Get Styles by PPK](http://www.quirksmode.org/dom/getstyles.html)
* [Base64 single pixel](http://css-tricks.com/snippets/html/base64-encode-of-1x1px-transparent-gif/)
* [CSS Data URIs in all browsers, very nice!](http://jonraasch.com/blog/css-data-uris-in-all-browsers)
* [Can I Use DataURI](http://caniuse.com/datauri)

Three men walk into a bar, one falls over, a monkey swings triumphantly
