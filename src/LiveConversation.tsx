import {useState, useEffect} from "react";
import "./App.css";
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const starterPrompt =
    'From now on you are my private chef instructor. I will provide you a recipe, and you will break it to a few steps of cooking: every time I ask for a step, give me an instruction and wait until I ask a new one (do not give me a few instruction in one time, wait for me to do them first). I want you to talk to me in a style (or "accent") of the origin of the dish (e.g. for pizza, talk to me in Italian style). Be very concise and provide short instructions.';
const shortRecipe = `
The recipe is the following.
Ingredients:

350 g (12 oz) of spaghetti
200 g (7 oz) of guanciale
4 whole medium eggs (1 egg per serving)
100 g (1 cup + 1 tablespoon) of grated Pecorino Romano
Ground black pepper
Instructions:

First, boil the water for the pasta while you prepare the carbonara sauce. Use 1 liter (4 cups) of water for every 100 g (3.50 oz) of pasta and add 10 g (~1/2 tablespoon) of coarse salt per liter (4 cups) of water.

Cut the guanciale into small pieces (cubes, slices, as you prefer) then cook it in a skillet over medium heat for about 2 to 3 minutes. Stir occasionally to ensure even cooking. The more the guanciale cooks, the more its fat will melt and its meat will become crispy. The level of cooking is up to your taste—some prefer well-cooked guanciale, while others prefer it soft. No need for oil, as guanciale is already fatty.

Optionally, you can add a tablespoon of cooking water to the guanciale and emulsify, creating a flavorful sauce to season the spaghetti. When it's ready, turn off the heat, cover it with a lid, and set it aside.

Now, prepare the pecorino cream. In a bowl, combine the whole eggs and pecorino Romano cheese. Use the entire egg, not just the egg yolk. Pecorino Romano is salty and flavorful, so there's no need to add salt.

Add some freshly ground black pepper to the mixture and quickly mix it with a fork or hand whisk until you have a creamy sauce. The sauce should be quite thick, so set it aside for the moment.

Boil the spaghetti in the salted water. Make sure the pot is large enough to accommodate the spaghetti without breaking them. The goal is to cook the spaghetti al dente, following the cooking time found on the pasta package.

Drain the cooked spaghetti using a spoon for spaghetti, then place them in the skillet with the cooked guanciale over high heat. This is a crucial moment in the preparation. Turn off the heat to avoid overcooking the eggs, as you don't want scrambled eggs.

Quickly add the eggs and pecorino cream to the hot pasta and stir. The pan should not be too hot to prevent lumps from forming. Pay attention to the consistency, which should be creamy but not runny. Adjust the texture by adding grated pecorino cheese if it's too runny or a bit of cooking water if it's too sticky and dense.

Authentic spaghetti carbonara is ready. Create a pasta nest using a ladle and a fork, place it on a plate, and garnish with the remaining guanciale, freshly ground black pepper, and grated pecorino Romano to taste.

END OF RECIPE. Start by telling me all the ingredients and waiting for me to say I'm ready to start`;
const starterPrompt2 = `
This is the recipe, prepare yourself to my request for the first step:
Spaghetti Carbonara, one of the most famous Pasta Recipes of Roman Cuisine, is made only with 5 simple ingredients: spaghetti seasoned with browned guanciale, black pepper, pecorino Romano and beaten eggs.

In the authentic Italian recipe for carbonara, the ingredients are very few and of excellent quality. The high quality of ingredients is a necessary condition for the success of this recipe.

In spite of many beliefs, the ingredients of the traditional recipe are only 5: guanciale, pecorino Romano, eggs, pepper and spaghetti. To make the best carbonara of your life, you don’t need any other ingredients, so

DO NOT USE garlic, parsley, onion, cream, milk, parmigiano, pancetta, bacon.

spaghetti carbonara authentic italian recipe

If you read this recipe carefully, you will see that there are many Pasta Carbonara variants, even here in Italy, but they are…variations of the authentic recipe. Which is very simple and quick to make.

The only difficulty is to make sure that the eggs don’t cook so much to look like scrambled eggs or too little to be raw and cold.

There are a few tricks to make a perfect carbonara that we are going to show you, so read on!
Carbonara Recipe

    Prep Time: 20 Min
    Cook Time:10 Min
    Servings: 4

Ingredients

    350 g (12 oz) of spaghetti
    200 g (7 oz) of guanciale
    4 whole medium eggs (1 egg per serving)
    100 g (1 cup + 1 tablespoon) of grated Pecorino Romano. We recommend this authentic Italian Pecorino Romano DOP
    ground black pepper

Directions

spaghetti carbonara authentic italian recipe step 1

Step 1) – First, boil the water for the pasta while you prepare the carbonara sauce. Remember: 1 liter (4 cups) of water for every 100 g (3,50 oz) of pasta and 10 g (~1/2 tablespoon) of coarse salt per liter (4 cups) of water.

Cut the guanciale into small pieces (cubes, slices… as you prefer) then cook in a skillet over medium heat for about 2 to 3 minutes. Stir occasionally so that it cooks evenly. The more the guanciale cooks, the more its fat will melt and its meat will become crispy. The level of cooking is up to you, depending on your taste. Some people like their guanciale well cooked and others prefer it soft.

No need for oil: guanciale is already fatty, oily and fabulous on its own. If you want, you can add a tablespoon of cooking water and emulsify. This will create a great oily sauce to season the spaghetti nicely. When it’s ready, turn off the heat, cover with a lid and set aside.

spaghetti carbonara authentic italian recipe step 2

Step 2) – Now prepare the pecorino cream. So, in a bowl put the eggs and pecorino Romano cheese. Use the whole egg, not only the egg yolk.

Pecorino Romano, the only cheese that is recommended for making carbonara, is a very salty and flavorful Italian cheese so there is no need to add salt.
Watch the Video! How to Make Authentic Italian Carbonara Recipe
Traditional Spaghetti Carbonara (Authentic Recipe)

spaghetti carbonara authentic italian recipe step 3-min

Step 3) – Add some freshly ground black pepper. Then, mix quickly with a fork – or a hand whisk – until you have a creamy sauce.

spaghetti carbonara authentic italian recipe step 4

Step 4) – This egg and pecorino cheese sauce should be quite thick. Set it aside for the moment.

The water should now be boiling so add the salt and cook the spaghetti.

If you chose a fairly large pot, the spaghetti should fit comfortably without breaking them. Whole, unbroken spaghetti is best, so you can more easily roll them around the tines of your fork without the help of a spoon. #eatlikeanitalian

The best way to cook spaghetti without breaking it’s to hold them in a bunch vertically and dip in the salted water.

spaghetti carbonara authentic italian recipe step 5

Step 5) – Now let go and they will fall in all directions. As they soften, use a fork to let them sink in, then stir.

Cook the spaghetti al dente, following the cooking time found on the pasta package.

spaghetti carbonara authentic italian recipe step 6

Step 6) – Using a spoon for spaghetti, drain the pasta when ready. Then place them in the skillet, over high heat, to season well with the guanciale.

At this step, we have reached the crucial moment of spaghetti carbonara. Not to put tension on it, but this is the fleeting moment in which you can make an immortal dish or one that will be a real failure. So now you have to be quick, ready and ruthless.

Here’s how to do it:

spaghetti carbonara authentic italian recipe step 7

Step 7) – When the spaghetti and guanciale sizzle in the pan, TURN OFF THE HEAT, otherwise the eggs will overcook and you’ll end up with scrambled eggs and pasta!

Now quickly add the eggs and pecorino cream to the hot pasta and stir. The pan is not too hot, this way the eggs will cook without lumps.

Pay attention to the consistency, which should be creamy, but not runny.

If you notice that your carbonara is too runny, add some grated pecorino cheese.

On the other hand, if you see that it’s too sticky and dense, add 1 or 2 tablespoons of cooking water.

If you used a spoon to drain the spaghetti, the reserving pasta water may come in handy in this step.

spaghetti carbonara authentic italian recipe step 8

Step 6) – Authentic spaghetti carbonara is ready. So, with the help of a ladle and a fork, create a pasta nest and place it on a plate.

spaghetti carbonara authentic italian recipe step 9

Step 7) – Add the guanciale (what’s left in the pan), freshly ground black pepper and grated pecorino romano to taste. Serve and enjoy!

See also:

    Marinara Sauce
    Amatriciana
    Spaghetti with Clams

How to Store Carbonara

Serve Spaghetti carbonara immeditely, hot and tasty as they are. We do not recommend storing carbonara leftovers in the refrigerator or freezer for the following days.

Make the carbonara and enjoy it freshly made!

spaghetti carbonara authentic italian recipe
Guanciale or Pancetta?

You should not use pancetta in carbonara. Guanciale is pure magic and if you remove its golden fat, carbonara becomes flat and dull. The reason is the intrinsic quality of the ingredients: guanciale has flavor and fat, pancetta is drier.

Guanciale is an Italian cured meat product made with pork jowl or cheeks. Its name comes from guancia, Italian for cheek, sometimes translated with pork cheek lard or jowl bacon. Salted and peppered, it’s left to mature for 3 months.

Today we’ve shown you the traditional Roman recipe of spaghetti carbonara, where the guanciale is the top ingredient. In fact, the taste, the fat, we could say the juice of the seasoning comes from this little jewel of Italian culinary art.

Many people use pancetta in pasta carbonara. Sometimes because it’s easier to find it on the market. But more often they use it because guanciale is a rather fat meat and there is no doubt that it’s a hyper caloric ingredient.

Spaghetti carbonara with pancetta is a variation of the traditional recipe.

spaghetti carbonara authentic italian recipe guanciale
Pecorino Romano or Parmigiano Reggiano?

The traditional recipe of spaghetti alla carbonara is an Italian recipe whose origins are from Lazio.

The recipe calls for pecorino romano because it’s a cheese born in Lazio, while Parmigiano reggiano belongs to another region: Emilia Romagna. So you can definitely use Parmigiano Reggiano in your carbonara, but know that it’s a variation of the classic pasta carbonara.

As with all the dishes of traditional Italian cuisine, there are several variations to the Spaghetti Carbonara authentic recipe. Now we’ll show you some of these variations: what to add and what to take away from the traditional ingredients and why.
Carbonara Recipe: Some Variations

Every traditional recipe has many variations, and this is also true for carbonara. In every variation there can be the addition or substitution of one or more ingredients. Let’s see some of them:
Carbonara with Cream

Many people like to make carbonara with cream, made by replacing 1 egg with 1 dl (about 1/2 cup) of heavy cream. For them, the dish is creamier and has a less pronounced egg flavor.

Well, you shouldn’t use whipping cream to make the dish creamier. For the simple reason that the fat from the guanciale, the cheese and the eggs are already quite creamy and heavy by nature. So adding the cream would only make the dish heavier and more cloying.

On the other hand, it’s true that if you’re making large quantities of pasta (say, for 10 people), a dash of heavy cream can help make the sauce more fluid. But it must remain a secret. And it’s a makeshift solution. Tricks in the kitchen, but only for desperate times!
Pasta Carbonara with Parmigiano

Even for what concerns the cheese, there are those who use Parmigiano cheese instead of Pecorino Romano or half Parmigiano cheese and half Pecorino Romano. In this case the taste becomes less strong and flavorful (pecorino Romano is a very tasty cheese). Allowed.
Carbonara with Pancetta

Guanciale, which comes from the cheek of the pork, can be replaced with pancetta, which instead comes from the fatty part of the belly pork. Pancetta is drier and less fat. If you use pancetta (possibly not smoked), add a tablespoon of oil to fry it. 
Spaghetti Carbonara with Garlic or Onion

Many people like to simmer the guanciale with a clove of garlic or a little onion. We don’t know…carbonara tastes a lot of onion and garlic…another recipe for another time.
Carbonara with Parsley

DO NOT put parsley everywhere…

spaghetti carbonara authentic italian recipe
Pasta Carbonara: Origins

Pasta Carbonara is a Roman recipe but it surely is a recent one, since it has been heard of it only after the Second World War. Its origin is somewhat controversial, and there are at least three plausible theories.

Pasta dishes seasoned with products of pastoralism and agriculture (such as eggs and pancetta or lard) were common in the Abruzzo mountains. It seems that some displaced people have discovered them and brought to Rome at the end of the Second World War.

A second hypothesis says that in the Roman taverns the owners seasoned the pasta with Carbonara Sauce to feed the American soldiers because they knew that at breakfast they ate eggs and bacon. Given the success, the recipe has spread.

The third hypothesis says that Pasta Carbonara was prepared in the Roman taverns all along, but only after the Second World War the recipe became known to the general public, because it came into the printed cookbooks.

Now you know all the tricks to make a perfect carbonara recipe. So come on! Let’s start cooking!

Now list the ingredients I should buy (in two python lists, names: ingredients_names, and descriptions: ingredients_descriptions), and wait until I ask you for the first step. When i say "step", I mean "instruction". One by one!`;

