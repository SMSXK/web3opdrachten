module.exports = (req, res, next) => {
    console.log('IP adres: '+ req.ip);
    next();
}
