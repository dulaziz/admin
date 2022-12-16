// import { Sequelize } from "sequelize";
// import db from "../config/database.js";
// import Users from "./UserModel.js";

// const {DataTypes} = Sequelize;

// //tbl structure
// const Creators = db.define('creators', {
//     uuid:{
//         type: DataTypes.STRING,
//         defaultValue: DataTypes.UUIDV4,
//         allowNull: false,
//         validate:{
//             notEmpty: true
//         }
//     },
//     title:{
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate:{
//             notEmpty: true,
//             len: [3, 100]
//         }
//     },
//     link:{
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate:{
//             notEmpty: true
//         }
//     },
//     creators:{
//         type: DataTypes.STRING,
//         allowNull: false,
//         validate:{
//             notEmpty: true
//         }
//     },
//     userId:{
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         validate:{
//             notEmpty: true
//         }
//     }
// }, {
//     freezeTableName: true
// });

// Users.hasMany(Creators);
// Products.belongsTo(Users, {foreignKey: 'userId'});

// export default Creators;



import { Sequelize } from "sequelize";
import db from "../config/database.js";
import Users from "./UserModel.js";

const {DataTypes} = Sequelize;

const Creators = db.define('creator', {
    uuid:{
        type: DataTypes.STRING,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    title:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true,
            len: [3, 100]
        }
    },
    link:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    creators:{
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        validate:{
            notEmpty: true
        }
    },
},{
    freezeTableName: true
});

Users.hasMany(Creators);
Creators.belongsTo(Users, {foreignKey: 'userId'});

export default Creators;