module.exports = {
  // Type check TypeScript files
  '**/*.(ts|tsx)': () => 'yarn tsc --noEmit',

  // Lint and format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': filenames => [
    `yarn eslint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ],

  // Lint and format css and scss files
  '**/*.(css|scss)': filenames => [
    `yarn stylelint ${filenames.join(' ')}`,
    `yarn prettier --write ${filenames.join(' ')}`
  ]
};
