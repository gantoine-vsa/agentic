import { openai } from "@ai-sdk/openai"; // Ensure OPENAI_API_KEY environment variable is set in .env
import { ollama } from "ollama-ai-provider";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";

/**
 * Remote Models
 */

export const smallOpenAiModel = openai("gpt-4o-mini");

/**
 * Local Models
 */

// Ollama Models
export const ollamaLlama2Model = ollama("llama2");
export const ollamaDeepseekAIModel = ollama("deepseek-r1:7b");

// LMStudio Models
const lmstudio = createOpenAICompatible({
	name: "lmstudio",
	baseURL: "http://localhost:1234/v1",
});

export const lmsQwenAIModel = lmstudio("qwen2.5-7b-instruct-mlx"); // function calling working
export const lmsDeepseekR1AIModel = lmstudio("deepseek-r1-distill-qwen-7b"); // function calling not working partially
export const lmsPixtralAIModel = lmstudio("pixtral-12b"); // function calling not working
export const lmsDefaultAIModel = lmstudio(""); // default model loaded in LMS

/**
 * Embedding Models
 */
export const ollamaEmbeddingModel = openai.embedding("text-embedding-3-small");
export const lmsEmbeddingModel = lmstudio.textEmbeddingModel(
	"text-embedding-nomic-embed-text-v1.5",
);
