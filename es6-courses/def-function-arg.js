// Default function arguments

// old
function makeAjaxRequest(url, method) {
    if (!method) {
        method = 'GET';
    }
}

// new
function makeAjaxRequest2(url, method = 'GET') {

}

makeAjaxRequest('google.com', 'GET');

//
function User(id) {
    this.id = id;
}

function generateId() {
    return Math.random() * 999999;
};

function createAdminUser(user = new User(generateId())) {
    user.admin = true;

    return user;
}


// n
createAdminUser(new User(generateId()))

// y
createAdminUser();