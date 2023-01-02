const padL = (nr: number) => `${nr}`.padStart(2, '0');

const dateTimeString = (dt = new Date()) => {
    debugger;
    return `${dt.getFullYear()}-${padL(dt.getMonth() + 1)}-${padL(dt.getDate())}-${padL(dt.getHours())}-${padL(
        dt.getMinutes()
    )}-${padL(dt.getSeconds())}`;
};

export default dateTimeString;
