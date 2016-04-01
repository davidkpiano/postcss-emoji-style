var postcss = require('postcss');

var replacements = {
  flex: ['💪'],
  left: ['👈','⬅'],
  right: ['👉','➡'],
  top: ['☝','👆','⬆','🔝'],
  bottom: ['👇','🍑','⬇'],
  visibility: ['👀','👓'],
  repeat: ['🔁'],
  clip: ['💇','✂'],
  border: ['🛂','🛃'],
  image: ['📷'],
  box: ['📦'],
  clear: ['🆑'],
  float: ['☁','🎈'],
  height: ['📶'],
  x: ['✖','❌'],
  content: ['😌'],
  end: ['🔚'],
  back: ['🔙'],
  justify: ['⚖'],
  letter: ['✉'],
  break: ['💔'],
  space: ['🌌'],
  face: ['😀'],
  index: ['📇'],
  duration: ['⌛','⏳','⌚'],
  row: ['🚣'],
  text: ['📖'],
  none: ['🙅'],
  rem: ['🐏'],
  '0.3s': ['🔜'],
}

module.exports = postcss.plugin('postcss-emoji-style',function (opts) {
  opts = opts || {};

  return function (css, result) {
    css.walk(function (node) {
      if (node.type === 'decl') {
        Object.keys(replacements).forEach(function (key) {
          var emojis = replacements[key];

          emojis.forEach(function (emoji) {
            node.prop = node.prop.replace(emoji, key);
            node.value = node.value.replace(emoji, key);
          });
        });
      }
    });
  };
});
