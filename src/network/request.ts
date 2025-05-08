import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig, Method, AxiosError } from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 1000,
  headers: {
    "Content-Type": "application/json",
  },
});

/*
type RequestProps = {
	method: Method
	url: string
	data: unknown
	params: Record<string, string>
}

function _request ({method, url, data, params}: RequestProps) {
	try {
		return axiosInstance({method, url, data, params})
	} catch (error) {
		console.log(error)
	}
} 
*/


class RequestBuilder {
	  private axiosInstance: AxiosInstance;
	  private _url: string = '';
	  private _method: Method = 'get'; // Default method
	  private _data: any = null;

	  constructor(axiosInstance: AxiosInstance){
		this.axiosInstance = axiosInstance;
	  }

	// Method to define the URL
		setUrl(url: string): this {
		this._url = url;
		return this;
	}

	// Method to set the HTTP method (e.g., GET, POST)
	setMethod(method: Method): this {
		this._method = method;
		return this;
	}

	
	async send(): Promise<AxiosResponse>   {
		const config: AxiosRequestConfig = {
			method: this._method,
			url: this._url,
			data: this._data
		};

		 const response = await this.axiosInstance(config);
		 return response.data;

	}

	// HTTP GET method
	get(url: string): this {
		this.setMethod('get');
		this.setUrl(url);
		return this;
	}

}

export default function NewRequestBuilder() {
	return new RequestBuilder(axiosInstance)
}
