---
layout: default
permalink: gulp
online: true
title: Gulp
image-brand: /images/gulp-logo-pink-text.svg
---
## Automate and enhance your workflow

* gulp is a toolkit for automating painful or time-consuming tasks in your development workflow, so you can stop messing around and build something.

## Where do we use gulp ?

* When we run `npm`, the `postinstall` command in `package.json` call `gulp` and execute the content of `gulp.js`.
* When called, it:
    * process the `sass` files;
    * unify and unglify `css` and `js` files;
    * create minified images.

## Dev with Gulp and Browsersync

![](/images/browsersync.svg){:.image-content}

## Time-saving synchronised browser testing.

* From live reloads to URL pushing, form replication to click mirroring, Browsersync cuts out repetitive manual tasks. It’s like an extra pair of hands.

## When to use BowerSync ?

* When developing the theme, use `npm start` to let `BrowserSync` refresh your browser when `gulp` has finished its works.
