FROM python:3.10.5-alpine3.15 

ENV PYTHONUNBUFFERED=1
ENV PYTHONDONTWRITEBYTECODE 1

RUN ls -a


WORKDIR /usr/src/app

COPY requirements.txt .

RUN apk add --no-cache \
    ca-certificates gcc postgresql-dev linux-headers musl-dev \
    libffi-dev jpeg-dev zlib-dev git

# RUN python -m pip install --user virtualenv && \
#     python -m virtualenv /usr/src/venv && \
#     source ./venv/bin/activate



RUN /usr/local/bin/python -m pip install --upgrade pip

RUN pip install -r requirements.txt 

EXPOSE 8000

COPY . . 

# CMD ["cd /usr/src/app && python manage.py makemigrations && python manage.py migrate && python manage.py runserver"]

# RUN cd /usr/src/app/ && \
#     python manage.py makemigrations && \
#     python manage.py migrate && \
#     python manage.py runserver
# CMD ["python" ,"manage.py","migrate"]


# RUN cd /usr/src/app/ && \   
#     python manage.py migrate 

CMD [ "python", "manage.py", "runserver", "0.0.0.0:8000" ]
# RUN  python manage.py runserver
