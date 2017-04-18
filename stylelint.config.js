// https://stylelint.io/user-guide/rules/

module.exports = {
  extends: 'stylelint-config-standard',
  rules: {
    // Quotes
    'font-family-name-quotes': 'always-where-recommended',
    'function-url-quotes': 'always',
    'selector-attribute-quotes': 'always',
    'string-quotes': 'single',

    // Vendor prefixes
    'at-rule-no-vendor-prefix': true,
    'media-feature-name-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    // Speciificty
    'max-nesting-depth': 4,
    'selector-max-compound-selectors': 3,
    'selector-max-specificity': '0,3,3',

    // Acceptable selectors
    'color-named': 'always-where-possible',
    'declaration-no-important': true,
    'selector-no-id': true,

    // Color
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,

    // Zeros
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'length-zero-no-unit': true
  },
};
