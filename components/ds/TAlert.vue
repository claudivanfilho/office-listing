<template>
	<div
		id="Alert"
		class="transition-all duration-150 fixed left-0 w-full flex justify-center items-center h-20 bg-white"
		:class="(!visible && '-top-1/2') || 'top-0'"
	>
		<BaseIcon :icon="icon" class="text-accent-blue mr-3" v-if="icon" />
		<span class="text-dark-blue">{{ message }}</span>
		<button @click="$emit('close')" class="absolute right-6 md:right-8">
			<BaseIcon icon="Close" class="text-primary-grey" v-if="icon" />
		</button>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	props: {
		visible: Boolean,
		icon: String,
		message: {
			type: String,
			required: false
		}
	}
});
</script>
