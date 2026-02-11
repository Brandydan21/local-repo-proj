```
local-package-registry/
│
├── backend/
│   ├── app/
│   │   ├── main.py                 # FastAPI entry point
│   │   │
│   │   ├── core/                   # App-wide configuration & startup
│   │   │   ├── config.py           # Paths, settings, env vars
│   │   │   └── logging.py
│   │   │
│   │   ├── api/                    # HTTP route definitions
│   │   │   ├── __init__.py
│   │   │   ├── pypi.py             # PyPI proxy endpoints
│   │   │   ├── npm.py              # npm proxy endpoints
│   │   │   ├── packages.py         # UI-facing package APIs
│   │   │   └── health.py
│   │   │
│   │   ├── services/               # Core business logic
│   │   │   ├── __init__.py
│   │   │   ├── pypi_mirror.py       # PyPI fetch + cache logic
│   │   │   ├── npm_mirror.py        # npm fetch + cache logic
│   │   │   ├── storage.py           # Unified storage abstraction
│   │   │   └── integrity.py         # Hash / checksum verification
│   │   │
│   │   ├── models/                 # Database models (later)
│   │   │   ├── __init__.py
│   │   │   └── package.py
│   │   │
│   │   ├── db/                     # Database setup
│   │   │   ├── base.py
│   │   │   └── session.py
│   │   │
│   │   ├── tasks/                  # Background jobs
│   │   │   ├── mirror.py            # Prefetch / bulk mirror jobs
│   │   │   └── cleanup.py           # Cache eviction
│   │   │
│   │   └── utils/
│   │       └── paths.py
│   │
│   ├── requirements.txt
│   └── README.md
│
├── frontend/
│   ├── src/
│   │   ├── api/                    # API client wrappers
│   │   ├── pages/                  # UI pages
│   │   ├── components/
│   │   ├── hooks/
│   │   └── main.tsx
│   │
│   ├── public/
│   ├── index.html
│   └── package.json
│
├── storage/                        # Local registry storage
│   ├── pypi/
│   │   ├── simple/
│   │   │   └── requests/
│   │   └── packages/
│   │       └── requests-2.32.3.whl
│   │
│   └── npm/
│       ├── metadata/
│       └── tarballs/
│
├── scripts/                        # Dev & admin scripts
│   ├── mirror_pypi.py
│   └── mirror_npm.py
│
├── .gitignore
├── README.md
└── docker/                         # (empty for now – later)
```


## Start db 
```
$ podman-compose -f compose.postgres.yml up -d
$ podman exec -it postgres_db bin/bash    
$  psql -U pypi -d pypi
```

## Run backend
- create .env
```
POSTGRES_USER=pypi
POSTGRES_PASSWORD=pypi
POSTGRES_DB=pypi
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
```
- run in project root
```
$ python -m uvicorn backend.main:app --reload
```

## Run frontend 

```
$ cd frontend
$ npm run dev
```