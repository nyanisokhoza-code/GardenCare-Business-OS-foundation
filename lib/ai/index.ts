import type { AIAdapter, AIProvider, AIRequest, AIResponse } from "./provider-types";

class ConfiguredProvider implements AIAdapter {
  constructor(
    private provider: AIProvider,
    private envKey: string,
    private model: string
  ) {}

  async generate(request: AIRequest): Promise<AIResponse> {
    const key = process.env[this.envKey];
    if (!key) {
      throw new Error(`${this.provider} is not configured. Add ${this.envKey} to server environment variables.`);
    }

    // Provider-specific HTTP/SDK implementation belongs here.
    // Keys stay server-side; this adapter is never imported by browser components.
    return {
      provider: this.provider,
      model: this.model,
      text: `[${this.provider}] Adapter ready. Connect provider SDK/HTTP implementation next. Prompt length: ${request.prompt.length}.`
    };
  }
}

export function getAIAdapter(provider: AIProvider): AIAdapter {
  if (provider === "openai") return new ConfiguredProvider("openai", "OPENAI_API_KEY", "gpt-5");
  if (provider === "anthropic") return new ConfiguredProvider("anthropic", "ANTHROPIC_API_KEY", "claude-sonnet");
  return new ConfiguredProvider("gemini", "GEMINI_API_KEY", "gemini");
}
