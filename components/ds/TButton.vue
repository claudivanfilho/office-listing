<template>
	<BaseButton
		v-bind="$attrs"
		:custom-class="classes"
		:text="text"
		:icon="icon"
		:iconSize="icon && iconSize"
		:disabled="disabled"
		@click="$emit('click')"
	>
		<slot></slot>
	</BaseButton>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import BaseButton from "../base/BaseButton.vue";

enum ButtonTypes {
	PRIMARY = "primary",
	DEFAULT = "default",
	DANGER = "danger"
}

const typesClasses = {
	[ButtonTypes.DEFAULT]: {
		text: "text-primary-grey hover:text-dark-blue focus:text-dark-blue",
		fill:
			"bg-light-grey text-dark-blue hover:bg-dark-blue hover:text-white focus:ring-2 focus:ring-dark-blue shadow-md"
	},
	[ButtonTypes.PRIMARY]: {
		text: "text-accent-blue hover:text-dark-blue focus:text-dark-blue",
		fill:
			"bg-accent-blue text-white hover:bg-dark-blue hover:text-white focus:ring-2 focus:ring-dark-blue shadow-md"
	},
	[ButtonTypes.DANGER]: {
		text: "text-accent-red hover:text-dark-blue focus:text-dark-blue",
		fill:
			"bg-accent-red text-white hover:bg-dark-red hover:text-white focus:ring-2 focus:ring-dark-blue shadow-md"
	}
};

export default Vue.extend({
	props: {
		text: {
			type: Boolean,
			default: false
		},
		icon: {
			type: String,
			required: false
		},
		type: {
			type: String as PropType<ButtonTypes>,
			default: ButtonTypes.DEFAULT
		},
		normal: {
			type: Boolean,
			required: false
		},
		small: {
			type: Boolean,
			required: false
		},
		large: {
			type: Boolean,
			required: false
		},
		disabled: {
			type: Boolean,
			required: false
		}
	},
	components: { BaseButton },
	computed: {
		classes(): string {
			if (this.disabled) {
				return `${this.sizeClasses} bg-primary-grey pointer-events-none text-white`;
			}
			const classes = `${this.sizeClasses} focus:outline-none`;
			if (this.text) {
				return `${classes} ${typesClasses[this.type].text}`;
			}
			return `${classes} ${typesClasses[this.type].fill}`;
		},
		sizeClasses(): string {
			if (this.small) {
				return "py-2 px-4 text-xs";
			} else if (this.large) {
				return "px-6 py-4 text-base";
			}
			return "py-2 px-4 text-base";
		},
		iconSize(): number {
			if (this.small) {
				return 22;
			} else if (this.large) {
				return 30;
			}
			return 24;
		}
	}
});
</script>
