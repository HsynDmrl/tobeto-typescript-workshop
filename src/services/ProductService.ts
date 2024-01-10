import axios from "axios";
import {GetAllProductsModel} from "../models/responses/GetAllProductsModel";
import {ProductModel} from "../models/responses/ProductModel";

class ProductService {
	getAll() {
		return axios.get<GetAllProductsModel>("http://nexgenrent.azurewebsites.net/api/cars/getAll");
	}

	getById(id: number) {
		return axios.get<ProductModel>(`http://nexgenrent.azurewebsites.net/api/cars/${id}`);
	}
}

export default ProductService;
