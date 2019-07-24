

class NewsService {

    domain: string
    constructor(domain?: string) {
        this.domain = domain || 'http://localhost:8000/news/'
    }
    

    getNews = async(newsId: number) => {
        const resp = await this.fetchData(`${this.domain}${newsId}/`, {
            method: 'GET',
        });
        console.log(resp);
        return Promise.resolve(resp);
    }


    fetchData = async(url: string, options: object) => {

        interface iJsonObj {
            [prop: string]: string,
        }

        const headers : iJsonObj = {
            'Content-Type': 'application/json',
        }
        

        const resp = await fetch(url, {
            headers,
            ...options
        });

        return await resp.json();
    }
}

export default NewsService;