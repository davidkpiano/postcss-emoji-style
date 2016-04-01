var postcss = require('postcss');
var assert = require('chai').assert;
var emoji = require('./index');

function useEmojis() {
  return postcss().use(emoji());
}

describe('this stupid little plugin', () => {
  it('converts emojis to CSS properties and values', () => {
    assert.equal(useEmojis().process(`
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
    `).css,`
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
    `)
  })
})
