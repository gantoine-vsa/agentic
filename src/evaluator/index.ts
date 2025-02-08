import { generateText, generateObject, type CoreMessage } from "ai";
import { z } from "zod";
import { smallOpenAiModel as model } from "../shared/models.ts";
// import { lmsDefaultAIModel as model} from "../shared/models.ts";

let satisfied = false;
let repetitions = 0;

const messages: CoreMessage[] = [
	{ role: "user", content: "Let's see your first draft!" },
];

while (!satisfied && repetitions < 6) {
	const kewinsArticle = await generateText({
		model,
		system: `You are a writer. You write articles about AI.
            Your task is to write an article about AI agents, and to do it in only 5 sentences!
            You might get additional feedback from your supervisor!`,
		messages,
	});

	messages.push({ role: "assistant", content: kewinsArticle.text });

	const supervisorFeedback = await generateObject({
		model,
		system: `
	    You are a writers supervisor! Your agency specializes in 5 sentence long articles!
      Your task is to evaluate given work, and provide feedback for improvements!
      Repeat for as long as the article doesn't satisfy your requirements!
    `,
		schema: z.object({
			feedback: z.string(),
			satisfied: z.boolean(),
		}),
		messages,
	});

	if (supervisorFeedback.object.satisfied) {
		satisfied = true;
	}

	messages.push({ role: "user", content: supervisorFeedback.object.feedback });

	repetitions = ++repetitions;
	console.log(`satisfied: ${satisfied}`);
}

console.log(messages);
