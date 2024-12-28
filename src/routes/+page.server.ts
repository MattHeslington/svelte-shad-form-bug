import { superValidate } from "sveltekit-superforms";
import { formSchema } from "./settings/schema";
import { zod } from "sveltekit-superforms/adapters";

export const load = async () => {
	return {
		form: await superValidate(zod(formSchema)),
	};
};
