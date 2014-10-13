

# OFF CANVAS MENU

A CSS/JS off-canvas menu solution.

[Checkout a live demo.](http://zeezali.github.io/off-canvas-menu/demo/) Make sure to resize your browser to see it in action!



## Dependencies

You'll need **jQuery**.



## Usage

### HTML:

    <div class="off-canvas-container js-off-canvas-container">
        <!-- menu -->
    </div>

    <div class="js-non-menu-container">
        <!-- everything else -->
        <!-- all the other content except the menu -->
    </div>

You can also have a look at the `demo/index.html` file for a more detailed example.


### CSS:

All the CSS you need is in `dist/off-canvas-menu.css`.

The CSS is configured in such a way that the off-canvas menu is only active up until a certain breakpoint.

You'll notice a lot styling changes at a common breakpoint: `@media (min-width: 60.5em)`. Think of this breakpoint as the "collapsed menu breakpoint". That is, after a certain size the menu **will not** be off canvas anymore. So the "collapsed menu breakpoint" introduces a major change to the styling of the menu.

It's also important to keep in mind that `off-canvas-menu.css` is a generated CSS file. It has gone through a CSS preprocessor (Stylus) and [Autoprefixer](https://github.com/postcss/autoprefixer). To see how the non-processed CSS is configured, checkout the `css/stylus` directory.

Within the Stylus files, you'll come across a variable called `$COLLAPSED-MENU-BREAKPOINT`. This is a major breakpoint that allows us to radically change the appearance of the menu. With this breakpoint we can target the menu once it's in a "collapsed" state. You can adjust this value to match you're own projects' needs.

*Note: The [live demo](http://zeezali.github.io/off-canvas-menu/demo/) is just that, a demo. Use it as a guide, but do whatever you want to with the CSS. For example, in the demo the menu becomes fixed once it's collapsed, but you could easily just make it's position static.*


### Javascript:

The JS file is in `lib/off-canvas-menu.js`

To create a new instance of `OffCanvasMenu`, you'll need to provide 3 classnames:

    var menu = new OffCanvasMenu({
        menuTrigger: '.js-menu-trigger',
        offCanvasContainer: '.js-off-canvas-container',
        nonMenuContainer: '.js-non-menu-container'
    });

* `offCanvasContainer` - the class of the container that holds the menu (and sits off canvas)
* `nonMenuContainer` - the class of the of the container that holds all the other content
* `menuTrigger` - the class of the trigger button for opening/closing the menu


## Browser Support (WIP)

It's been tested on the following browsers:

* iOS 7 Safari
* iOS 6 Safari
* Android Google Chrome
* Android Stock Browser (v x.xx)

It won't work in IE8....


## License

**The MIT License (MIT)**

Copyright (c) 2014 Zee Zali

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

