import HTTPStatus from 'http-status';

import models from '../../database/models';

const User = models.User;

export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.CREATED).json(user);
  } catch (e) {
    console.log(e)
    return res.status(HTTPStatus.BAD_REQUEST).json(e);
  }
}

export async function login(req, res, next) {
  res.status(HTTPStatus.OK).json(await req.user);
  // res.send(req.user);
  return next();
}

// export async function userList(req, res) {
//   try {
//     const users = await User.find();
//     console.log(users);
//     return res.status(HTTPStatus.CREATED).json(users);
//   } catch (e) {
//     return res.status(HTTPStatus.BAD_REQUEST).json(e);
//   }
// }
