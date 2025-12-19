FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN pip install --upgrade pip
RUN pip install --timeout=300 --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000 

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]