import mysql from 'serverless-mysql'

export const conn = mysql({
  config: {
    host: 'localhost',
    user: 'admin',
    password: 'admin',
    port: 3307,
    database: 'team_work'
  }
})
