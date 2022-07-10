


const User =(sequelize,DataTypes)=>{
    sequelize.define('users', {
        // Model attributes are defined here
        username: {
          type: DataTypes.STRING,
          allowNull: false
        },
        password: {
          type: DataTypes.STRING
          // allowNull defaults to true
        }
      });
} 

module.exports=User;