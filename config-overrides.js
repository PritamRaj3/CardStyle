// Overriding CreateReactApp settings, ref: https://github.com/arackaf/customize-cra
const {
  override,
  addLessLoader,
  useEslintRc,
  addDecoratorsLegacy,
} = require('customize-cra')

module.exports = override(
  addDecoratorsLegacy(),
  useEslintRc(),
  addLessLoader({
    javascriptEnabled: true,
  })
)