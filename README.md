# Prettier-ESLint VSCode vs prettier-eslint-cli

> repro steps

1. `yarn run format`
2. `yarn run format:test` -> exit 0
3. open `App.tsx`
4. hit save (triggering Prettier-ESLint VSCode extension)
5. `yarn run format:test` -> exit 1
6. `yarn run format` -> fixes `App.tsx`

> versions

- node: v18.13.0
- yarn: 1.22.19
- vscode: Version: 1.75.0 (Universal)
- prettier eslint vscode extension: v5.0.4
- host: macOS ventura 13.2 (m1 max, 64GB)
