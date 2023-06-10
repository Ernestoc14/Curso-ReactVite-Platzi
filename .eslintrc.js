module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'plugin:react/jsx-runtime',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: [
    'react', 
    'react/jsx-runtime'
],
	settings: {
		react: {
			version: 'detect',
		},
	},
	rules: {
		'react/prop-types': 'off',
		'no-unused-vars': 'off',
		'react/jsx-uses-react': 'error',
		'react/jsx-uses-vars': 'error',
		ident: ['error', 2],
	},
}
