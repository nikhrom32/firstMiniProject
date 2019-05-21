import decode from 'jwt-decode';


class AuthService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:8000'
    }

    login = async(username, password) => {
        const resp = await this.fetchData(`${this.domain}`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            })
        });
        this.setToken(resp.token);
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

    setToken = (idToken) => {
        localStorage.setItem('id_token', idToken)
    }

    getToken = () => {
        return localStorage.getItem('id_token')
    }

    logout = () => {
        localStorage.removeItem('id_token')
    }

    getProfile = () => {
        return decode(this.getToken());
    }

    fetchData = async(url, options) => {
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }

        if (this.loggedIn()) {
            headers['Authorization'] = 'Bearer' + this.getToken()
        }

        const resp = await fetch(url, {
            headers,
            ...options
        });
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