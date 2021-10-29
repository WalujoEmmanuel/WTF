const AppError = require('../utils/appError');
const userService = require('../services/userService');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAll();

    res.status(200).json({
      status: 'success',
      results: users.length,
      data: {
        data: users
      }
    });

  } catch (error) {
    next(error);
  }
};

exports.getUser = async (req, res, next) => {
  try {
    const user = await userService.getUser(req.params.id);

    if (!user) {
      return next(new AppError(404, 'fail', 'No user found with that id'), req, res, next);
    }

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    user = await userService.createUser({
      "user_name": req.body.user_name,
      "name": req.body.name,
      "email": req.body.email,
      "password": req.body.password,
    });

    res.status(201).json({
      status: 'success',
      data: {
        doc
      }
    });

  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);

    if (!user) {
      return next(new AppError(404, 'fail', 'No user found with that id'), req, res, next);
    }

    res.status(200).json({
      status: 'success',
      data: {
        user
      }
    });

  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const user =  await userService.deleteUser(req.params.id);

    if (!user) {
      return next(new AppError(404, 'fail', 'No document found with that id'), req, res, next);
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    next(error);
  }
};