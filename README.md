# Digital clock

![giphy](https://user-images.githubusercontent.com/86482525/125136329-01f48e80-e0e1-11eb-90fb-912928271ba1.gif)

Digital clock with Apple style made with HTML, CSS and JavaScript.
Uses onload() event to change the clock numbers.

## Table of contents✒️

- [Overview](#overview)🎯
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)🧩
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)🙋🏻

## Overview🎯

### Screenshot

![giphy](https://user-images.githubusercontent.com/86482525/125136329-01f48e80-e0e1-11eb-90fb-912928271ba1.gif)

### Links

- Live Site URL: [Live site](https://alvaro-j.github.io/digital-clock/)

## My process🧩

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript

### What I learned

- Use <b>top, left, position</b> and <b>transform</b> property to center a div element on screen.
```css
#tempo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
```
- Use <b>getHours(), getMinutes()</b> and <b>getSeconds()</b>method to get the current system hours, minutes and seconds.
```js
var hor = String(new Date().getHours())
var min = String(new Date().getMinutes())
var sec = String(new Date().getSeconds())
```
### Useful resources

- [Speech bubbles](http://nicolasgallagher.com/pure-css-speech-bubbles/) - This is an amazing article which helped me finally understand how to make speech bubbles. I'd recommend it to anyone who wants to understand this concept.

## Author🙋🏻

- Website - [Álvaro J.](https://www.github.com/alvaro-j/)
