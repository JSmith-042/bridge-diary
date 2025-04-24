CREATE SEQUENCE IF NOT EXISTS diary_entry_entity_id_seq;
ALTER TABLE diary_entry_entity
    ALTER COLUMN id SET NOT NULL;
ALTER TABLE diary_entry_entity
    ALTER COLUMN id SET DEFAULT nextval('diary_entry_entity_id_seq');

ALTER SEQUENCE diary_entry_entity_id_seq OWNED BY diary_entry_entity.id;