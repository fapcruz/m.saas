import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:pach4090@localhost:3306/m.saas');

export default sequelize;