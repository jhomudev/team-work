-- Active: 1697733910034@@localhost@3307@team_work
-- TRUNCATE TABLE users;
INSERT INTO
  users(userHandle, email, password, type)
VALUES
  (
    'jhonancaleb',
    'jhonancalebm@gmail.com',
    'jhonan123',
    'Trabajador'
  ),
  (
    'jhonjosue',
    'josue@gmail.com',
    'jhon123',
    'Trabajador'
  ),
  (
    'Diego1999',
    'diegori@gmail.com',
    'diego123',
    'Trabajador'
  ),
  (
    'maria12',
    'maria123@gmail.com',
    'maria123',
    'Trabajador'
  ),
  (
    'joseito',
    'jose@gmail.com',
    'jose123',
    'Trabajador'
  ),
  (
    'vilma',
    'vilma@gmail.com',
    'vilma123',
    'Trabajador'
  ),
  ('jack24', 'jack@gmail.com', 'jack123', 'Trabajador'),
  (
    'anuelbe',
    'anuela@gmail.com',
    'anuel123',
    'Trabajador'
  ),
  (
    'manuelt',
    'manuel@gmail.com',
    'manuel123',
    'Trabajador'
  ),
  (
    'jackie-chan',
    'jackiecha@gmail.com',
    'jackie123',
    'Trabajador'
  ),
  (
    'nilda',
    'nilda@gmail.com',
    'nilda123',
    'Trabajador'
  ),
  (
    'joseph',
    'joseph@gmail.com',
    'joseph123',
    'Trabajador'
  ),
  (
    'mario2000',
    'mario@gmail.com',
    'mario123',
    'Trabajador'
  ),
  /*EMPLOYERS*/
  (
    'systec',
    'systec@gmail.com',
    'systec123',
    'Empresa'
  ),
  (
    'anubis',
    'anubis@gmail.com',
    'anubis123',
    'Empresa'
  ),
  ('JEHA', 'jeha@gmail.com', 'jeha123', 'Empresa'),
  ('Jota', 'jota@gmail.com', 'jeha123', 'Empresa'),
  (
    'TerraConsulting',
    'sdf@gmail.com',
    'jeha123',
    'Empresa'
  ),
  ('bajoC', 'dwe@gmail.com', 'jeha123', 'Empresa'),
  ('enma', 'sdff@gmail.com', 'jeha123', 'Empresa'),
  (
    'Jobtrack',
    'jessdfdfha@gmail.com',
    'jeha123',
    'Empresa'
  ),
  (
    'josephSolutions',
    'jerwha@gmail.com',
    'jeha123',
    'Empresa'
  ),
  (
    'MenSolus',
    'je123wersdfha@gmail.com',
    'jeha123',
    'Empresa'
  ),
  (
    'OportunityAI',
    'je31ha@gmail.com',
    'jeha123',
    'Empresa'
  ),
  (
    'ForwardIa',
    'jeh33a@gmail.com',
    'jeha123',
    'Empresa'
  ),
  (
    'Suriaconsulting',
    'suriaconsulting@gmail.com',
    'Suriaconsulting123',
    'Empresa'
  );


-- TRUNCATE TABLE employers;
INSERT INTO
  employers(name, description, area, userId)
VALUES
  (
    'SYSTEC CORP',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    14
  ),
  (
    'ANUBIS CORP',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    15
  ),
  (
    'JEHA Solutions',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    16
  ),
  (
    'Jota Corp',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    17
  ),
  (
    'Terra Consulting',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    18
  ),
  (
    'Bajo Consulting',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    19
  ),
  (
    'ENMA Products',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    20
  ),
  (
    'Jobtrack CORP',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    21
  ),
  (
    'Joseph Solutions',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    22
  ),
  (
    'Oportunity AI',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    23
  ),
  (
    'Suria Consulting',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    24
  ),
  (
    'Forward IA',
    'Consultora de tecnologpìa...',
    'Tecnología de la Información (TI)',
    25
  );


