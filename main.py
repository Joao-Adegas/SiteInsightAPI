from langchain_community.document_loaders import WebBaseLoader # Carrega o conteúdo de uma página da web.
from langchain_groq import ChatGroq
from langchain.prompts import ChatPromptTemplate

from fastapi import FastAPI

from model import InputData
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()
api_key = os.getenv("api_key")
os.environ['GROQ_API_KEY'] = api_key
chat = ChatGroq(model="llama-3.3-70b-versatile")


@app.post("/")
def pesquisar_no_site(dados:InputData):

    
    loader = WebBaseLoader(f"https://{dados.url}/") # passando a URL do site que deve ser analisado
   
    lista_documentos = loader.load() # carregando o conteudo da página que foi passada

    # concatenando o conteúdo das páginas carregadas em uma única string 
    documento = ''
    for doc in lista_documentos:
        documento = documento + doc.page_content

    template = ChatPromptTemplate.from_messages([
        ("system","Você é um assistente amigável que tem acesso as seguintes informações para dar suas respostas.: {documentos_informados}. Tente dar as informações de forma resumida, e tente ser mais direto ao ponto)"),
        ("user",'{input}')
    ])

    chain = template | chat
    resposta = chain.invoke({"documentos_informados":documento,"input":f"{dados.prompt}"})
    # print(resposta.content)
    return resposta.content
  
