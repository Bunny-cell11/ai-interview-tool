class LLMBase:
    def chat(self, system_prompt: str, user_prompt: str) -> str:
        raise NotImplementedError

