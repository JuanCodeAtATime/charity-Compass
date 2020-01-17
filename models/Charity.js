

module.exports = (sequelize, types) => {
    return CharityCompass = sequelize.define("CharityCompass", {
        Charity_Foundation_Name: types.STRING,
        Classification: types.STRING,
        City: types.STRING,
        State: types.STRING,
        IRS_Subsection: types.STRING
    });
};