import { Sequelize } from "sequelize";

const db= new Sequelize('advisor','root','1q2w3e4r5t.',{
    host:'localhost',
    dialect:'mysql'
})

export default db