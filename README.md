

# OFF CANVAS MENU

A CSS/JS off-canvas menu solution.

[Checkout a live example.](http://zeezali.github.io/off-canvas-menu/demo/) Make sure to resize your browser to see it in action!



## Dependencies

You'll need **jQuery**.



## Usage

HTML:

    <div class="off-canvas-container js-off-canvas-container">
        <!-- menu -->
    </div>

    <div class="off-canvas-container js-off-canvas-container">
        <!-- content height -->
    </div>


CSS:

All the CSS you need is in `dist/off-canvas-menu.css`.

The CSS is configured in such a way that the off-canvas menu is only active up until a certain breakpoint.

`off-canvas-menu.css` is a generated CSS file. It has gone through a CSS preprocessor (Stylus) and [Autoprefixer](https://github.com/postcss/autoprefixer). To see how the CSS is really configured, checkout the `css/stylus` directory.

Within the Stylus files, you'll come across a variable called `$COLLAPSED-MENU-BREAKPOINT`. This is a major breakpoint that allows us to radically change the appearance of the menu. With this breakpoint we can target the menu once it's in a "collapsed" state. You can adjust this value to match you're own projects' needs.


Javascript:

    var menu = new OffCanvasMenu();



## Browser Support

It's been tested on the following browsers:

* iOS 7 Safari
* iOS 6 Safari
* Android Google Chrome (v x.xx)
* Android Stock Browser (v x.xx)


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

