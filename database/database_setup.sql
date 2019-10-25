CREATE DATABASE omni_slide;

ALTER USER postgres PASSWORD 'Kd95d$NP9=w%A_M6';

\c omni_slide

CREATE TABLE "user" (
    id          serial          PRIMARY KEY UNIQUE,   
    username    VARCHAR(30)     NOT NULL, 
    password    VARCHAR(255)    NOT NULL,
    email       VARCHAR(254)    NOT NULL,
    token       VARCHAR(100)    NOT NULL
);

CREATE TABLE folder (
    id          serial          PRIMARY KEY UNIQUE,
    user_id     INTEGER         NOT NULL,
    name        VARCHAR(30)     NOT NULL
);

CREATE TABLE "file" (
    id          serial          PRIMARY KEY UNIQUE,
    folder_id   INTEGER         NOT NULL,
    name        INTEGER         NOT NULL,
    data        JSON            NOT NULL
);