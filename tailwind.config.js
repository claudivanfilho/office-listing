module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true
	},
	purge: [
		"./components/**/*.{vue,js}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./nuxt.config.{js,ts}"
	],
	theme: {
		extend: {
			colors: {
				"accent-blue": "#33A6BA",
				"dark-blue": "#313E4F",
				"light-grey": "#E8EDF3",
				"primary-grey": "#989EA7",
				"accent-red": "#FF7B92",
				"dark-red": "#eb4b67"
			},
			width: {
				104: "26rem",
				112: "28rem",
				120: "30rem",
				128: "32rem"
			}
		},
		fontFamily: {
			lato: ["Lato"]
		}
	},
	variants: {
		ringWidth: ["hover", "active", "focus"]
	},
	plugins: []
};
