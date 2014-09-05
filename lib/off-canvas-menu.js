
/*
============================
Off Canvas small screen menu
Author: Zee Zali
============================
*/

;(function($) {

    /* constructor */
    var OffCanvasMenu = function() {

        // recorded when the menu is opened
        // used when the menu is active to determine how much we've scrolled from our original position
        this.previousScrollTop = null;

        this.configureElems();
        this.setupEventListeners();

    };


    /* methods */
    OffCanvasMenu.prototype = {

        constructor: OffCanvasMenu,


        classnames: {
            menuActive: 'js-off-canvas-menu__active'
        },


        /***
         * configure elements
         *
         */
        configureElems: function() {

            this.$document = $(document);
            this.$window   = $(window);
            this.$body     = $(document.body);
            this.$html     = $('html');

            this.$offCanvasContainer = $('.js-off-canvas-container');
            this.$nonMenuContainer   = $('.js-non-menu-container');

        },


        /***
         * setup event listeners
         *
         */
        setupEventListeners: function() {

            var menuTriggerHandler = function(e) {
                this.toggleMenu();
            };

            var scrollHandler = function(e) {
                var currentScrollTop = this.$window.scrollTop();

                var difference = Math.abs( currentScrollTop - this.previousScrollTop );

                if (difference > 100) {
                    this.hideMenu();
                }
            };

            var nonMenuClickHandler = function(e) {
                var $target = $(e.target);
                var parentTrigger = $target.parents('.js-menu-trigger');

                var isTheTrigger = ($target.hasClass('js-menu-trigger') || parentTrigger.length > 0);

                if ( !isTheTrigger && this.$body.hasClass(this.classnames.menuActive) ) {
                    e.preventDefault();
                    this.hideMenu();
                }
            };


            this.$body.on('click', '.js-non-menu-container', nonMenuClickHandler.bind(this));

            this.$body.on('click', '.js-menu-trigger', menuTriggerHandler.bind(this));

            this.$window.on('scroll', scrollHandler.bind(this));


            /* bug fix: scrolling can become disabled temporarily once the menu closes on iphones */
            this.$nonMenuContainer.on( 'transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', this.hideOffCanvasContainer.bind(this) );

        },



        /***
         * hide the off canvas compeltely once the menu closes
         *
         */
        hideOffCanvasContainer: function() {

            if ( !this.$body.hasClass(this.classnames.menuActive) ) {
                this.$offCanvasContainer.css('display', 'none');
            }

        },



        /***
         * toggle menu state
         *
         */
        toggleMenu: function() {

            if ( this.$body.hasClass(this.classnames.menuActive) ) {
                this.hideMenu();
            } else {
                this.showMenu();
            }

        },


        /***
         * hide the menu
         *
         */
        hideMenu: function() {

            this.$body.removeClass(this.classnames.menuActive);

        },


        /***
         * show menu
         *
         */
        showMenu: function() {

            this.previousScrollTop = this.$window.scrollTop();

            this.$offCanvasContainer.css('display', 'block');

            // set height of off canvas container based on window height
            this.$offCanvasContainer.height( this.$window.height() );

            this.$body.addClass(this.classnames.menuActive);

        }

    };



    /* expose the constructor */
    if (typeof module !== 'undefined' && module.exports) {

        module.exports = OffCanvasMenu;

    } else if (typeof define === 'function' && define.amd) {

        define(['jquery'], function($) {
            return OffCanvasMenu;
        });

    } else {

        window.OffCanvasMenu = OffCanvasMenu;
        
    }

})(window.jQuery);


