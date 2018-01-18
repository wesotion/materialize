var materializeStrict=function(t){function e(i){if(n[i])return n[i].exports;var o=n[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};return e.m=t,e.c=n,e.d=function(t,n,i){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=13)}([function(t,e){t.exports=$},function(t,e,n){"use strict";var i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(){this.targets=[],this.index={}}return t.prototype.bind=function(t,e,n,i){void 0===i&&(i=!1);var o=this.targets.indexOf(t);-1===o&&(o=this.targets.push(t)-1);var s;this.index[o]?s=this.index[o]:(s={},this.index[o]=s),s[e]={capture:i,handler:n},t.addEventListener(e,n,i)},t.prototype.clearAll=function(){try{for(var t=i(this.targets),e=t.next();!e.done;e=t.next()){var n=e.value;this.clear(n)}}catch(t){o={error:t}}finally{try{e&&!e.done&&(s=t.return)&&s.call(t)}finally{if(o)throw o.error}}var o,s},t.prototype.clear=function(t){void 0===t&&(t=null);var e=this.targets.indexOf(t);if(e>-1){var n=this.index[e];for(var i in n)if(n.hasOwnProperty(i)){var o=n[i];t.removeEventListener(i,o.handler,o.capture)}}},t}();e.default=o},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(0),o=n(1),s=function(){function t(t){t.cash?this.element=t.get(0):this.element=t,this.$element=i(this.element),this.boundElements=new o.default,this.setInstance(this)}return t.prototype.getIdFromTrigger=function(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href"),e=e?e.slice(1):""),e},t.prototype.getDocumentScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},t}();e.default=s},function(t,e){t.exports=anime},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(5),n(7),function(t){for(var n in t)e.hasOwnProperty(n)||(e[n]=t[n])}(n(8)),n(10),n(11),n(12)},function(t,e,n){"use strict";var i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=n(6),r=function(){function t(e,n){e.cash?this.element=e.get(0):this.element=e,this.element.autocompleteInstance&&this.element.autocompleteInstance.destroy(),this.$element=o(this.element),this.element.autocompleteInstance=this,this.options=o.extend({},t.defaults,n),this.open=!1,this.activeIndex=-1,this.$inputField=this.$element.closest(".input-field"),this.setupDropdown(),this.setupEventHandlers()}return t.init=function(e,n){var o=[];if(n)try{for(var s=i(e),r=s.next();!r.done;r=s.next()){var a=r.value;o.push(new t(a,n))}}catch(t){c={error:t}}finally{try{r&&!r.done&&(d=s.return)&&d.call(s)}finally{if(c)throw c.error}}else try{for(var l=i(e),h=l.next();!h.done;h=l.next()){var a=h.value;o.push(a.autocompleteInstance)}}catch(t){u={error:t}}finally{try{h&&!h.done&&(p=l.return)&&p.call(l)}finally{if(u)throw u.error}}return o;var c,d,u,p},t.prototype.isOpen=function(){return this.open},t.prototype.destroy=function(){this.removeEventHandlers(),this.removeDropdown(),this.element.autocompleteInstance=void 0},t.prototype.updateData=function(t){if(this.options.data=t,this.open){var e=this.$element.val().toLowerCase();this.renderDropdown(e)}},t.prototype.setupEventHandlers=function(){this.element.addEventListener("blur",this.handleInputBlur.bind(this)),this.element.addEventListener("keyup",this.handleInputKeyupAndFocus.bind(this)),this.element.addEventListener("focus",this.handleInputKeyupAndFocus.bind(this)),this.element.addEventListener("keydown",this.handleInputKeydown.bind(this)),this.container.addEventListener("mouseclick",this.handleContainerMouseClick.bind(this))},t.prototype.removeEventHandlers=function(){this.element.removeEventListener("blur",this.handleInputBlur.bind(this)),this.element.removeEventListener("keyup",this.handleInputKeyupAndFocus.bind(this)),this.element.removeEventListener("focus",this.handleInputKeyupAndFocus.bind(this)),this.element.removeEventListener("keydown",this.handleInputKeydown.bind(this)),this.container.removeEventListener("mouseclick",this.handleContainerMouseClick.bind(this))},t.prototype.setupDropdown=function(){this.container=document.createElement("ul"),o(this.container).addClass("autocomplete-content dropdown-content"),this.$inputField.append(this.container)},t.prototype.removeDropdown=function(){this.container.parentNode.removeChild(this.container)},t.prototype.handleInputBlur=function(){this.removeAutocomplete(),this.open=!1},t.prototype.handleInputKeyupAndFocus=function(t){var e=t.key,n=this.$element.val().toLowerCase();e!==s.Key.ENTER&&e!==s.Key.ARROW_UP&&e!==s.Key.ARROW_DOWN&&(this.oldVal!==n&&(this.removeAutocomplete(),n.length>=this.options.minLength?(this.open=!0,this.renderDropdown(n)):this.open=!1),this.oldVal=n)},t.prototype.handleInputKeydown=function(t){var e=t.key,n=o(this.container).children("li").length;if(e===s.Key.ENTER&&this.activeIndex>=0){var i=o(this.container).children("li").eq(this.activeIndex);return void(i.length&&(this.selectOption(i),t.preventDefault()))}e!==s.Key.ARROW_UP&&e!==s.Key.ARROW_DOWN||(t.preventDefault(),e===s.Key.ARROW_UP&&this.activeIndex>0&&this.activeIndex--,e===s.Key.ARROW_DOWN&&this.activeIndex<n-1&&this.activeIndex++,null!=this.$active&&this.$active.removeClass("active"),this.$active=o(this.container).children("li").eq(this.activeIndex),this.$active.addClass("active"))},t.prototype.handleContainerMouseClick=function(t){this.selectOption(o(t.target).closest("li"))},t.prototype.highlight=function(t,e){var n=e.find("img"),i=e.text().toLowerCase().indexOf(""+t.toLowerCase()),o=i+t.length-1,s=e.text().slice(0,i),r=e.text().slice(i,o+1),a=e.text().slice(o+1);e.html("<span>"+s+"<span class='highlight'>"+r+"</span>"+a+"</span>"),n.length&&e.prepend(n)},t.prototype.resetCurrentElement=function(){this.activeIndex=-1,this.$active&&this.$active.removeClass("active")},t.prototype.removeAutocomplete=function(){o(this.container).empty(),this.resetCurrentElement(),this.oldVal=null},t.prototype.selectOption=function(t){var e=t.text().trim();this.$element.val(e),this.$element.trigger("change"),this.removeAutocomplete(),this.open=!1,"function"==typeof this.options.onAutocomplete&&this.options.onAutocomplete.call(this,e)},t.prototype.renderDropdown=function(t){var e=this;this.removeAutocomplete();var n=this.collectMatches(t);n.sort(function(n,i){return e.options.sortFunction(n.key.toLowerCase(),i.key.toLowerCase(),t.toLowerCase())});try{for(var s=i(n),r=s.next();!r.done;r=s.next()){var a=r.value,l=o("<li></li>");a.data?l.append('<img src="'+a.data+'" class="right circle"><span>'+a.key+"</span>"):l.append("<span>"+a.key+"</span>"),o(this.container).append(l),this.highlight(t,l)}}catch(t){h={error:t}}finally{try{r&&!r.done&&(c=s.return)&&c.call(s)}finally{if(h)throw h.error}}var h,c},t.prototype.collectMatches=function(t){var e=this.options.data,n=[],i=0;for(var o in e)if(e.hasOwnProperty(o)){if(i++>=this.options.limit)break;-1!==o.toLowerCase().indexOf(t)&&n.push({data:e[o],key:o})}return n},t.defaults={data:{},limit:1/0,minLength:1,onAutocomplete:null,sortFunction:function(t,e,n){var i=t.indexOf(n)-e.indexOf(n);return 0===i?t.localeCompare(e,"en",{numeric:!0}):i}},t}();e.Autocomplete=r,o.fn.autocomplete=function(t){var e=r.init(this,t);return 1===e.length?e[0]:e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){function t(){}return t.ENTER="Enter",t.ARROW_UP="ArrowUp",t.ARROW_DOWN="ArrowDown",t}();e.Key=i},function(t,e,n){"use strict";var i=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var o=n(0),s=n(1),r=function(){function t(t){t.cash?this.el=t.get(0):this.el=t,this.el.buttonInstance&&this.el.buttonInstance.destroy(),this.$el=o(this.el),this.el.buttonInstance=this,this.boundElements=new s.default,this.setupEventHandlers()}return t.init=function(e){var n=[];try{for(var o=i(e),s=o.next();!s.done;s=o.next()){var r=s.value;r.buttonInstance?n.push(r.buttonInstance):n.push(new t(r))}}catch(t){a={error:t}}finally{try{s&&!s.done&&(l=o.return)&&l.call(o)}finally{if(a)throw a.error}}return n;var a,l},t.prototype.destroy=function(){this.removeEventHandlers(),this.el.buttonInstance=void 0},t.prototype.open=function(){this.$el.hasClass("toolbar")&&(this.boundElements.bind(window,"scroll",this.close.bind(this)),this.boundElements.bind(document.body,"click",this.close.bind(this),!0)),this.$el.addClass("open"),this.isOpen=!0},t.prototype.close=function(){this.$el.hasClass("toolbar")&&(this.boundElements.clear(window),this.boundElements.clear(document.body)),this.$el.removeClass("open"),this.isOpen=!1},t.prototype.setupEventHandlers=function(){this.$el.hasClass("click-open")&&this.boundElements.bind(this.el,"click",this.onClick.bind(this))},t.prototype.removeEventHandlers=function(){this.boundElements.clear(this.el)},t.prototype.onClick=function(){this.isOpen?this.close():this.open()},t}();e.FixedActionButton=r,o.fn.fab=function(){var t=r.init(this);return 1===t.length?t[0]:t}},function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(9),r=function(t){function e(e){var n=t.call(this,e)||this;return n.single=e.classList.contains("single"),n.setupEventHandlers(),n}return i(e,t),e.initialize=function(){for(var t=document.getElementsByClassName("collapsible"),n=0;n<t.length;n++){var i=t[n];-1===e.elements.indexOf(i)&&e.elements.push(new e(i).getElement())}},e.destroy=function(){try{for(var t=o(e.elements),n=t.next();!n.done;n=t.next()){n.value.collapsible.destroy()}}catch(t){i={error:t}}finally{try{n&&!n.done&&(s=t.return)&&s.call(t)}finally{if(i)throw i.error}}e.elements=[];var i,s},e.prototype.getElement=function(){return this.element},e.prototype.destroy=function(){this.boundElements.clearAll(),this.element.collapsible=void 0,this.element=void 0},e.prototype.setInstance=function(t){t.collapsible&&t.collapsible.destroy(),this.element=t,t.collapsible=this},e.prototype.setupEventHandlers=function(){this.boundElements.bind(this.element,"click",this.onClick.bind(this))},e.prototype.onClick=function(t){return!this.activate(t.target)||(t.preventDefault(),!1)},e.prototype.activate=function(t){var e=t.parentElement;if(this.element===e.parentElement){if(this.single){var n=this.element.querySelectorAll(":scope > .active");console.log(n);for(var i=0;i<n.length;i++){var o=n.item(i);e!==o&&o.classList.remove("active")}}return e.classList.contains("active")?e.classList.remove("active"):e.classList.add("active"),!0}return!1},e.elements=[],e}(s.default);e.Collapsible=r},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(1),o=function(){function t(t){this.element=t,this.boundElements=new i.default,this.setInstance(t)}return t.prototype.getIdFromTrigger=function(t){var e=t.getAttribute("data-target");return e||(e=t.getAttribute("href"),e=e?e.slice(1):""),e},t.prototype.getDocumentScrollTop=function(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0},t}();e.default=o},function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(0),r=n(1),a=n(2),l=function(t){function e(n){var i=t.call(this,n)||this;return i.$img=i.$element.find("img").first(),i.update(),i.setupEventHandlers(),i.setupStyles(),e.parallaxes.push(i),i}return i(e,t),e.init=function(t){var n=[];try{for(var i=o(t),s=i.next();!s.done;s=i.next()){var r=s.value;r.parallaxInstance?n.push(r.parallaxInstance):n.push(new e(r))}}catch(t){a={error:t}}finally{try{s&&!s.done&&(l=i.return)&&l.call(i)}finally{if(a)throw a.error}}return n;var a,l},e.handleScroll=function(){try{for(var t=o(e.parallaxes),n=t.next();!n.done;n=t.next()){n.value.update()}}catch(t){i={error:t}}finally{try{n&&!n.done&&(s=t.return)&&s.call(t)}finally{if(i)throw i.error}}var i,s},e.prototype.destroy=function(){this.boundElements.clear(this.$img.get(0));var t=e.parallaxes.indexOf(this);t>-1&&(e.parallaxes.splice(t,1),0===e.parallaxes.length&&this.boundElements.clear(window)),this.setInstance(void 0)},e.prototype.setInstance=function(t){this.element.parallaxInstance=t},e.prototype.setupEventHandlers=function(){this.boundElements.bind(this.$img.get(0),"load",this.handleImageLoad.bind(this)),0===e.parallaxes.length&&this.boundElements.bind(window,"scroll",function(){return e.handleScroll()})},e.prototype.setupStyles=function(){this.$img.get(0).style.opacity=1},e.prototype.handleImageLoad=function(){this.update()},e.prototype.update=function(){var t=this.$element.height()>0?this.element.parentElement.offsetHeight:500,e=this.$img.get(0).offsetHeight,n=e-t,i=this.$element.offset().top+t,o=this.$element.offset().top,s=this.getDocumentScrollTop(),r=window.innerHeight,a=s+r,l=(a-o)/(t+r),h=n*l;i>s&&o<s+r&&(this.$img.get(0).style.transform="translate3D(-50%, "+h+"px, 0)")},e.globalBoundElements=new r.default,e.parallaxes=[],e}(a.default);s.fn.parallax=function(){var t=l.init(this);return 1===t.length?t[0]:t}},function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),r=n(0),a=n(2),l=function(t){function e(n,i){void 0===i&&(i=null);var o=t.call(this,n)||this;return o.id=o.$element.attr("id"),o.options=r.extend({},e.defaults,i),o.isOpen=!1,o.isFixed=o.element.classList.contains("sidenav-fixed"),o.isDragged=!1,o.createOverlay(),o.createDragTarget(),o.setupEventHandlers(),o.setupClasses(),o.setupFixed(),e.sidenavInstances.push(o),o}return i(e,t),e.init=function(t,n){void 0===n&&(n=null);var i=[];if(n)try{for(var s=o(t),r=s.next();!r.done;r=s.next()){var a=r.value;i.push(new e(a,n))}}catch(t){c={error:t}}finally{try{r&&!r.done&&(d=s.return)&&d.call(s)}finally{if(c)throw c.error}}else try{for(var l=o(t),h=l.next();!h.done;h=l.next()){var a=h.value;a.sidenavInstance?i.push(a.sidenavInstance):i.push(new e(a,n))}}catch(t){u={error:t}}finally{try{h&&!h.done&&(p=l.return)&&p.call(l)}finally{if(u)throw u.error}}return i;var c,d,u,p},e.prototype.destroy=function(){this.removeEventHandlers(),this.removeOverlay(),this.removeClasses(),this.dragTarget.parentNode.removeChild(this.dragTarget);var t=e.sidenavInstances.indexOf(this);t>=0&&e.sidenavInstances.splice(t,1)},e.prototype.open=function(){!0!==this.isOpen&&(this.isOpen=!0,"function"==typeof this.options.onOpenStart&&this.options.onOpenStart.call(this,this.element),this.isFixed&&window.innerWidth>992?(s.remove(this.element),s({targets:this.element,translateX:0,duration:0,easing:"easeOutQuad"}),this.enableBodyScrolling(),this.overlay.style.display="none"):(this.preventBodyScrolling(),this.isDragged&&1===this.percentOpen||this.animateIn()))},e.prototype.close=function(){if(!1!==this.isOpen)if(this.isOpen=!1,"function"==typeof this.options.onCloseStart&&this.options.onCloseStart.call(this,this.element),this.isFixed&&window.innerWidth>992){var t="left"===this.options.edge?"-105%":"105%";this.element.style.transform="translateX("+t+")"}else this.enableBodyScrolling(),this.isDragged&&0===this.percentOpen?this.overlay.style.display="none":this.animateOut()},e.prototype.setInstance=function(t){this.element.sidenavInstance=t},e.prototype.createOverlay=function(){var t=document.createElement("div");t.classList.add("sidenav-overlay"),document.body.appendChild(t);var e=this.close.bind(this);this.boundElements.bind(t,"click",e),this.overlay=t},e.prototype.setupEventHandlers=function(){0===e.sidenavInstances.length&&this.boundElements.bind(document.body,"click",this.handleTriggerClick.bind(this));var t=this._handleCloseDrag.bind(this),n=this._handleCloseRelease.bind(this);this.boundElements.bind(this.dragTarget,"touchmove",this._handleDragTargetDrag.bind(this)),this.boundElements.bind(this.dragTarget,"touchend",this._handleDragTargetRelease.bind(this)),this.boundElements.bind(this.overlay,"touchmove",t),this.boundElements.bind(this.overlay,"touchend",n),this.boundElements.bind(this.element,"touchmove",t),this.boundElements.bind(this.element,"touchend",n),this.boundElements.bind(this.element,"click",this._handleCloseTriggerClick.bind(this)),this.isFixed&&window.addEventListener("resize",this._handleWindowResize.bind(this))},e.prototype.removeEventHandlers=function(){this.boundElements.clear(window),this.boundElements.clear(document.body),this.boundElements.clear(this.dragTarget),this.boundElements.clear(this.overlay),this.boundElements.clear(this.element)},e.prototype.handleTriggerClick=function(t){var e=r(t.target).closest(".sidenav-trigger");if(t.target&&e.length){var n=this.getIdFromTrigger(e[0]),i=document.getElementById(n);if(!i)throw new Error("no sidenav found for id: '"+i+"'");var o=i.sidenavInstance;if(!o)throw new Error("element with id '"+i+"' has no sidennav instance");o.open(),t.preventDefault()}},e.prototype.startDrag=function(t){var e=t.targetTouches[0].clientX;this.isDragged=!0,this.startingXpos=e,this.xPos=this.startingXpos,this.time=Date.now(),this.width=this.element.getBoundingClientRect().width,this.overlay.style.display="block",s.remove(this.element),s.remove(this.overlay)},e.prototype._dragMoveUpdate=function(t){var e=t.targetTouches[0].clientX;this.deltaX=Math.abs(this.xPos-e),this.xPos=e,this.velocityX=this.deltaX/(Date.now()-this.time),this.time=Date.now()},e.prototype._handleDragTargetDrag=function(t){this.isDragged||this.startDrag(t),this._dragMoveUpdate(t);var e=this.xPos-this.startingXpos,n=e>0?"right":"left";e=Math.min(this.width,Math.abs(e)),this.options.edge===n&&(e=0);var i=e,o="translateX(-100%)";"right"===this.options.edge&&(o="translateX(100%)",i=-i),this.percentOpen=Math.min(1,e/this.width),this.element.style.transform=o+" translateX("+i+"px)",this.overlay.style.opacity=this.percentOpen},e.prototype._handleDragTargetRelease=function(){this.isDragged&&(this.percentOpen>.5?this.open():this.animateOut(),this.isDragged=!1)},e.prototype._handleCloseDrag=function(t){if(this.isOpen){this.isDragged||this.startDrag(t),this._dragMoveUpdate(t);var e=this.xPos-this.startingXpos,n=e>0?"right":"left";e=Math.min(this.width,Math.abs(e)),this.options.edge!==n&&(e=0);var i=-e;"right"===this.options.edge&&(i=-i),this.percentOpen=Math.min(1,1-e/this.width),this.element.style.transform="translateX("+i+"px)",this.overlay.style.opacity=this.percentOpen}},e.prototype._handleCloseRelease=function(){this.isOpen&&this.isDragged&&(this.percentOpen>.5?this.animateIn():this.close(),this.isDragged=!1)},e.prototype._handleCloseTriggerClick=function(t){r(t.target).closest(".sidenav-close").length&&this.close()},e.prototype._handleWindowResize=function(){window.innerWidth>992?this.open():this.close()},e.prototype.setupClasses=function(){"right"===this.options.edge&&(this.element.classList.add("right-aligned"),this.dragTarget.classList.add("right-aligned"))},e.prototype.removeClasses=function(){this.element.classList.remove("right-aligned"),this.dragTarget.classList.remove("right-aligned")},e.prototype.setupFixed=function(){this.isFixed&&window.innerWidth>992&&this.open()},e.prototype.createDragTarget=function(){var t=document.createElement("div");t.classList.add("drag-target"),document.body.appendChild(t),this.dragTarget=t},e.prototype.preventBodyScrolling=function(){document.body.style.overflow="hidden"},e.prototype.enableBodyScrolling=function(){document.body.style.overflow=""},e.prototype.animateIn=function(){this.animateSidenavIn(),this.animateOverlayIn()},e.prototype.animateSidenavIn=function(){var t=this,e="left"===this.options.edge,n=e?-1:1;this.isDragged&&(e?n+=this.percentOpen:n-=this.percentOpen),s.remove(this.element),s({targets:this.element,translateX:[100*n+"%",0],duration:this.options.inDuration,easing:"easeOutQuad",complete:function(){"function"==typeof t.options.onOpenEnd&&t.options.onOpenEnd.call(t,t.element)}})},e.prototype.animateOverlayIn=function(){var t=0;this.isDragged?t=this.percentOpen:r(this.overlay).css({display:"block"}),s.remove(this.overlay),s({targets:this.overlay,opacity:[t,1],duration:this.options.inDuration,easing:"easeOutQuad"})},e.prototype.animateOut=function(){this.animateSidenavOut(),this.animateOverlayOut()},e.prototype.animateSidenavOut=function(){var t=this,e="left"===this.options.edge?-1:1,n=0;this.isDragged&&(n="left"===this.options.edge?e+this.percentOpen:e-this.percentOpen),s.remove(this.element),s({targets:this.element,translateX:[100*n+"%",105*e+"%"],duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){"function"==typeof t.options.onCloseEnd&&t.options.onCloseEnd.call(t,t.element)}})},e.prototype.animateOverlayOut=function(){var t=this;s.remove(this.overlay),s({targets:this.overlay,opacity:0,duration:this.options.outDuration,easing:"easeOutQuad",complete:function(){r(t.overlay).css("display","none")}})},e.prototype.removeOverlay=function(){this.overlay.parentNode.removeChild(this.overlay)},e.sidenavInstances=[],e.defaults={draggable:!0,edge:"left",inDuration:250,outDuration:200,onOpenStart:null,onOpenEnd:null,onCloseStart:null,onCloseEnd:null},e}(a.default);e.Sidenav=l,r.fn.sidenav=function(t){void 0===t&&(t=null);var e=l.init(this,t);return 1===e.length?e[0]:e}},function(t,e,n){"use strict";var i=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)}}(),o=this&&this.__values||function(t){var e="function"==typeof Symbol&&t[Symbol.iterator],n=0;return e?e.call(t):{next:function(){return t&&n>=t.length&&(t=void 0),{value:t&&t[n++],done:!t}}}};Object.defineProperty(e,"__esModule",{value:!0});var s=n(3),r=n(0),a=n(2),l=function(t){function e(n,i){void 0===i&&(i=null);var a=t.call(this,n)||this;a.options=r.extend({},e.defaults,i),a.$slider=a.$element.find(".slides"),a.$slides=a.$slider.children("li"),a.activeIndex=a.$slider.find(".active").index(),-1!==a.activeIndex&&(a.$active=a.$slides.eq(a.activeIndex)),a.setSliderHeight();try{for(var l=o(a.$slides.find(".caption")),h=l.next();!h.done;h=l.next()){var c=h.value;a.animateCaptionIn(c,0)}}catch(t){f={error:t}}finally{try{h&&!h.done&&(y=l.return)&&y.call(l)}finally{if(f)throw f.error}}try{for(var d=o(a.$slides.find("img")),u=d.next();!u.done;u=d.next()){var c=u.value,p="data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",v=r(c);v.attr("src")!==p&&(v.css("background-image",'url("'+v.attr("src")+'")'),v.attr("src",p))}}catch(t){m={error:t}}finally{try{u&&!u.done&&(g=d.return)&&g.call(d)}finally{if(m)throw m.error}}return a.setupIndicators(),a.$active?a.$active.css("display","block"):(a.$slides.first().addClass("active"),s({targets:a.$slides.first()[0],opacity:1,duration:a.options.duration,easing:"easeOutQuad"}),a.activeIndex=0,a.$active=a.$slides.eq(a.activeIndex),a.options.indicators&&a.$indicators.eq(a.activeIndex).addClass("active")),a.$active.has("img")&&s({targets:a.$active.find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:a.options.duration,easing:"easeOutQuad"}),a.setupEventHandlers(),a.start(),a;var f,y,m,g}return i(e,t),e.init=function(t,n){void 0===n&&(n=null);var i=[];if(n)try{for(var s=o(t),r=s.next();!r.done;r=s.next()){var a=r.value;i.push(new e(a,n))}}catch(t){c={error:t}}finally{try{r&&!r.done&&(d=s.return)&&d.call(s)}finally{if(c)throw c.error}}else try{for(var l=o(t),h=l.next();!h.done;h=l.next()){var a=h.value;a.sliderInstance?i.push(a.sliderInstance):i.push(new e(a,n))}}catch(t){u={error:t}}finally{try{h&&!h.done&&(p=l.return)&&p.call(l)}finally{if(u)throw u.error}}return i;var c,d,u,p},e.prototype.destroy=function(){this.pause(),this.removeIndicators(),this.removeEventHandlers(),this.setInstance(void 0)},e.prototype.set=function(t){var e=this;if(t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.activeIndex!==t){this.$active=this.$slides.eq(this.activeIndex);var n=this.$active.find(".caption");this.$active.removeClass("active"),s({targets:this.$active[0],opacity:0,duration:this.options.duration,easing:"easeOutQuad",complete:function(){try{for(var t=o(e.$slides.not(".active")),n=t.next();!n.done;n=t.next()){var i=n.value;s({targets:i,opacity:0,translateX:0,translateY:0,duration:0,easing:"easeOutQuad"})}}catch(t){r={error:t}}finally{try{n&&!n.done&&(a=t.return)&&a.call(t)}finally{if(r)throw r.error}}var r,a}}),this.animateCaptionIn(n[0],this.options.duration),this.options.indicators&&(this.$indicators.eq(this.activeIndex).removeClass("active"),this.$indicators.eq(t).addClass("active")),s({targets:this.$slides.eq(t)[0],opacity:1,duration:this.options.duration,easing:"easeOutQuad"}),s({targets:this.$slides.eq(t).find(".caption")[0],opacity:1,translateX:0,translateY:0,duration:this.options.duration,delay:this.options.duration,easing:"easeOutQuad"}),this.$slides.eq(t).addClass("active"),this.activeIndex=t,this.start()}},e.prototype.pause=function(){clearInterval(this.interval)},e.prototype.start=function(){clearInterval(this.interval),this.interval=setInterval(this.handleInterval.bind(this),this.options.duration+this.options.interval)},e.prototype.next=function(){var t=this.activeIndex+1;t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.set(t)},e.prototype.prev=function(){var t=this.activeIndex-1;t>=this.$slides.length?t=0:t<0&&(t=this.$slides.length-1),this.set(t)},e.prototype.setInstance=function(t){this.element.sliderInstance=t},e.prototype.setupEventHandlers=function(){var t=this.handleIndicatorClick.bind(this);if(this.options.indicators)try{for(var e=o(this.$indicators),n=e.next();!n.done;n=e.next()){var i=n.value;this.boundElements.bind(i,"click",t)}}catch(t){s={error:t}}finally{try{n&&!n.done&&(r=e.return)&&r.call(e)}finally{if(s)throw s.error}}var s,r},e.prototype.removeEventHandlers=function(){if(this.options.indicators)try{for(var t=o(this.$indicators),e=t.next();!e.done;e=t.next()){var n=e.value;this.boundElements.clear(n)}}catch(t){i={error:t}}finally{try{e&&!e.done&&(s=t.return)&&s.call(t)}finally{if(i)throw i.error}}var i,s},e.prototype.handleIndicatorClick=function(t){this.set(r(t.target).index())},e.prototype.handleInterval=function(){var t=this.$slider.find(".active").index();this.$slides.length===t+1?t=0:t+=1,this.set(t)},e.prototype.animateCaptionIn=function(t,e){var n={targets:t,opacity:0,duration:e,easing:"easeOutQuad"};r(t).hasClass("center-align")?n.translateY=-100:r(t).hasClass("right-align")?n.translateX=100:r(t).hasClass("left-align")&&(n.translateX=-100),s(n)},e.prototype.setSliderHeight=function(){this.$element.hasClass("fullscreen")||(this.options.indicators?"string"==typeof this.options.height?this.$element.css("height",this.options.height):this.$element.css("height",this.options.height+40+"px"):this.$element.css("height",this.options.height+"px"),this.$slider.css("height",this.options.height+"px"))},e.prototype.setupIndicators=function(){if(this.options.indicators){var t=r('<ul class="indicators"></ul>');try{for(var e=o(this.$slides),n=e.next();!n.done;n=e.next()){var i=(n.value,r('<li class="indicator-item"></li>'));t.append(i)}}catch(t){s={error:t}}finally{try{n&&!n.done&&(a=e.return)&&a.call(e)}finally{if(s)throw s.error}}this.$element.append(t),this.$indicators=t.children("li.indicator-item")}var s,a},e.prototype.removeIndicators=function(){this.$element.find("ul.indicators").remove()},e.defaults={indicators:!0,height:400,duration:500,interval:6e3},e}(a.default);r.fn.slider=function(t){void 0===t&&(t=null);var e=l.init(this,t);return 1===e.length?e[0]:e}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n(14),n(4)},function(t,e){}]);
//# sourceMappingURL=materialize-strict.js.map