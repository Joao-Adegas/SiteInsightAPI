from langchain_community.document_loaders import WebBaseLoader
from langchain_groq import ChatGroq
from langchain.prompts import ChatPromptTemplate

from fastapi import FastAPI
from model import InputData
from dotenv import load_dotenv
import os

load_dotenv()
app = FastAPI()
api_key = os.getenv("GROQ_API_KEY")
os.environ['GROQ_API_KEY'] = api_key
chat = ChatGroq(model="llama-3.3-70b-versatile")

def formatar_url(url):
    url = url.strip()
    # Apenas imprime no console para você conferir
    print(f"URL original recebida: {url}")
    
    # Não altera nada se já for http(s)
    if url.startswith("http://") or url.startswith("https://"):
        return url.rstrip("/")
    
    # Caso não tenha o prefixo, adiciona https
    return f"https://{url}".rstrip("/")


@app.post("/")
def pesquisar_no_site(dados: InputData):
    url_formatada = formatar_url(dados.url)
    print(f"URL final usada no Loader: {url_formatada}")
    loader = WebBaseLoader(url_formatada)

    lista_documentos = loader.load()

    documento = ''.join(doc.page_content for doc in lista_documentos)

    template = ChatPromptTemplate.from_messages([
        ("system", "Você é um assistente amigável que tem acesso às seguintes informações: {documentos_informados}. Tente dar as informações de forma resumida, e tente ser mais direto ao ponto, dê a resposta no mínimo de linhas possíveis e apenas forneça detalhes se o usuário pedir."),
        ("user", "{input}")
    ])

    chain = template | chat
    resposta = chain.invoke({"documentos_informados": documento, "input": dados.prompt})

    return resposta.content
