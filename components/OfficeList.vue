<template>
	<div class="flex flex-col">
		<TAlert
			icon="Check"
			:message="alertMessage"
			:visible="alertVisible"
			@close="alertVisible = false"
		/>
		<div v-for="(office, index) in officesData" :key="`office${index}`">
			<div v-if="office" class="mb-6">
				<transition name="fade" mode="out-in">
					<OfficeCard
						:office="office"
						:opened="office.opened"
						@collapse="office.opened = !office.opened"
						@edit="office.editing = true"
						@remove="() => onRemove(index)"
						v-if="!office.editing"
						key="card"
					/>
					<OfficeForm
						v-else
						:office="office"
						@save="officeArg => onSaveOffice(officeArg, index)"
						@close="office.editing = false"
						key="form"
					/>
				</transition>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

import { Office } from "../models/index";

export default Vue.extend({
	props: {
		offices: {
			type: Array as PropType<Office[]>,
			default: () => []
		}
	},
	data() {
		return {
			officesData: this.offices.map(office => ({
				...office,
				opened: false,
				editing: false
			})),
			alertVisible: false,
			alertMessage: ""
		};
	},
	methods: {
		onSaveOffice(office: Office, index: number) {
			const newOfficeData = [...this.officesData];
			newOfficeData[index] = {
				...office,
				opened: true,
				editing: false
			};
			this.officesData = newOfficeData;
			this.alertMessage = "The location has been updated";
			this.alertVisible = true;
		},
		onRemove(index: number) {
			const newOfficeData = [...this.officesData];
			delete newOfficeData[index];
			this.officesData = newOfficeData;
			this.alertMessage = "The location has been deleted";
			this.alertVisible = true;
		}
	},
	watch: {
		offices(val) {
			this.officesData = val.map((office: Office) => ({
				...office,
				opened: false,
				editing: false
			}));
		}
	}
});
</script>
