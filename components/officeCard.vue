<template>
	<div class="shadow-lg rounded-lg overflow-auto overflow-y-hidden bg-white">
		<div
			class="transition-all duration-300 relative  flex justify-between items-center px-6 py-6 shadow-lg"
			:class="headerClass"
		>
			<div class="flex flex-col">
				<span class="text-2xl font-bold">
					{{ office.title }}
				</span>
				<span
					class="text-base"
					:class="(!opened && 'text-primary-grey') || ''"
				>
					{{ office.address }}
				</span>
			</div>
			<button
				@click="$emit('collapse')"
				class="focus:outline-none focus:opacity-70"
			>
				<BaseIcon
					icon="ChevronDown"
					:size="32"
					class="transition-transform duration-200"
					:class="chevronClass"
				/>
			</button>
		</div>
		<div
			class="transition-all duration-150 px-6 bg-white h-0"
			:class="opened && 'h-auto pt-6 pb-3'"
		>
			<div v-if="opened" class="flex flex-col">
				<span class="text-dark-blue text-xl font-bold">
					{{ office.contact.fullName }}
				</span>
				<span class="text-dark-blue text-base mt-1">
					{{ office.contact.jobPosition }}
				</span>
				<span class="text-base text-accent-blue mt-1">
					{{ office.contact.email }}
				</span>
				<span class="text-dark-blue text-base mt-2">
					{{ office.contact.phone }}
				</span>
				<div class="border-t border-light-grey b-t mt-4 mb-2" />
				<div class="flex justify-between">
					<TButton
						@click="$emit('edit')"
						text
						icon="Pencil"
						class="flex-row-reverse pl-0"
						small
					>
						<span class="ml-2">EDIT</span>
					</TButton>
					<TButton
						@click="$emit('remove')"
						text
						type="danger"
						icon="Delete"
						class="flex-row-reverse pr-0"
						small
					>
						<span class="ml-2">DELETE</span>
					</TButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";
import { Office } from "../models/index";

export default Vue.extend({
	props: {
		opened: Boolean,
		office: Object as PropType<Office>
	},
	computed: {
		headerClass() {
			return this.opened
				? "bg-primary-grey shadow-lg text-white"
				: "text-dark-blue";
		},
		chevronClass() {
			return this.opened ? "transform -rotate-180" : "text-accent-blue";
		}
	}
});
</script>
