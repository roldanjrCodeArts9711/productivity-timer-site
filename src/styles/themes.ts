import { css } from "styled-components";

export const lightTheme = css`
	--cl-primary: #007bc7;
	--cl-primary-variant: #035aa5;

	--cl-display-text: #111111;
	--cl-heading-text: #212121;
	--cl-body-text: #666666;
	--cl-disabled-text: #999999;

	--bg-primary: #fff;
	--bg-primary-rgb: 255, 255, 255;

	--bg-secondary: #fafafa;
	--bg-tertiary: #f2f2f2;

	--bg-btn-primary: linear-gradient(
		to bottom,
		var(--cl-primary),
		var(--cl-primary-variant)
	);

	--bg-btn-primary-hover: linear-gradient(
		to bottom,
		var(--cl-primary),
		var(--cl-primary)
	);

	--cl-github-btn: rgba(255, 255, 255, 0.9);
	--bg-github-btn: linear-gradient(
		to bottom,
		var(--cl-heading-text),
		var(--cl-display-text)
	);
	--bg-github-btn-hover: linear-gradient(
		to bottom,
		var(--cl-heading-text),
		var(--cl-heading-text)
	);

	--bg-footer: linear-gradient(
		to bottom,
		var(--bg-secondary),
		var(--bg-primary)
	);

	--border-primary: #e6e6e6;
	--border-secondary: #f4f4f4;

	--cl-shadow-primary: rgba(0, 0, 0, 0.16);
	--cl-shadow-secondary: rgba(0, 0, 0, 0.24);
`;

export const darkTheme = css`
	--cl-primary: #007bc7;
	--cl-primary-variant: #0098f7;

	--cl-display-text: rgba(255, 255, 255, 0.9);
	--cl-heading-text: rgba(255, 255, 255, 0.8);
	--cl-body-text: rgba(255, 255, 255, 0.6);
	--cl-disabled-text: rgba(255, 255, 255, 0.4);

	--bg-primary: #111d25;
	--bg-primary-rgb: 17, 29, 37;

	--bg-secondary: #1c2830;
	--bg-tertiary: #202c34;

	--bg-btn-primary: linear-gradient(
		to bottom,
		var(--cl-primary-variant),
		var(--cl-primary)
	);

	--bg-btn-primary-hover: linear-gradient(
		to bottom,
		var(--cl-primary-variant),
		var(--cl-primary-variant)
	);

	--cl-github-btn: var(--cl-heading-text);
	--bg-github-btn: linear-gradient(
		to bottom,
		var(--bg-tertiary),
		var(--bg-secondary)
	);
	--bg-github-btn-hover: linear-gradient(
		to bottom,
		var(--bg-tertiary),
		var(--bg-tertiary)
	);

	--bg-footer: linear-gradient(to bottom, var(--bg-primary), #12181b);

	--border-primary: rgba(255, 255, 255, 0.16);
	--border-secondary: rgba(255, 255, 255, 0.1);

	--cl-shadow-primary: rgba(0, 0, 0, 0.24);
	--cl-shadow-secondary: rgba(0, 0, 0, 0.4);
`;
