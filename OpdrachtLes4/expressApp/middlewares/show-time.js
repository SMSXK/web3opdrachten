module.exports = (req, res, next) =>{
    const time =  new Date(Date.now()).toLocaleString('nl-BE');
    console.log('Time: ', time);
    req.time = time;
    next();
}