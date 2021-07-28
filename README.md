# eslint-config-vue2-roboleary

My ESLint config for linting Vue 2 apps. You can use it along side Prettier without conflicts.

It includes the following:
- My base config [eslint-config-roboleary-base](https://www.npmjs.com/package/eslint-config-roboleary-base) config for a core collection of rules.
- The [eslint-config-vue-plugin](https://www.npmjs.com/package/eslint-plugin-vue) for vue rules.
- The [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) config to turn off the ESLint rules that conflict or are unnecessary when using Prettier. Ensure this is the last config included.

## Usage

1. Install this package, ESLint (peer dependency) and Prettier (peer dependency) as *devDependencies* with the command `npm i --save-dev eslint prettier eslint-config-vue2-roboleary`.
1. Create an eslint config file in the root of your project directory e.g. _.eslintrc_. Add the following:

   ```json
   {
     "extends": ["eslint-config-vue2-roboleary"]
   }
   ```

   Alternatively, you can put a reference to the config in your _package.json_ under the property `eslintConfig`.

1. You can add scripts to your _package.json_ to lint, fix, and format your code from the command-line.

	```json
	{
		"scripts": {
			"lint": "eslint .",
			"lint:fix": "npm run lint -- --fix",
			"format": "prettier src test --check",
			"format:fix": "npm run prettier -- --write",
		},
	}
	```

## Configuration in VS Code

If you want to use ES Lint and Prettier in VS Code, I recommend installing the extensions: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode), and [Format Code Action](https://marketplace.visualstudio.com/items?itemName=rohit-gohri.format-code-action&ssr=false#review-details).

To format and lint code on save, you can update your user settings with the following:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "eslint.probe": [
      "javascript",
      "javascriptreact",
      "vue"
  ],
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": [
    "source.formatDocument",
    "source.fixAll"
  ],
}
```

If you use the Vetur plugin, ensure that Vetur's template validation does not interfere with linting. The setting is `"vetur.validation.template"`, it is set to `false` by default.
