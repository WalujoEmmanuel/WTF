const APIFeatures = require('../utils/apiFeatures');
const acronyms = require('../db/acronyms.json');


exports.createAcronym = async (acronym) => {
    acronyms.push(acronym);
    return acronym;
};

exports.updateAcronym = (acronym, definition) => {
    let acronymDetails = Array.isArray(acronyms) && acronyms.find(acronymDetails => (acronym in acronymDetails));
    if (!acronymDetails) return null;
    acronyms.forEach((acronymDetails) => {
        if (acronymDetails[acronym]) acronymDetails[acronym] = definition;
    });
    return acronymDetails;
};

exports.getAll = async (from, limit, search) => {
    let filteredData = acronyms;

    if (search && search.length) {
        filteredData = filteredData.filter(data => {
            if (Object.keys(data).length) {
                for (const key in data) {
                    return (
                        (key.length && key.toLowerCase().includes(search.toLowerCase())) ||
                        (data[key].length && data[key].toLowerCase().includes(search.toLowerCase()))
                    );
                }
            }
            return false
        });
    }

    return APIFeatures.paginator(filteredData, parseInt(from || 1), parseInt(limit || 10));
};

exports.deleteAcronym = async (acronym) => {
    const acronymDetails = Array.isArray(acronyms) && acronyms.find(item => item[acronym]);
    if (!acronymDetails) return null;
    acronyms.forEach((acronymDetails, index) => {
        if (acronymDetails[acronym]) acronyms.splice(index, 1);
    });
    return acronymDetails;
};