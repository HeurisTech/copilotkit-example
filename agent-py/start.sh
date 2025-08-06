#!/bin/bash
set -e

echo "Starting FastAPI application..."

# Run the application with proper production settings
exec gunicorn tutorial_customer_support.demo:app \
    --bind 0.0.0.0:${PORT:-8000} \
    --workers ${WORKERS:-1} \
    --worker-class uvicorn.workers.UvicornWorker \
    --worker-connections ${WORKER_CONNECTIONS:-1000} \
    --max-requests ${MAX_REQUESTS:-1000} \
    --max-requests-jitter ${MAX_REQUESTS_JITTER:-100} \
    --timeout ${TIMEOUT:-30} \
    --keep-alive ${KEEP_ALIVE:-5} \
    --log-level ${LOG_LEVEL:-info} \
    --access-logfile - \
    --error-logfile -