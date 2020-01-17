

module.exports = (sequelize, types) => {
    return CharityCompasses = sequelize.define("CharityCompasses", {
        Charity_Foundation_Name: types.STRING,
        Classification: types.STRING,
        City: types.STRING,
        State: types.STRING,
        IRS_Subsection: types.STRING
    });
};