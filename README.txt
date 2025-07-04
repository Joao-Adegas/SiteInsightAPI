This is an API where the user can enter a URL and provide a prompt (requesting some information related to the URL). Langchain will analyze the page and return the requested information based on the prompt.
exemplos de entrada em Json: 

INPUT: 
{
	"url":"youtube.com",
	"prompt":"Me fale videos para aprender a investir meu dinheiro."
}

OUTPUT: "There are many YouTube channels that offer quality content on investments. Here are some channels and videos that might be useful:\n\n Investor Channel: Provides tips and strategies for investing in stocks, funds, and other assets.\n* Smart Investments: Covers topics such as financial planning, real estate investments, and cryptocurrencies.\n* Investment Lessons: Offers practical lessons on stock investing, options, and futures.\n* Financial Education: Provides videos on financial planning, budgeting, and investments.\n\nSome specific videos that may be useful include:\n\n* \"How to Start Investing in Stocks\" (Investor Channel)\n* \"5 Tips for Investing in Cryptocurrencies\" (Smart Investments)\n* \"The Ultimate Guide to Investing in Funds\" (Investment Lessons)\n* \"How to Create a Personalized Investment Plan\" (Financial Education)\n\nRemember, it is important to do your own research and not invest in anything you don’t fully understand. Additionally, it is always advisable to consult a financial professional before making investment decisions."*

Notices:

If you want, you can make this API fetch data from a single site without needing to enter the URL manually. Simply replace the site URL here with the dados.url variable:

loader = WebBaseLoader(f"https://{dados.url}/") # Passing the site URL to be analyzed

URLs I Have Already Tested:

ge.globo.com - A sports news website