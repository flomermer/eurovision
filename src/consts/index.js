const todayYear = new Date().getFullYear()+1;

module.exports = {
    ROOT_API: 'https://eurovision-service.herokuapp.com',
    // ROOT_API: 'http://localhost:8080',
    DEFAULT_YEAR: todayYear,
    MIN_YEAR: 1956
}
