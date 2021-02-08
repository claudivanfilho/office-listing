<template>
	<div class="font-lato">
		<div class="w-full flex justify-center h-screen">
			<div
				class="w-full md:w-104 flex flex-col justify-center items-center"
			>
				<div
					class="text-accent-blue text-6xl text-center mt-28 font-light"
				>
					Offices
				</div>
				<div
					class="overflow-y-auto flex flex-col items-center overflow-x-auto mt-12"
					style="height: calc(100vh - 180px)"
				>
					<div class="mb-6 px-3 w-full md:w-96">
						<transition name="fade" mode="out-in">
							<TButton
								:type="'primary'"
								icon="Plus"
								class="w-full justify-between"
								large
								@click="onCreate"
								v-if="!createMode"
							>
								Add New Location
							</TButton>
							<OfficeForm
								@save="onOfficeAdded"
								@close="createMode = false"
								v-else
							/>
						</transition>
					</div>
					<div class="px-3 pb-4 w-full md:w-96">
						<OfficeList :offices="offices" />
					</div>
				</div>
				<div class="flex flex-col items-center mt-3 mb-4">
					<span class="text-primary-grey">
						This project is for test purpose only.
					</span>
					<a
						href="www.dogandponystudios.com"
						class="text-accent-blue hover:underline"
					>
						www.dogandponystudios.com
					</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";

import TButton from "../components/ds/TButton.vue";
import OfficeList from "../components/OfficeList.vue";
import OfficeForm from "../components/OfficeForm.vue";
import { Office } from "../models/index";

export default Vue.extend({
	components: { OfficeList, TButton, OfficeForm },
	data() {
		return {
			open: false,
			createMode: false,
			offices: [
				{
					title: "Headquarters",
					address: "3763 W. Dallas St.",
					contact: {
						fullName: "Hellena John",
						jobPosition: "Software Tester",
						email: "georgia.young@example.com",
						phone: "(808) 555-0111"
					}
				} as Office,
				{
					title: "Headquarters 2",
					address: "2000 W. Dallas St.",
					contact: {
						fullName: "John Sena",
						jobPosition: "Software Developer",
						email: "john.sena@example.com",
						phone: "(123) 888-0111"
					}
				} as Office
			]
		};
	},
	methods: {
		onCreate() {
			this.createMode = true;
		},
		onOfficeAdded(office: Office) {
			console.log("jasda");
			this.offices.push(office);
			this.createMode = false;
		}
	}
});
</script>

<style>
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.2s ease;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
