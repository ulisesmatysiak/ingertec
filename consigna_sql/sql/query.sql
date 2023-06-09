--creacion tabla tresource_type
CREATE TABLE tresource_type (
  idResourceType INT AUTO_INCREMENT PRIMARY KEY,
  created DATETIME,
  descrip VARCHAR(200)
);

-- creacion tabla tresource
CREATE TABLE tresource (
  idResource INT AUTO_INCREMENT PRIMARY KEY,
  created DATETIME,
  descrip VARCHAR(200),
  idResourceType INT,
  FOREIGN KEY (idResourceType) REFERENCES tresource_type(idResourceType)
);

--insert valores
INSERT INTO tresource_type (created, descrip) VALUES
  (NOW(), 'Vídeo'),
  (NOW(), 'PDF Documentación'),
  (NOW(), 'PDF Enunciado'),
  (NOW(), 'PDF Solución');

--insert registros
INSERT INTO tresource (created, descrip, idResourceType) VALUES
  (NOW(), 'Recurso 1', 1),
  (NOW(), 'Recurso 2', 2),
  (NOW(), 'Recurso 3', 3),
  (NOW(), 'Recurso 4', 1),
  (NOW(), 'Recurso 5', 2),
  (NOW(), 'Recurso 6', 3);

--consulta para registros
SELECT tresource_type.descrip, COUNT(tresource.idResource) AS total
FROM tresource
JOIN tresource_type ON tresource.idResourceType = tresource_type.idResourceType
GROUP BY tresource.idResourceType;
