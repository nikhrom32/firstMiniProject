import decode from 'jwt-decode';


class AuthService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000/api/token/'
    }

    login = async(username, password) => {
        const resp = await this.fetchData(`${this.domain}`, {
            method: 'POST',
            body: JSON.stringify({
                "Username": username,
                "Password": password
            })
        });
        console.log(resp);
        this.setToken(username, resp.token);
        return Promise.resolve(resp);
    }

    loggedIn = () => {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token)
    }

    isTokenExpired = (token) => {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    setToken = (username, idToken) => {
        localStorage.setItem('user',{username: idToken})
    }

    getToken = () => {
        return localStorage.getItem('user'.username)
    }

    logout = () => {
        localStorage.removeItem('user')
    }

    getProfile = () => {
        return decode(this.getToken());
    }

    fetchData = async(url, options) => {
        const headers = {
            'Accept': 'application/json, text/plain, */*',
        }

        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer' + this.getToken()
        }
        

        const resp = await fetch(url, {
            headers,
            ...options
        });
        console.log('resp1');
        this._checkStatus(resp);
        return await resp.json();
    }

    _checkStatus = (resp) => {
        if (resp.status >= 200 && resp.status < 300) {
            return resp
        }
        else {
            var error = new Error(resp.statusText)
            error.resp = resp
            throw error
        }
    }
}

export default AuthService;