--Active: 1697733910034@@localhost@3307@team_work
DROP DATABASE IF EXISTS team_work;


CREATE DATABASE team_work;


USE team_work;


DROP TABLE
  IF EXISTS users;


CREATE TABLE
  users (
    userId INT NOT NULL AUTO_INCREMENT,
    userHandle VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL,
    type CHAR(20) NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    PRIMARY KEY(userId)
  );


DROP TABLE
  IF EXISTS employers;


CREATE TABLE
  employers (
    employerId INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    area VARCHAR(50) NOT NULL,
    userId INT NOT NULL UNIQUE,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY(userId) REFERENCES users(userId),
    PRIMARY KEY(employerId)
  );


DROP TABLE
  IF EXISTS seekers;


CREATE TABLE
  seekers (
    seekerId INT NOT NULL AUTO_INCREMENT,
    names VARCHAR(50) NOT NULL UNIQUE,
    lastnames VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    area VARCHAR(50) NOT NULL,
    title VARCHAR(50) NOT NULL,
    userId INT NOT NULL UNIQUE,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY(userId) REFERENCES users(userId),
    PRIMARY KEY(seekerId)
  );


DROP TABLE
  IF EXISTS jobs;


CREATE TABLE
  jobs (
    jobId INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    description TEXT NOT NULL,
    openings INT NOT NULL,
    seniority VARCHAR(50) NOT NULL,
    jobMode VARCHAR(50) NOT NULL,
    jobType VARCHAR(50) NOT NULL,
    jobTime VARCHAR(50) NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Publicado',
    employerId INT NOT NULL,
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY(employerId) REFERENCES employers(employerId),
    PRIMARY KEY(jobId)
  );


DROP TABLE
  IF EXISTS applications;


CREATE TABLE
  applications (
    jobId INT NOT NULL,
    seekerId INT NOT NULL,
    status VARCHAR(50) NOT NULL DEFAULT 'Enviada',
    createdAt TIMESTAMP NOT NULL DEFAULT NOW(),
    updatedAt TIMESTAMP NOT NULL DEFAULT NOW() ON UPDATE NOW(),
    FOREIGN KEY(jobId) REFERENCES jobs(jobId),
    FOREIGN KEY(seekerId) REFERENCES seekers(seekerId),
    PRIMARY KEY(jobId, seekerId)
  );