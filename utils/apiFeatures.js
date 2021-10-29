const APIFeatures = {
  paginator: (data, page = 1, perPage = 10) => {
    const offset = (page - 1) * perPage;   
    const paginatedData = data.slice(offset).slice(0, perPage);
    const totalPages = Math.ceil(data.length / perPage);

    return {
      page: page,
      perPage: perPage,
      previousPage: page - 1 ? page - 1 : null,
      nextPage: (totalPages > page) ? page + 1 : null,
      total: data.length,
      totalPages: totalPages,
      data: paginatedData
    };
  }
}

module.exports = APIFeatures;
