import Vue from "vue";
import { mount } from "@vue/test-utils";

import BaseButton from "../components/base/BaseButton.vue";
import BaseInput from "../components/base/BaseInput.vue";
import TButton from "../components/ds/TButton.vue";
import TAlert from "../components/ds/TAlert.vue";
import OfficeCard from "../components/OfficeCard.vue";
import OfficeForm from "../components/OfficeForm.vue";
import OfficeList from "../components/OfficeList.vue";

Vue.component("BaseButton", BaseButton);
Vue.component("BaseInput", BaseInput);
Vue.component("TButton", TButton);
Vue.component("TAlert", TAlert);
Vue.component("OfficeCard", OfficeCard);
Vue.component("OfficeForm", OfficeForm);
Vue.component("OfficeList", OfficeList);

import HomePage from "../pages/index.vue";

describe("Test Home page", () => {
	let wrapper: any;
	beforeAll(async () => {
		wrapper = mount(HomePage, {
			stubs: {
				BaseIcon: true
			}
		});
		await wrapper.vm.$nextTick();
	});

	describe("when initiated", () => {
		it("should render an add office button", () => {
			expect(wrapper.find("#addOfficeButton").exists()).toBeTruthy();
		});

		it("should render an office cards", () => {
			expect(wrapper.findAll(".office-card").length).toBe(2);
		});

		it("should not appear an office form", () => {
			expect(wrapper.find("#OfficeForm").exists()).toBe(false);
		});

		describe("when add office button is clicked", () => {
			beforeAll(async () => {
				wrapper.find("#addOfficeButton").trigger("click");
				await wrapper.vm.$nextTick();
			});

			it("should appear an office form", () => {
				expect(wrapper.find("#OfficeForm").exists()).toBe(true);
			});

			it("should the submit button be disabled", () => {
				expect(
					wrapper
						.find("#OfficeForm")
						.findAll("button")
						.at(1).element.disabled
				).toBe(true);
			});

			describe("when the close button of the form is clicked", () => {
				beforeAll(async () => {
					wrapper.find("button").trigger("click");
					await wrapper.vm.$nextTick();
				});

				it("should not appear an office form", () => {
					expect(wrapper.find("#OfficeForm").exists()).toBe(false);
				});
			});
		});

		it("should not appear office card action buttons", () => {
			expect(wrapper.find(".office-card").findAll("button").length).toBe(
				1
			);
		});

		describe("when the card is collapsed", () => {
			beforeAll(async () => {
				wrapper.find(".office-card button").trigger("click");
				await wrapper.vm.$nextTick();
			});

			it("should appear office card action buttons", () => {
				expect(
					wrapper.find(".office-card").findAll("button").length
				).toBe(3);
			});

			it("should not appear an office form", () => {
				expect(wrapper.find("#OfficeForm").exists()).toBe(false);
			});

			describe("when the edit button is clicked", () => {
				beforeAll(async () => {
					wrapper
						.find(".office-card")
						.findAll("button")
						.at(1)
						.trigger("click");
					await wrapper.vm.$nextTick();
				});

				it("should appear an office form", () => {
					expect(wrapper.find("#OfficeForm").exists()).toBe(true);
				});

				it("should the submit button be enabled", () => {
					expect(
						wrapper
							.find("#OfficeForm")
							.findAll("button")
							.at(1).element.disabled
					).toBe(false);
				});
			});

			it("should not appear an alert message", () => {
				expect(wrapper.find("#Alert").props().visible).toBe(false);
			});

			describe("when the remove button is clicked", () => {
				beforeAll(async () => {
					wrapper.find("#OfficeForm button").trigger("click");
					await wrapper.vm.$nextTick();
					wrapper
						.find(".office-card")
						.findAll("button")
						.at(2)
						.trigger("click");
					await wrapper.vm.$nextTick();
				});

				it("should remove an office card", () => {
					expect(wrapper.findAll(".office-card").length).toBe(1);
				});

				it("should appear an alert message", () => {
					expect(wrapper.find("#Alert").props().visible).toBe(true);
				});
			});
		});
	});
});
