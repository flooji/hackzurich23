import openai
import glob
import json
openai.api_key = "KEY"
MODEL = "gpt-3.5-turbo"

def prompt_chatgpt(prompt, history=[]):
    completion = openai.ChatCompletion.create(model=MODEL, messages=history + [{"role": "user", "content": prompt}]
                                                         )
    return {"role": completion['choices'][0]['message']['role'], "content": completion['choices'][0]['message']['content']}


def get_suggestions(ingredient, product_list):
    suggestions = []
    for pro in product_list:
        if " " + ingredient.lower() + " " in pro['name'].lower():
            suggestions.append(pro)
    return suggestions if len(suggestions) > 0 else ingredient



if __name__ == "__main__":
    # shakshuka = prompt_chatgpt("Give me a Shaksuhka recipe.")
    # print(shakshuka['content'])
    # #
    # first_step = prompt_chatgpt(history=[shakshuka], prompt="Give me the first step instruction")
    # print(first_step['content'])
    # #
    # second_step = prompt_chatgpt(history=[shakshuka, first_step], prompt="Next step.")
    # print(second_step['content'])

    with open("/Users/matan/Documents/HackZurich23/Migros_case/products/all_products.json") as f:
        all_products = json.load(f)

    suggestions = get_suggestions("rice", all_products)
    print(suggestions)

