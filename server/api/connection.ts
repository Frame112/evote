import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('ptcvotr01', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mariadb'
});

export { sequelize } 