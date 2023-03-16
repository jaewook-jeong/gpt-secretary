module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json'],
  '**/*.+(ts|tsx|js|jsx)': ['eslint --fix --cache --quiet', 'prettier --write', 'git add'],
};
