export type AIProvider = "openai" | "anthropic" | "gemini";

export type AIRequest = {
  system?: string;
  prompt: string;
  imageUrls?: string[];
};

export type AIResponse = {
  provider: AIProvider;
  text: string;
  model: string;
};

export interface AIAdapter {
  generate(request: AIRequest): Promise<AIResponse>;
}
