class HttpReq {
    constructor(baseUrl) {
        this.baseUrl = baseUrl
    }

    postRequest = async (endPoint, data, headers = {}) => {
        try {
            const res = await fetch(this.baseUrl + endPoint, {
                method: 'POST',
                body: data,
                headers: {
                    ...headers,
                },
            })
            const json = await res.json()
            return json
        } catch (e) {
            return e
        }
    }
}

export class CloudinaryService {
    constructor(baseUrl) {
        this.http = new HttpReq(baseUrl)
    }

    uploadImage = async (data) => {
        try {
            console.log('upload', data)
            const result = await this.http.postRequest(`/image/upload`, data)
            return result.data
        } catch (e) {
            console.log(e)
            return e
        }
    }
}

export class DBService {
    constructor(baseUrl) {
        this.http = new HttpReq(baseUrl)
    }

    createLetter = async (letterData) => {
        const result = await this.http.postRequest(
            '/letter/create',
            JSON.stringify(letterData),
            {
                'Content-Type': 'application/json',
            },
        )

        console.log(result)
    }
}
