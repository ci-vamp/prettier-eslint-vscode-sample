# Prettier-ESLint VSCode vs prettier-eslint-cli

> repro steps

1. `yarn run format`
2. `yarn run format:test` -> exit 0
3. open `App.tsx`
4. hit save (triggering Prettier-ESLint VSCode extension)
5. `yarn run format:test` -> exit 1
6. `yarn run format` -> fixes `App.tsx`
