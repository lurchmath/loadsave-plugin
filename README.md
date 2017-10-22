
# Load/Save Plugin for [TinyMCE](http://www.tinymce.com)

This plugin will leverage [jsfs](https://github.com/nathancarter/jsfs) to
add load and save functionality to a TinyMCE instance.  It assumes that both
TinyMCE and jsfs have been loaded into the global namespace, so that it can
access both.

## Usage

To use this module in your page, you must:

 1. Include in your page an instance of
    [the TinyMCE editor](http://www.tinymce.com).  You can do so with a
    script tag like this one:

```html
<script src="https://cloud.tinymce.com/stable/tinymce.min.js"></script>
```

 2. Import the modules on which this one depends, including
    [LZString](https://www.npmjs.com/package/lz-string)
    for compression and
    [jsfs](https://github.com/nathancarter/jsfs)
    for an in-browser filesystem.  Like so:

```html
<script language='javascript' src='https://cdn.jsdelivr.net/npm/lz-string@1.4.4/libs/lz-string.min.js'></script>
<script src="https://cdn.jsdelivr.net/gh/nathancarter/jsfs@1/release/jsfs.min.js"></script>
```

 3. Copy into your page's folder all the files in
    [the example folder of this repository](https://github.com/lurchmath/loadsave-plugin/tree/master/example),
    with the exception of `example.html`.
 4. In your call to `tinymce.init`, be sure to include these options.
     * `plugins: "-loadsave"`
     * On the File menu, the items `newfile`, `openfile`, `savefile`,
       `saveas`, and `managefiles`

# Example

To see all this in action, check out the example page.

 * [Live example](http://lurchmath.github.io/loadsave-plugin/example/example.html)
 * [Source code](https://github.com/lurchmath/loadsave-plugin/blob/master/example/example.html)

# License

[![LGPLv3](https://www.gnu.org/graphics/lgplv3-147x51.png)](https://www.gnu.org/licenses/lgpl-3.0.en.html)
