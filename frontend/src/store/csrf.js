export async function restoreSession() {
    const res = await fetch('/api/session')
    const token = await res.headers.get('X-CSRF-Token');
    sessionStorage.setItem('X-CSRF-Token', token);
    const data = await res.json();

    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
}


export async function csrfFetch(url, options) {
    options.method ||= 'GET';

    options.headers ||= {};

    if (options.method.toUpperCase() !== 'GET') {
        options.headers["X-CSRF_Token"] = sessionStorage.getItem('X-CSRF-Token');
    }

    const res = await fetch(url, options);
    return res;

}