const LiveConversation = (props: any) => {
    const [messages, setMessages] = useState([
        {
            message: "Ready to cook? Say 'Okay Chef' to start and then ask about the recipe!",
            sentTime: "just now",
            sender: "ChatGPT",
            //direction: 1, //  "incoming" | "outgoing" | 0 | 1
            //position: "single", // "single" | "first" | "normal" | "last" | 0 | 1 | 2 | 3
        },
    ]);
    const [isTyping, setIsTyping] = useState(false);

    // When mounts for the first time, send context to ChatGPT
    useEffect(() => {
        const starterPrompt =
            'From now on you are my private chef instructor. I will provide you a recipe, and you will break it to a few steps of cooking: every time I ask for a step, give me an instruction and wait until I ask a new one (do not give me a few instruction in one time, wait for me to do them first). I want you to talk to me in a style (or "accent") of the origin of the dish (e.g. for pizza, talk to me in Italian style). Be very concise and provide short instructions.';
        console.log("UseEffect");

        // Do the other two prompts
        //handleSendRequest(starterPrompt2);
    }, []);

    // If the prompt is not empty, call API
    useEffect(() => {
        if (props.prompt !== "") {
            handleSendRequest(props.prompt);
        }
    }, [props.prompt]);

    const handleSendRequest = async (message: any) => {
        const newMessage = {
            message,
            direction: "outgoing",
            sender: "user",
        };

        setMessages((prevMessages: any) => [...prevMessages, newMessage]);
        setIsTyping(true);

        try {
            const response = await processMessageToChatGPT([...messages, newMessage]);
            const content = response.choices[0]?.message?.content;
            if (content) {
                const chatGPTResponse = {
                    message: content,
                    sender: "ChatGPT",
                };
                setMessages((prevMessages: any) => [...prevMessages, chatGPTResponse]);
            }
        } catch (error) {
            console.error("Error processing message:", error);
        } finally {
            setIsTyping(false);
        }
    };

    async function processMessageToChatGPT(chatMessages: any) {
        const apiMessages = chatMessages.map((messageObject: any) => {
            const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
            return {role, content: messageObject.message};
        });

        const apiRequestBody = {
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: starterPrompt + shortRecipe,
                },
                ...apiMessages,
            ],
        };

        const response = await fetch("https://api.openai.com/v1/chat/completions", {
            method: "POST",
            headers: {
                Authorization: "Bearer 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",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(apiRequestBody),
        });

        return response.json();
    }

    return (
        <div className="w-full h-full p-4 flex flex-col items-center">
            <div
                className="flex flex-col border-2 border-orange-500 items-center w-full md:w-1/2 h-96 overflow-y-scroll backdrop-blur-lg bg-opacity-40 text-white rounded-md m-4 p-2 md:p-4 text-xl md:text-2xl">
                {messages.map((message, i) => {
                    if (message.sender === "ChatGPT") {
                        // TODO skip the two messages
                        return (
                            <span>
                                {message.message}
                            </span>
                        );
                    }
                })}
            </div>
        </div>
    );
};

export default LiveConversation;
