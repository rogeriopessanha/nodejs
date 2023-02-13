CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Rogerio",
    "email@teste.com",
    35
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Maria",
    "email@teste_maria.com",
    25
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "João",
    "email@teste_joao.com",
    22
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Gaia",
    "email@teste_gaia.com",
    5
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Bel",
    "email@teste_bel.com",
    35
);


SELECT * FROM usuarios WHERE idade = 35;
SELECT * FROM usuarios WHERE nome = "Gaia";
SELECT * FROM usuarios WHERE idade >= 30;
SELECT * FROM usuarios WHERE idade <= 30;


DELETE FROM usuarios WHERE nome = "Rogerio";

UPDATE usuarios SET nome = "Maria Pessanha" WHERE nome = "Maria";
