import http from "../http-common";
class houseDataService {
    getAll(){
        return http.get("/houses");
    }
    create(house) {
        return http.post("/house", house);
    }
    get(id){
        return http.get("/house/"+id);
    }
}
export default new houseDataService()