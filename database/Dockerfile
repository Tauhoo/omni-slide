FROM postgres:11.4-alpine

COPY . /usr/database

WORKDIR /usr/database

ENV POSTGRES_PASSWORD Kd95d$NP9=w%A_M6

COPY database_setup.sql /docker-entrypoint-initdb.d/

CMD ["postgres"]