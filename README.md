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

```js
postcss([ require('postcss-emoji-style')() ])
```


## License

MIT
