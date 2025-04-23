CREATE TABLE diary_entry_entity
(
    id          BIGINT NOT NULL,
    title       VARCHAR(255),
    text        VARCHAR(255),
    date        TIMESTAMP WITHOUT TIME ZONE,
    rating      INTEGER,
    awesomeness DOUBLE PRECISION,
    CONSTRAINT pk_diaryentryentity PRIMARY KEY (id)
);