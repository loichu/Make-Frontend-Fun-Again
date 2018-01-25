---
layout: default
permalink: gulp
online: false
---
# gulp

![gulp_logo](https://github.com/gulpjs/artwork/blob/master/gulp-cover.png?raw=true)

## Automate and enhance your workflow

* gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

## Where do we use gulp ?

* When we run `npm`, the `postinstall` command in `package.json` call `gulp` and execute the content of `gulp.js`.
* When called, it:
    * process the `sass` files;
    * unify and unglify `css` and `js` files;
    * create minified images.
