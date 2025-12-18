from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from openai import OpenAI
from dotenv import load_dotenv
import logging

load_dotenv()  # Charge .env

app = FastAPI()
logging.basicConfig(level=logging.INFO)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # En prod: restreindre à domaine frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
if not client.api_key:
    raise ValueError("OPENAI_API_KEY manquant dans .env")

class ExplainRequest(BaseModel):
    text: str

@app.post("/explain")
async def explain(req: ExplainRequest):
    try:
        prompt = """
Tu es un juriste malgache expert en droit civil.
Tu expliques les textes juridiques en malagasy simple, avec des exemples de la vie quotidienne.
Tu ne donnes pas de conseils illégaux.
Tu ajoutes toujours une mention de prudence à la fin.
Explique ce texte :
"""
        response = client.chat.completions.create(
            model="gpt-4o-mini",  # Ou gpt-4 pour mieux, mais coûteux
            messages=[
                {"role": "system", "content": prompt},
                {"role": "user", "content": req.text}
            ]
        )
        explanation = response.choices[0].message.content
        logging.info("Explication générée avec succès.")
        return {"explanation": explanation}
    except Exception as e:
        logging.error(f"Erreur OpenAI: {str(e)}")
        raise HTTPException(status_code=500, detail="Erreur lors de la génération de l'explication.")