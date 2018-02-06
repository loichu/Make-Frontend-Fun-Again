---
layout: default
permalink: sass
online: true
title: Sass
image-brand: /images/sass.svg
---
## CSS with superpowers

* Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.

---

## Sass makes CSS fun again

* Sass is an extension of CSS, adding nested rules, variables, mixins, selector inheritance, and more.

* The main syntax (as of Sass 3) is known as "SCSS" (for "Sassy CSS"), and is a superset of CSS's syntax. This means that every valid CSS stylesheet is valid SCSS as well. SCSS files use the extension `.scss`.

---

## Where do we use sass ?

* When we run `npm`, the `postinstall` command in `package.json` call `gulp` and execute the content of `gulp.js` which compiles the theme's SCSS files (located in the `sass` folder) to CSS files.

---

## Sass example (variables)

```css
body {
  font: 100% Helvetica, sans-serif;
  color: #333;
}

```
is the same as:
```sass
$font-stack:    Helvetica, sans-serif;
$primary-color: #333;

body {
  font: 100% $font-stack;
  color: $primary-color;
}

```

---

## Sass example (nesting)

```css
nav ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

nav li {
  display: inline-block;
}

nav a {
  display: block;
  padding: 6px 12px;
  text-decoration: none;
}
```

---

is the same as:
```sass
nav {
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li { display: inline-block; }

  a {
    display: block;
    padding: 6px 12px;
    text-decoration: none;
  }
}

```

---

## Sass example (import)

CSS has an import option but each time you use @import in CSS it creates another HTTP request. Sass builds on top of the current CSS @import but instead of requiring an HTTP request, Sass will take the file that you want to import and combine it with the file you're importing into so you can serve a single CSS file to the web browser.

```sass
// base.scss

@import 'color_variables';
```
*Note the missing `.scss` file extentions*

---

## Sass example (extends)
```css
.message, .success, .error, .warning {
  border: 1px solid #cccccc;
  padding: 10px;
  color: #333;
}
.error {
  border-color: red;
}
...
```

```sass
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}
.error {
  @extend %message-shared;
  border-color: red;
}
...
```
*Note the missing `.scss` file extentions*
