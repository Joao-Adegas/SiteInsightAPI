from pydantic import BaseModel

class InputData(BaseModel):
    url:str
    prompt:str