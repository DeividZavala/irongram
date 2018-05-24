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

export function logout() {
    return fetch(baseUrl+'/auth/logout')
        .then(r=>r.json())
        .then(res=>{
            localStorage.removeItem("user");
            return res
        });
}


// Posts
export function addPost(post) {

    // Create a test FormData object
    var formData = new FormData();
    for(let k in post){
        formData.append(k, post[k]);
    }

    return fetch(baseUrl+'/posts/new',{
        method:'post',
        body: formData
    })
        .then(r=>r.json())
        .then(post=>post);
}

