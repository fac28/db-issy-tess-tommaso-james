PRAGMA foreign_keys = ON;

BEGIN;

CREATE TABLE IF NOT EXISTS location (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    street TEXT,
    postcode TEXT
)

CREATE TABLE IF NOT EXISTS venue (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    location_id INTEGER 
)

CREATE TABLE IF NOT EXISTS cuisine (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL
)

CREATE TABLE IF NOT EXISTS venue_cuisine (
    venue_id INTEGER REFERENCES venue(id),
    cuisine_id INTEGER REFERENCES cuisine(id),
    PRIMARY KEY (cuisine_id, venue_id)
)

COMMIT;