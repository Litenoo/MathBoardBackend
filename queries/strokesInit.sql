CREATE TABLE IF NOT EXISTS strokes(
    id INT AUTO_INCREMENT NOT NULL UNIQUE,
    boardId INT NOT NULL,
    svg TEXT NOT NULL,
    x INT NOT NULL,
    y INT NOT NULL
);