-- TRUNCATE TABLE seekers;
INSERT INTO
  seekers(names, lastnames, description, area, title, userId)
VALUES
  (
    'Jhonan Caleb',
    'Muñoz Carrillo',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    1
  ),
  (
    'Jhon josue',
    'Muñoz Carrillo',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    2
  ),
  (
    'Diego',
    'Mucha Cresis',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    3
  ),
  (
    'Maria',
    'Marquina Cardenas',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    4
  ),
  (
    'Jose',
    'Muñoz Valencia',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    5
  ),
  (
    'Vilma',
    'Carrillo Reymundez',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    6
  ),
  (
    'Jack',
    'Torres Flores',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    7
  ),
  (
    'Anuel',
    'Sperr Carrillo',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    8
  ),
  (
    'Manuel',
    'Flores Casaverde',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    9
  ),
  (
    'Jackie',
    'Hyan Kyo',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    10
  ),
  (
    'Nilda',
    'Aros Turqui',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    11
  ),
  (
    'Joseph',
    'Curo Curi',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    12
  ),
  (
    'Mario Milei',
    'Ever Mile',
    'Trabajador bal blabla',
    'Tecnología de la Información (TI)',
    'Ingeneiro de Software',
    13
  );


-- TRUNCATE TABLE jobs;
INSERT INTO
  jobs(
    title,
    description,
    openings,
    seniority,
    jobMode,
    jobType,
    jobTime,
    status,
    employerId
  )
