from fastapi import FastAPI
from backend.api import pypi
from backend.models import Package
from backend.database import create_db_and_tables


app = FastAPI(title="Local Package Registry")

@app.on_event("startup")
def on_startup():
    create_db_and_tables()

@app.get("/")
def root():
    return {
        "status": "ok",
    }

app.include_router(pypi.router, prefix="/pypi")
# app.include_router(npm.router, prefix="/npm")


