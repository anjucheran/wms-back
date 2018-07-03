'use strict';
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt-nodejs');

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      allowNUll: false,
      primaryKey: true,
      validate : {
        isEmail: {
          args: true,
          msg: 'Email is invalid!',
        },
      },
    },
    firstName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    lastName: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    username: {
      type: Sequelize.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        min: {
          args: 6,
          msg: 'Password required atleast 6 characters!'
        },
        is: {
          args: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,
          msg: 'Password is invalid',
        },
      }
    }
  }, { timestamps: false });
  User.associate = function(models) {
    // associations can be defined here
  };
  User.beforeSave((user, options) => {
    if(user.changed('password')) {
      user.password = user.hashPassword(user.password);
    }
  });
  User.prototype.hashPassword = (password) => {
    return bcrypt.hashSync(password);
  }
  User.prototype.comparePassword = (password) => {
    return bcrypt.compareSync(password, user.password);
  }
  return User;
};
