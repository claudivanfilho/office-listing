<template>
	<button
		v-bind="$attrs"
		class="flex items-center rounded-lg"
		:class="customClass"
		:disabled="disabled"
		@click="$emit('click')"
	>
		<slot></slot>
		<BaseIcon :icon="icon" v-if="icon" :size="iconSize" />
	</button>
</template>

<script lang="ts">
import Vue from "vue";
import BaseIcon from "./BaseIcon.vue";
export default Vue.extend({
	components: { BaseIcon },
	props: {
		icon: {
			type: String,
			required: false
		},
		iconSize: {
			type: Number,
			required: false,
			default: 24
		},
		customClass: String,
		disabled: {
			type: Boolean,
			required: false
		}
	}
});
</script>
