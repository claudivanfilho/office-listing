<template>
	<div>
		<component v-bind:is="icons[icon]" :size="size"></component>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import Plus from "vue-material-design-icons/Plus.vue";
// @ts-ignore
import ChevronDown from "vue-material-design-icons/ChevronDown.vue";
// @ts-ignore
import ChevronUp from "vue-material-design-icons/ChevronUp.vue";
// @ts-ignore
import Pencil from "vue-material-design-icons/PencilOutline.vue";
// @ts-ignore
import TrashCan from "vue-material-design-icons/TrashCanOutline.vue";
// @ts-ignore
import Delete from "vue-material-design-icons/DeleteOutline.vue";
// @ts-ignore
import AlertCircle from "vue-material-design-icons/AlertCircle.vue";
// @ts-ignore
import Close from "vue-material-design-icons/Close.vue";

export default Vue.extend({
	props: {
		icon: String,
		size: {
			type: Number,
			default: 24
		}
	},
	data() {
		return {
			icons: {
				Plus,
				ChevronUp,
				ChevronDown,
				Pencil,
				TrashCan,
				Delete,
				AlertCircle,
				Close
			}
		};
	}
});
</script>
