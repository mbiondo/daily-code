CREATE TABLE users (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    username TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    provider TEXT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE exercises (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    typescript_code TEXT NOT NULL,
    difficulty INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    title_text_id BIGINT REFERENCES multilingual_texts(id)
);

CREATE TABLE multilingual_texts (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    reference_id BIGINT NOT NULL,
    language TEXT NOT NULL,
    text TEXT NOT NULL,
    type TEXT NOT NULL CHECK (type IN ('title', 'response')),
    exercise_id BIGINT REFERENCES exercises(id),
    response_id BIGINT REFERENCES exercise_responses(id)
);

CREATE TABLE exercise_responses (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    exercise_id BIGINT REFERENCES exercises(id),
    is_correct BOOLEAN NOT NULL,
    response_text_id BIGINT REFERENCES multilingual_texts(id)
);

CREATE TABLE user_exercise_results (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    user_id BIGINT REFERENCES users(id),
    exercise_id BIGINT REFERENCES exercises(id),
    score INT NOT NULL,
    completion_time INTERVAL NOT NULL,
    completed_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE regions (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name TEXT NOT NULL
);

CREATE TABLE user_regions (
    user_id BIGINT REFERENCES users(id),
    region_id BIGINT REFERENCES regions(id),
    PRIMARY KEY (user_id, region_id)
);

CREATE TABLE regional_rankings (
    id BIGINT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    region_id BIGINT REFERENCES regions(id),
    user_id BIGINT REFERENCES users(id),
    total_score INT NOT NULL,
    rank INT NOT NULL
);