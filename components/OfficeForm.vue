<template>
	<div
		class="shadow-lg rounded-lg overflow-auto overflow-y-hidden px-6 pb-6 bg-white"
	>
		<div class="flex justify-between py-4 mb-4">
			<span class="text-dark-blue font-bold">
				{{ office ? "EDit Location" : "New Location" }}
			</span>
			<button @click="$emit('close')">
				<BaseIcon icon="Close" class="text-primary-grey" />
			</button>
		</div>
		<div class="flex flex-col mt-1">
			<label for="title" class="text-dark-blue mb-1">Title *</label>
			<BaseInput
				:id="'title'"
				class="w-full"
				v-model="form.title.value"
				@valid="val => (form.title.valid = val)"
				:validators="[v => !!v || 'This field cannot be empty']"
				placeholder="Title"
			/>
		</div>

		<div class="flex flex-col mt-1">
			<label for="address" class="text-dark-blue mb-1">
				Enter the address *
			</label>
			<BaseInput
				:id="'address'"
				class="w-full"
				v-model="form.address.value"
				@valid="val => (form.address.valid = val)"
				:validators="[v => !!v || 'This field cannot be empty']"
				placeholder="Address"
			/>
		</div>

		<div class="mt-3">
			<span class="text-accent-blue uppercase text-sm">
				Contact Information
			</span>
		</div>
		<div class="border-t border-light-grey b-t mt-4 mb-4" />

		<div class="flex flex-col">
			<label for="fullName" class="text-dark-blue mb-1">
				Full name *
			</label>
			<BaseInput
				:id="'fullName'"
				class="w-full"
				v-model="form.fullName.value"
				@valid="val => (form.fullName.valid = val)"
				:validators="[v => !!v || 'This field cannot be empty']"
				placeholder="Full name"
			/>
		</div>

		<div class="flex flex-col mt-1">
			<label for="jobPosition" class="text-dark-blue mb-1">
				Job position *
			</label>
			<BaseInput
				:id="'jobPosition'"
				class="w-full"
				v-model="form.jobPosition.value"
				@valid="val => (form.jobPosition.valid = val)"
				:validators="[v => !!v || 'This field cannot be empty']"
				placeholder="Job Position"
			/>
		</div>

		<div class="flex flex-col mt-1">
			<label for="email" class="text-dark-blue mb-1">
				Email address *
			</label>
			<BaseInput
				:id="'email'"
				type="email"
				class="w-full"
				v-model="form.email.value"
				@valid="val => (form.email.valid = val)"
				:validators="[v => !!v || 'This field cannot be empty']"
				placeholder="Email"
			/>
		</div>

		<div class="flex flex-col mt-1">
			<label for="phone" class="text-dark-blue mb-1">
				Phone *
			</label>
			<BaseInput
				:id="'phone'"
				type="phone"
				class="w-full"
				v-model="form.phone.value"
				@valid="val => (form.phone.valid = val)"
				:validators="[v => !!v || 'This field cannot be empty']"
				placeholder="(xxx) xxx-xxxx"
			/>
		</div>

		<TButton
			class="mt-1 w-24 justify-center"
			:disabled="!isValidForm"
			type="primary"
			@click="onSubmit"
		>
			Save
		</TButton>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import BaseInput from "./base/BaseInput.vue";
import BaseIcon from "./base/BaseIcon.vue";
import TButton from "./ds/TButton.vue";
import { Office } from "../models/index";

export default Vue.extend({
	components: { BaseInput, BaseIcon, TButton },
	props: {
		office: {
			type: Object as PropType<Office>,
			required: false
		}
	},
	data() {
		return {
			form: {
				title: {
					value: this.office && this.office.title,
					valid: false
				},
				address: {
					value: this.office && this.office.address,
					valid: false
				},
				fullName: {
					value: this.office && this.office.contact.fullName,
					valid: false
				},
				jobPosition: {
					value: this.office && this.office.contact.jobPosition,
					valid: false
				},
				email: {
					value: this.office && this.office.contact.email,
					valid: false
				},
				phone: {
					value: this.office && this.office.contact.phone,
					valid: false
				}
			}
		};
	},
	computed: {
		isValidForm(): boolean {
			return (
				this.form.title.valid &&
				this.form.address.valid &&
				this.form.fullName.valid &&
				this.form.jobPosition.valid &&
				this.form.email.valid &&
				this.form.phone.valid
			);
		}
	},
	methods: {
		onSubmit() {
			this.$emit("save", {
				title: this.form.title.value,
				address: this.form.address.value,
				contact: {
					fullName: this.form.fullName.value,
					jobPosition: this.form.jobPosition.value,
					email: this.form.email.value,
					phone: this.form.phone.value
				}
			} as Office);
		}
	}
});
</script>
