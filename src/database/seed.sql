PRAGMA foreign_keys = OFF;

BEGIN;

INSERT INTO location (id, name, street, postcode) VALUES
    ('1', 'Finsbury Park', 'Blackstock Road', 'N8'),
    ('2', 'Finsbury Park', 'Fonthill Road', 'N8'),
    ('3', 'Finsbury Park', 'Stroud Green Road', 'N8'),
    ('4', 'Finsbury Park', 'Another Road', 'N8')
ON CONFLICT DO NOTHING;

INSERT INTO venue (id, name, location_id) VALUES
    ('1', 'Babans naans', '1'),
    ('2', 'Yard Sale', '1'),
    ('3', 'Eddies', '3'),
    ('4', 'Osteria Tufo', '2'),
    ('5', 'Pizzaria Pappagone', '3')
ON CONFLICT DO NOTHING;

INSERT INTO cuisine (id, name) VALUES
    ('1', 'Turkish'),
    ('2', 'Coffee'),
    ('3', 'Pizza'),
    ('4', 'Italian'),
    ('5', 'Kurdish'),
    ('6', 'Bread?')
ON CONFLICT DO NOTHING;

INSERT INTO venue_cuisine VALUES
    ('1','5'),
    ('1','6'),
    ('2','3'),
    ('3','1'),
    ('3','6'),
    ('4','4'),
    ('5','3'),
    ('5','4')
ON CONFLICT DO NOTHING;

COMMIT;

PRAGMA foreign_keys = ON;