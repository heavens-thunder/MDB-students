import http from "../http-common";
class studentDataService {
    getAll(){
        return http.get("/students");
    }
    create(student) {
        return http.post("/student", student);
    }
    get(id){
        return http.get("/student/"+id);
    }
}
export default new studentDataService()