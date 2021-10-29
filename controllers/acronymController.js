const AppError = require('../utils/appError');
const acronymService = require('../services/acronymService');

exports.getAllAcronyms = async (req, res, next) => {
  try {
    const { from, limit, search } = req.query;
    
    const acronyms = await acronymService.getAll(from, limit, search);

    res.header('Access-Control-Expose-Headers', 'X-Pagination');
    res.setHeader('X-Pagination', JSON.stringify(acronyms));
    res.status(200).json({
      status: 'success',
      results: acronyms.length,
      data: {
        data: acronyms
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.createAcronym = async (req, res, next) => {
  try {
    const { acronym, definition } = req.body;

    createdAcronym = await acronymService.createAcronym({
      [acronym]: definition
    });

    res.status(201).json({
      status: 'success',
      data: {
        acronym: createdAcronym
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.updateAcronym = async (req, res, next) => {
  try {
    const acronym = await acronymService.updateAcronym(req.params.acronym, req.body.definition);

    if (!acronym) {
      return next(new AppError(404, 'fail', 'Acronym not found'), req, res, next);
    }

    res.status(200).json({
      status: 'success',
      data: {
        acronym
      }
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteAcronym = async (req, res, next) => {
  try {
    const acronym =  await acronymService.deleteAcronym(req.params.acronym);

    if (!acronym) {
      return next(new AppError(404, 'fail', 'Acronym not found'), req, res, next);
    }

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (error) {
    next(error);
  }
};