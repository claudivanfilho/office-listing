<template>
	<div class="relative flex flex-col">
		<input
			:id="id"
			v-bind="$attrs"
			class="w-full border h-10 rounded-lg shadow focus:outline-none px-3 text-dark-blue placeholder-primary-grey"
			:class="classes"
			v-model="inputValue"
			@blur="onBlur"
		/>
		<div
			class="absolute right-0 top-0 h-10 flex items-center mr-2"
			v-if="changed && error"
		>
			<BaseIcon
				icon="AlertCircle"
				:class="(error && changed && 'text-accent-red') || ''"
			/>
		</div>
		<span class="text-accent-red h-6 text-xs flex items-center">
			{{ error }}
		</span>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

type Validator = (arg: string) => true | string;

export default Vue.extend({
	props: {
		value: String,
		validators: {
			type: Array as PropType<Validator[]>,
			default: () => []
		},
		id: {
			type: String,
			required: false
		}
	},
	data() {
		return {
			inputValue: this.value,
			error: "",
			changed: false
		};
	},
	mounted() {
		this.validate(this.value, false);
	},
	watch: {
		inputValue(val: string) {
			this.changed = true;
			this.validate(val);
			this.$emit("input", val);
		}
	},
	methods: {
		validate(val: string, showError = true) {
			let valid = true;
			this.validators.forEach(validator => {
				if (validator(val) !== true) {
					if (showError) {
						this.error = validator(val) as string;
					}
					valid = false;
				}
			});
			if (valid) {
				this.error = "";
			}
			this.$emit("valid", valid);
		},
		onBlur() {
			this.changed = true;
			this.validate(this.value, true);
		}
	},
	computed: {
		classes(): string {
			return (
				(this.error &&
					this.changed &&
					"pr-10 border-accent-red active:border-accent-red focus:ring-accent-red focus:ring-1") ||
				"border-primary-grey active:border-dark-blue focus:ring-accent-blue focus:ring-1"
			);
		}
	}
});
</script>
