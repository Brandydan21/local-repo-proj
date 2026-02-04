from fastapi import FastAPI
from backend.api import pypi

app = FastAPI(title="Local Package Registry")


@app.get("/")
def root():
    return {
        "status": "ok",
    }

app.include_router(pypi.router, prefix="/pypi")
# app.include_router(npm.router, prefix="/npm")


