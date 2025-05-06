Esta e uma API , no qual o usuario pode colocar uma URL, e inserir um prompt ( pedir alguma informação em relação a URL )
O Langchain vai analisar a página e retornar o pedido de informação em relação ao prompt.

exemplos de entrada em Json: 

INPUT: 
{
	"url":"youtube.com",
	"prompt":"Me fale videos para aprender a investir meu dinheiro."
}

OUTPUT:

"Existem muitos canais no YouTube que oferecem conteúdo de qualidade sobre investimentos. Aqui estão alguns canais e vídeos que podem ser úteis:\n\n* **Canal do Investidor**: Oferece dicas e estratégias para investir em ações, fundos e outros ativos.\n* **Investimentos Inteligentes**: Aborda temas como planejamento financeiro, investimentos em imóveis e criptomoedas.\n* **Aulas de Investimento**: Fornece lições práticas sobre investimentos em ações, opções e futuros.\n* **Educação Financeira**: Oferece vídeos sobre planejamento financeiro, orçamento e investimentos.\n\nAlguns vídeos específicos que podem ser úteis incluem:\n\n* \"Como começar a investir em ações\" (Canal do Investidor)\n* \"5 dicas para investir em criptomoedas\" (Investimentos Inteligentes)\n* \"O guia definitivo para investir em fundos\" (Aulas de Investimento)\n* \"Como criar um plano de investimento personalizado\" (Educação Financeira)\n\nLembre-se de que é importante fazer sua própria pesquisa e não investir em nada que você não entenda completamente. Além disso, é sempre recomendável consultar um profissional financeiro antes de tomar decisões de investimento."


AVISOS:

se você quiser pode fazer essa api pegar dados de um unico site, sem precisar digitar a URL,
basta colocar o site aqui em troca da variavel dados.url:

loader = WebBaseLoader(f"https://{dados.url}/") # passando a URL do site que deve ser analisado

URL'S que eu ja testei 
	ge.globo.com - site de noticias de esportes
