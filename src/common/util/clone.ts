export default (o: any) => {
    return JSON.parse(JSON.stringify(o));
};