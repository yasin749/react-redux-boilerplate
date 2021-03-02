function generateAsyncAction({
    service,
    params,
 }) {
    return service(params);
}

export {
    generateAsyncAction,
}
