import axios from 'axios';
import IService from '../model/Service'

export default class DataService{

    public static async getAllServices(){
        const response = await axios.get("/service");
        return  DataService.deserializeService(response.data)
    }

    public static async createService(name: string, url: string){
        const data = {
            "name": name,
            "url": url
        };
        const response =  await axios.post("/service", data);
        return response;
    }

    public static async deleteService(name: string){
         await axios.delete("/service", { data: {name: name} });
    }

    public static deserializeService(response: any){
        let serviceList: IService[] = response.map((res:any) => {
            return  {name: res.name, status: JSON.parse(res.status)};
        });
        return serviceList;
    }

}
