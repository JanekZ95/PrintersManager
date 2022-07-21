export const logRequests = (req, res, next) => {
    let currentDatetime = new Date();
    let formattedDate =
    currentDatetime.getFullYear() +
    '-' +
    (currentDatetime.getMonth() + 1) +
    '-' +
    currentDatetime.getDate() +
    ' ' +
    currentDatetime.getHours() +
    ':' +
    currentDatetime.getMinutes() +
    ':' +
    currentDatetime.getSeconds();
    let method = req.method;
    let url = req.url;
    let log = `[${formattedDate}] ${method} ${url}`;
    console.log(log);
    next();
};
