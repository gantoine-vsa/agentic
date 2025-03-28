import { z } from "zod";
import { streamText, generateObject, tool } from "ai";
// import { miniAzureModel as model } from "../shared/models.ts";
import {ollamaPhi4Model as model } from "../shared/models.ts";
// import { smallOpenAiModel as model } from "../shared/models.ts";

const askAQuestion = async (prompt: string) => {
	try {
		const firstResponse = await generateObject({
			model,
			prompt,
			system:
				"You are a first point of contact for a loan company. Your job is to turn client conversation into loan application.",
			schema: z.object({
				name: z.string(),
				loan_amount: z.number(),
				loan_time_in_months: z.number(),
				monthly_income: z.number(),
			}),
		});

		console.dir(firstResponse.object, { depth: null });

		const gateResponse = await generateObject({
			model,
			system: `You are a loan specialist. Based on the given json file with client data, your job is to decide if a client can be further processed.
      Maximum loan amount you can approved is 5000$,
      Loan amount cannot exceed the persons monthly income.`,
			schema: z.object({
				is_client_accepted: z.boolean(),
				denial_reason: z
					.string()
					.optional()
					.describe("If client is rejected, you need to give a reason."),
			}),
			messages: [
				{ role: "user", content: JSON.stringify(firstResponse.object) },
			],
		});

		console.log(gateResponse.object);
	} catch (e) {
		console.error(e);
	}
};

// await askAQuestion(
// 	`Hi! My name is Kewin. I'd like to ask for a loan. I need 2000$. I can pay it back in a year. My salary is 3000$ a month`,
// ).catch(console.error);

await askAQuestion(
	`Hi! My name is Kewin. I'd like to ask for a loan. I need 5001$. I can pay it back in a year. My salary is 3000$ a month`,
).catch(console.error);
