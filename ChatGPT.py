import openai
openai.api_key = "KEY"
MODEL = "gpt-3.5-turbo"

def prompt_chatgpt(prompt, history=[]):
    completion = openai.ChatCompletion.create(model=MODEL, messages=history + [{"role": "user", "content": prompt}]
                                                         )
    return {"role": completion['choices'][0]['message']['role'], "content": completion['choices'][0]['message']['content']}

if __name__ == "__main__":
    shakshuka = prompt_chatgpt("Give me a Shaksuhka recipe.")
    print(shakshuka['content'])
    #
    first_step = prompt_chatgpt(history=[shakshuka], prompt="Give me the first step instruction")
    print(first_step['content'])
    #
    second_step = prompt_chatgpt(history=[shakshuka, first_step], prompt="Next step.")
    print(second_step['content'])