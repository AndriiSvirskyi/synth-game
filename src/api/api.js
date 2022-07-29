export const api = {
    get,
    post,
    put,
    delete: _delete
};

const baseUrl = process.env.REACT_APP_DATABASE_URL || 'https://api.gen4.ghostdrive.com/api/';
console.log('baseUrl', baseUrl)
function get(url) {

    const requestOptions = {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);
}

function post(url, body) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);

}

function put(url, body) {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);
}

function _delete(url) {
    const requestOptions = {
        method: 'DELETE'
    };
    return fetch(`${baseUrl}${url}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {

    return response.json().then(res => {
        return res;
    });
}