VALUES
  (
    'Desarrollador Web',
    'Estamos buscando un desarrollador web para unirse a nuestro equipo.',
    3,
    'Junior',
    'Híbrido',
    'Contrato',
    'Tiempo completo',
    'Pendiente de Publicación',
    12
  ),
  (
    'Analista de Datos',
    'Buscamos un analista de datos con experiencia en análisis estadístico.',
    2,
    'Semisenior',
    'Remoto',
    'Freelance',
    'Tiempo parcial',
    'Publicado',
    1
  ),
  (
    'Asistente de Marketing',
    'Ofrecemos una oportunidad de prácticas en nuestro equipo de marketing.',
    1,
    'Sin experiencia',
    'Presencial',
    'Prácticas',
    'Turno tarde',
    'En recepción de Solicitudes',
    3
  ),
  (
    'Ingeniero de Software',
    'Estamos contratando ingenieros de software con al menos 5 años de experiencia.',
    4,
    'Senior',
    'Híbrido',
    'Contrato',
    'Tiempo completo',
    'En Proceso de Evaluación',
    11
  ),
  (
    'Voluntario de Ayuda Comunitaria',
    'Únete a nuestro equipo como voluntario para ayudar a la comunidad.',
    5,
    'Junior',
    'Remoto',
    'Voluntariado',
    'Turno noche',
    'Finalizado',
    8
  ),
  (
    'Diseñador Gráfico',
    'Buscamos un diseñador gráfico creativo para proyectos a tiempo parcial.',
    2,
    'Semisenior',
    'Remoto',
    'Freelance',
    'Tiempo parcial',
    'Pendiente de Publicación',
    9
  ),
  (
    'Asistente Administrativo',
    'Oportunidad de prácticas para estudiantes de administración de empresas.',
    1,
    'Sin experiencia',
    'Presencial',
    'Prácticas',
    'Turno tarde',
    'Publicado',
    2
  ),
  (
    'Desarrollador de Aplicaciones Móviles',
    'Unete a nuestro equipo de desarrollo de aplicaciones móviles.',
    3,
    'Semisenior',
    'Híbrido',
    'Contrato',
    'Turno noche',
    'En recepción de Solicitudes',
    1
  ),
  (
    'Ingeniero de Sistemas',
    'Buscamos un ingeniero de sistemas con experiencia en redes y seguridad.',
    2,
    'Senior',
    'Remoto',
    'Contrato',
    'Tiempo completo',
    'En Proceso de Evaluación',
    2
  ),
  (
    'Voluntario de Asistencia Social',
    'Voluntarios necesarios para trabajar en programas de asistencia social.',
    4,
    'Sin experiencia',
    'Presencial',
    'Voluntariado',
    'Tiempo completo',
    'Finalizado',
    2
  ),
  (
    'Especialista en Marketing Digital',
    'Ofrecemos una oportunidad de prácticas en marketing digital.',
    1,
    'Junior',
    'Híbrido',
    'Prácticas',
    'Turno tarde',
    'Pendiente de Publicación',
    4
  ),
  (
    'Contador Financiero',
    'Buscamos un contador con experiencia en finanzas corporativas.',
    2,
    'Senior',
    'Remoto',
    'Contrato',
    'Tiempo completo',
    'Publicado',
    5
  ),
  (
    'Diseñador de Interiores',
    'Buscamos un diseñador de interiores para proyectos de contrato.',
    2,
    'Junior',
    'Híbrido',
    'Contrato',
    'Tiempo completo',
    'En Proceso de Evaluación',
    7
  ),
  (
    'Desarrollador de Aplicaciones Móviles',
    'Estamos en busca de un desarrollador de aplicaciones móviles con experiencia.',
    3,
    'Semisenior',
    'Remoto',
    'Freelance',
    'Turno tarde',
    'En recepción de Solicitudes',
    5
  ),
  (
    'Asistente de Investigación',
    'Oportunidad de prácticas en el departamento de investigación.',
    1,
    'Sin experiencia',
    'Presencial',
    'Prácticas',
    'Turno tarde',
    'Pendiente de Publicación',
    10
  ),
  (
    'Ingeniero de Redes',
    'Unete a nuestro equipo de ingenieros de redes con enfoque en seguridad.',
    4,
    'Senior',
    'Híbrido',
    'Contrato',
    'Turno noche',
    'Publicado',
    7
  ),
  (
    'Especialista en Recursos Humanos',
    'Estamos contratando un especialista en recursos humanos con experiencia.',
    2,
    'Semisenior',
    'Presencial',
    'Contrato',
    'Tiempo completo',
    'Finalizado',
    8
  ),
  (
    'Terapeuta Físico',
    'Se necesitan terapeutas físicos para trabajar en turnos nocturnos.',
    5,
    'Junior',
    'Presencial',
    'Contrato',
    'Turno noche',
    'Publicado',
    9
  ),
  (
    'Ingeniero de Sistemas',
    'Buscamos un ingeniero de sistemas con experiencia en desarrollo de software.',
    3,
    'Senior',
    'Híbrido',
    'Contrato',
    'Tiempo completo',
    'Pendiente de Publicación',
    10
  ),
  (
    'Voluntario de Ayuda Comunitaria',
    'Únete a nuestro programa de voluntariado para apoyar a la comunidad necesitada.',
    6,
    'Sin experiencia',
    'Presencial',
    'Voluntariado',
    'Tiempo completo',
    'En Proceso de Evaluación',
    11
  ),
  (
    'Analista de Marketing Digital',
    'Oportunidad de prácticas para estudiantes de marketing digital.',
    1,
    'Junior',
    'Híbrido',
    'Prácticas',
    'Turno tarde',
    'Pendiente de Publicación',
    12
  ),
  (
    'Asistente Legal',
    'Estamos contratando un asistente legal con experiencia en derecho corporativo.',
    2,
    'Semisenior',
    'Presencial',
    'Contrato',
    'Tiempo completo',
    'Publicado',
    3
  );


-- TRUNCATE TABLE applications;
INSERT INTO
  applications(jobId, seekerId, status)
VALUES
  (1, 1, 'Enviada'),
  (2, 2, 'Enviada'),
  (3, 3, 'Enviada'),
  (4, 4, 'Enviada'),
  (5, 5, 'Enviada'),
  (6, 6, 'Enviada'),
  (7, 7, 'Enviada'),
  (8, 8, 'Enviada'),
  (9, 9, 'Enviada'),
  (10, 10, 'Enviada'),
  (11, 11, 'Enviada'),
  (12, 12, 'Enviada'),
  (13, 1, 'Enviada'),
  (14, 2, 'Enviada'),
  (15, 3, 'Enviada'),
  (16, 4, 'Enviada'),
  (17, 5, 'Enviada'),
  (18, 6, 'Enviada'),
  (19, 7, 'Enviada'),
  (20, 8, 'Enviada'),
  (21, 9, 'Enviada'),
  (22, 10, 'Enviada');


