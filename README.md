# PostCSS Emoji Style

PostCSS plugin that lets you write your CSS using emojis instead of alphanumeric characters.

**Example:**

```css
body {
  display: 💪;
  💪-direction: 🚣;
  ⚖-😌: 💪-🔚;
  📖-align: 👉;
}

.foo {
  🍑: 10px;
  background-📷: 🙅;
  📦-sizing: 🛂-📦;
  🎈: 👈;
  📶: 5🐏;
  animation-⌛: 🔜;
  z-📇: 1;
  word-💔: 💔-all;
}
```

**Result:**

```css
body {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  text-align: right;
}

.foo {
  bottom: 10px;
  background-image: none;
  box-sizing: border-box;
  float: left;
  height: 5rem;
  animation-duration: 0.3s;
  z-index: 1;
  word-break: break-all;
}
```

## Usage

First, `npm install postcss-emoji-style`. Then use it:

```js
postcss([ require('postcss-emoji-style')() ])
```

## FAQs

- **Is this for real?** Yes.
- **Which emojis can I use?** All the ones in the [index.js file](https://github.com/davidkpiano/postcss-emoji-style/blob/master/index.js).
- **Should I use this plugin?** ~~probably not~~ ¯\\\_(ツ)\_/¯
- **This doesn't seem like a better way to write my CSS.** And that doesn't seem like a question.


## License

MIT
