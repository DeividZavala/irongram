const baseUrl = 'http://localhost:3000';


export function getPosts() {
    return fetch(baseUrl + '/posts')
        .then(r=>r.json())
        .then(data=>data);
}


// Auth
export function signUp(user) {
    return fetch(baseUrl+'/auth/signup',{
        method:'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(r=>r.json())
        .then(user=>user);
}

export function login(user) {
    return fetch(baseUrl+'/auth/login',{
        method:'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(r=>r.json())
        .then(user=>user);
}


// Posts
export function addPost(post) {
    return fetch(baseUrl+'/posts/new',{
        method:'post',
        headers: {
            "Content-Type": "form-data"
        },
        body: JSON.stringify(post)
    })
        .then(r=>r.json())
        .then(post=>post);
}

