#### This is an API where the user can enter a URL and provide a prompt (requesting some information related to the URL). Langchain will analyze the page and return the requested information based on the prompt.

### Prerequisites:

- Create an API key on the Groq website: https://console.groq.com/keys
- Copy link 
- Add the archive ".env" in the project root
- In archive ".env" write: GROQ_API_KEY = "your_api_key"

### Replace your_api_key with your api key*
### Your api key must be inside the quotes " " 

### Example in JSON: 

#### INPUT: 
    {
        "url":"youtube.com",
        "prompt":"Tell me videos to learn how to invest my money. "
    }

#### OUTPUT: 
#### "There are many YouTube channels that offer quality content on investments. Here are some channels and videos that might be useful:\n\n Investor Channel: Provides tips and strategies for investing in stocks, funds, and other assets.\n* Smart Investments: Covers topics such as financial planning, real estate investments, and cryptocurrencies.\n* Investment Lessons: Offers practical lessons on stock investing, options, and futures.\n* Financial Education: Provides videos on financial planning, budgeting, and investments.\n\nSome specific videos that may be useful include:\n\n* \"How to Start Investing in Stocks\" (Investor Channel)\n* \"5 Tips for Investing in Cryptocurrencies\" (Smart Investments)\n* \"The Ultimate Guide to Investing in Funds\" (Investment Lessons)\n* \"How to Create a Personalized Investment Plan\" (Financial Education)\n\nRemember, it is important to do your own research and not invest in anything you don’t fully understand. Additionally, it is always advisable to consult a financial professional before making investment decisions."*

### Notices:

#### If you want, you can make this API fetch data from a single site without needing to enter the URL manually. Simply replace the site URL here with the dados.url variable:

    loader = WebBaseLoader(f"https://{dados.url}/") # Passing the site URL to be analyzed

#### URLs I Have Already Tested:

- ge.globo.com
- g1.globo.com

#### You can enter the url in two ways:

- ge.globo.com
- https://ge.globo.com/

## Tecnologys used
<p align="center">
  <img src="https://lginfo.com.br/site/wp-content/uploads/2023/10/Python-Symbol.png" alt="Python" width="150" style="margin-right: 15px; vertical-align: middle;">
  <img src="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/inference-providers/logos/groq-dark.png" alt="Groq" width="130" style="margin-right: 15px; vertical-align: middle;">
  <img src="https://www.infralovers.com/images/posts/ai-for-devops-engineers/langchain_logo.png" alt="LangChain" width="100" style="margin-right: 15px; vertical-align: middle;">
  <img src="https://pbs.twimg.com/profile_images/1564020481086332928/gQAP4h7g_400x400.png" alt="Outros" width="100" style="margin-right: 15px; vertical-align: middle;">
  <img src="https://assets.apidog.com/blog/2024/05/logo-teal-1.png" alt="Apidog" width="150" style="vertical-align: middle;">
</p>

## How to Start the Project
#### Enter the BackEnd Folder
    cd /SiteInsightAPI
### Instal the virtual enviroment
    python -m venv env
### Start the virtual enviroment
    ./env/Scripts/activate
### Install the libraries in archive "requirements.txt"
    pip install -r requirements.txt
### Start the project
    uvicorn main:app
### What you should see
    INFO:     Started server process [14168]
    INFO:     Waiting for application startup.
    INFO:     Application startup complete.
    INFO:     Uvicorn running on http://127.0.0.1:8000 (Press CTRL+C to quit)

# The Project is running !

