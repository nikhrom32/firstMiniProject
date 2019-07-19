import decode from 'jwt-decode';


class AuthService {
    domain: string
    constructor(domain?: string) {
        this.domain = domain || 'http://localhost:8000/api/token/'
    }

    login = async(username: string, password: string) => {
        const resp = await this.fetchData(`${this.domain}`, {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
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

    isTokenExpired = (token: string) => {
        try {
            interface iDecoded {
                exp: number
            }

            const decoded: iDecoded = decode(token);
            
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

    setToken = (username: string, idToken: string) => {
        localStorage.setItem('user', JSON.stringify({username: username, tokens: idToken}))
    }

    getToken = () => {
        // console.log(JSON.parse(localStorage.getItem('user') as string).username)
        return JSON.parse(localStorage.getItem('user') as string).username
    }

    logout = () => {
        localStorage.removeItem('user')
    }

    getProfile = () => {
        return decode(this.getToken());
    }

    fetchData = async(url: string, options: object) => {

        interface iJsonObj {
            [prop: string]: string,
        }

        const headers : iJsonObj = {
            'Content-Type': 'application/json',
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

    _checkStatus = (resp: any) => {
        if (resp.status >= 200 && resp.status < 300) {
            return resp
        }
        else {
            var error = new Error(resp.statusText)
            error.stack = resp
            throw error
        }
    }
}

export default AuthService;