--select jobs
SELECT
  *
FROM
  jobs;


SELECT
  jobs.jobId,
  jobs.title,
  jobs.description,
  jobs.openings,
  jobs.seniority,
  jobs.jobMode,
  jobs.jobType,
  jobs.jobTime,
  jobs.status,
  jobs.createdAt,
  jobs.updatedAt,
  employers.name as employer
FROM
  jobs
  INNER JOIN employers ON jobs.employerId = employers.employerId
ORDER BY
  jobs.`jobId`
LIMIT
  4
OFFSET
  4;


SELECT
  jobs.jobId,
  jobs.title,
  jobs.description,
  jobs.openings,
  jobs.seniority,
  jobs.jobMode,
  jobs.jobType,
  jobs.jobTime,
  jobs.status,
  jobs.createdAt,
  jobs.updatedAt,
  employers.name as employer
FROM
  jobs
  INNER JOIN employers ON jobs.employerId = employers.employerId -- WHERE
  --   jobs.title LIKE "%Ingeniero%"
ORDER BY
  jobs.jobId ASC -- LIMIT
  --   10
  -- OFFSET
  --   10;
  --update job
UPDATE
  jobs
SET
  description = 'EDITADO...Estamos buscando un desarrollador web para unirse a nuestro equipo.'
WHERE
  `jobId` = 1;


--select usesr
SELECT
  *
FROM
  users;


--select seekers
SELECT
  *
FROM
  seekers;


-- UPDATE seekers SET description ='Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia cumque magnam nobis incidunt exercitationem tempora tenetur deserunt at nesciunt, reprehenderit ipsa hic quae aliquam asperiores! Natus accusamus provident aliquid.'
-- WHERE `seekerId` < 100
SELECT
  sek.seekerId,
  sek.names,
  sek.lastnames,
  sek.description,
  sek.area,
  sek.title,
  sek.userId,
  sek.createdAt,
  sek.updatedAt,
  u.userHandle,
  u.email as userEmail
FROM
  seekers sek
  INNER JOIN users u ON sek.userId = u.userId
ORDER BY
  sek.seekerId;


--select employers
SELECT
  *
FROM
  employers;


SELECT
  em.employerId,
  em.name,
  em.description,
  em.area,
  em.userId,
  em.createdAt,
  em.updatedAt,
  u.userHandle,
  u.email as userEmail
FROM
  employers em
  INNER JOIN users u ON em.userId = u.userId
WHERE
  LOWER(area) = "Servicios al Cliente";


UPDATE
  employers
SET
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quia cumque magnam nobis incidunt exercitationem tempora tenetur deserunt at nesciunt, reprehenderit ipsa hic quae aliquam asperiores! Natus accusamus provident aliquid.'
WHERE
  `employerId` < 100 --select applications
SELECT
  *
FROM
  applications;


SELECT
  apps.jobId,
  apps.seekerId,
  apps.status,
  apps.createdAt,
  apps.updatedAt,
  j.title as jobTitle,
  j.description as jobDescription,
  j.status as jobStatus,
  CONCAT(seek.names, " ", seek.lastnames) as seeker
FROM
  applications apps
  INNER JOIN jobs j ON apps.jobId = j.jobId
  INNER JOIN seekers seek ON apps.seekerId = seek.seekerId
ORDER BY
  apps.status ASC -- WHERE
  --   apps.jobId = 18;
  SHOW KEYS
FROM
  applications
WHERE
  Key_name = 'PRIMARY';


SELECT
  userId,
  userHandle,
  email,
  password,
  type
FROM
  users
WHERE
  email = 'jhonancalebm@gmail.com'
  AND password = 'jhonan123'