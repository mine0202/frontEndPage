
import http from "../http-common";

class FileDbDataService {

    // 함수명 : upload 함수 , DB 저장 함수
    // 매개변수  tilte :제목
    //          content : 내용
    //          fileDb : 업로드 대상 이미지
    upload(title, content, fileDb){
        // json 객체를 사용하지 않음
        //  html <form></form> 태그로 전송하는 방식을 이용함
        //  자바스크립트에서 html form 태그와 같은 FormData  객체가 있음  
        //  .append( "속성명", 값) 함수  : 데이터를 저장 ( 맵 자료구조와 비슷 )
        //  axios 함수 : .post() 를 사용
        // "Content-Type" : "multipart/form-data"  형태로 헤더에서 보냄

        let formData = new FormData();  //  form 객체 생성

        formData.append("fileTitle" , title);
        formData.append("fileContent" , content);
        formData.append("fileDb" , fileDb);

        return http.post("/fileDb/upload", formData, {
            // 헤더정보를 입력
            headers:{
                "Content-Type" : "multipart/form-data" 
            }
        })
    }

    // 이미지 제목 검색함수
    getFiles(fileTitle,page,size){
        console.log(fileTitle);
        console.log(page);
        console.log(size);

        return http.get(`/fileDb?fileTitle=${fileTitle}&page=${page}&size=${size}`);
    }

    // 이미지 삭제 함수
    deleteFiles(fid){
        return http.delete(`/fileDb/deletion/${fid}`);
    }
}

//  클래스를 생성자 호출해서 내보내기
export default new FileDbDataService();