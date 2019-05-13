package main

import (
    "fmt"
    "encoding/json"
    "net/http"
    "strconv"
    "github.com/gorilla/mux"
    "github.com/nu7hatch/gouuid"
)

type Pic struct {
    Id string `json:"id"`
    Url string `json:"url"`
    AlbumId int `json:"albumId"`
}

var pics map[string] *Pic

func GetPic(rw http.ResponseWriter, req * http.Request) {

}


func DeletePic(rw http.ResponseWriter, req * http.Request) {

 
}

func AddPic(rw http.ResponseWriter, req * http.Request) {

  
}

func GetUUIDString() string {
    u4, err:= uuid.NewV4()
     if err != nil {
            fmt.Println("error:", err)
        }
    return fmt.Sprintf("%x", u4)
}

func GetSomePic() map[string] *Pic {

   picArr := [...]*Pic{
        {
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/1.jpg",
            AlbumId: 200,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/2.jpg",
            AlbumId: 200,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/3.jpg",
            AlbumId: 200,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/4.jpg",
            AlbumId: 400,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/7.jpg",
            AlbumId: 300,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/10.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/11.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/12.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/14.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/15.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/16.jpg",
            AlbumId: 800,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/17.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/18.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/19.jpg",
            AlbumId: 600,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/20.jpg",
            AlbumId: 200,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/21.jpg",
            AlbumId: 400,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/22.jpg",
            AlbumId: 400,
        },{
            Id: GetUUIDString(),
            Url:"/resources/images/thumbs/23.jpg",
            AlbumId: 200,
        },}
            
    pics := make(map[string] *Pic)
    idx := 0
    for  _, value := range picArr {
       pics[value.Id] = value
       idx++
    }
    return pics;
}

func GetPics(rw http.ResponseWriter, req * http.Request) {

   
    v := make([]*Pic, 0, len(pics))

    for  _, value := range pics {
       v = append(v, value)
    }
    js, err:= json.Marshal(v)
    if err != nil {
        http.Error(rw, err.Error(), http.StatusInternalServerError)
        return
    }

    fmt.Fprint(rw, string(js))
}


func main() {

    var port = 9001
    router:= mux.NewRouter()
    pics = make(map[string] *Pic)
    pics = GetSomePic();
    router.HandleFunc("/pics", GetPics).Methods("GET")
    router.HandleFunc("/pics", AddPic).Methods("POST")
    router.HandleFunc("/pics/{id}", GetPic).Methods("GET")
    router.HandleFunc("/pics/{id}", DeletePic).Methods("DELETE")
    router.PathPrefix("/").Handler(http.FileServer(http.Dir("../")))
    
    fmt.Println("Listening on port", port)
    http.ListenAndServe("localhost:" + strconv.Itoa(port), router)
}