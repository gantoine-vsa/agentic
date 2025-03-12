import { z } from "zod";
import { streamText, generateText, tool } from "ai";
import { smallOpenAiModel as model } from "../shared/models.ts";
// import { ollamaLlama2Model as model } from "../shared/models.ts";
// import {ollamaPhi4Model as model } from "../shared/models.ts";
// import { lmsDefaultAIModel as model } from "../shared/models.ts";

const getWeatherTool = tool({
	description: "Get the current weather in the specified city",
	parameters: z.object({
		city: z.string().describe("The city to get the weather for"),
	}),
	execute: async ({ city }) => {
		return `The weather in ${city} is ${72 + Math.floor(Math.random() * 21) - 10}°F and sunny.`;
	},
});

const getAttractionsTool = tool({
	description: "Get the attractions in a location",
	parameters: z.object({
		location: z.string().describe("The location to get the attractions for"),
		temperature: z.number().describe("The current temperature in Fahrenheit"),
	}),
	execute: async ({ location, temperature }) => {
		const result = await generateText({
			model,
			prompt:
				"What are 3 attractions in ${location} that I should see given it is ${temperature}°F outside?",
		});
		return result.text;
	},
});

const askAQuestion = async (prompt: string) => {
	try {
		// HINT: you can use either `textStream` or `steps` at a time
		const { textStream, steps } = await streamText({
			model,
			prompt,
			tools: {
				getWeather: getWeatherTool,
				getAttractions: getAttractionsTool,
			},
			maxSteps: 5, // comment this to make it non-agent
			maxRetries: 1, // immediately error if the server is not running (recommended for local models)
		});

		// console.dir(await steps, { depth: null });  // un-comment this line and comment the next bock to see the steps
		for await (const text of textStream) {
			process.stdout.write(text);
		}
	} catch (e) {
		console.error(e);
	}
};

await askAQuestion(`What's the weather in Los Angeles?`).catch(console.error);

// await askAQuestion(`What's the weather in Los Angeles and what should I do?`).catch(console.error);
