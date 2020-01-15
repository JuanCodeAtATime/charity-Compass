

module.exports = (sequelize, types) => {
    return CharityCompass = sequelize.define("CharityCompass", {
        name: types.STRING,
        category: types.STRING,
        cause: types.STRING,
        location: types.STRING
    });
}