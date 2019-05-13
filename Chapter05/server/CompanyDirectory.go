package main

import (
    "fmt"
    "encoding/json"
    "net/http"
    "strconv"
    "github.com/gorilla/mux"
    "github.com/nu7hatch/gouuid"
)

type Task struct {
    Id string `json:"id"`
    Fname string `json:"fname"`
    Lname string `json:"lname"`
    Address string `json:"address"`
    City string `json:"city"`
    State string `json:"state"`
    Type string `json:"type"`
    Email string `json:"email"`
    Phone string `json:"phone"`
}

var tasks map[string] *Task

func GetContactList(rw http.ResponseWriter, req * http.Request) {

    vars := mux.Vars(req)
    task := tasks[vars["id"]]

    js, err := json.Marshal(task)
    if err != nil {
        http.Error(rw, err.Error(), http.StatusInternalServerError)
        return
    }

    fmt.Fprint(rw, string(js))
}

func UpdateContactList(rw http.ResponseWriter, req * http.Request) {

    vars := mux.Vars(req)

    task:= tasks[vars["id"]]

    dec:= json.NewDecoder(req.Body)
    err:= dec.Decode( & task)
    if err != nil {
        http.Error(rw, err.Error(), http.StatusInternalServerError)
        return
    }

    task.Id = vars["id"]

    retjs, err:= json.Marshal(task)
    if err != nil {
        http.Error(rw, err.Error(), http.StatusInternalServerError)
        return
    }

    fmt.Fprint(rw, string(retjs))
}

func DeleteContactList(rw http.ResponseWriter, req * http.Request) {

    vars := mux.Vars(req)
    delete(tasks, vars["id"])
    fmt.Fprint(rw, "{status : 'success'}")
}

func AddContactList(rw http.ResponseWriter, req * http.Request) {

    task:= new(Task)

    dec:= json.NewDecoder(req.Body)
    err:= dec.Decode( & task)
    if err != nil {
        http.Error(rw, err.Error(), http.StatusInternalServerError)
        return
    }

    tasks[task.Id] = task

    retjs, err:= json.Marshal(task)
    if err != nil {
        http.Error(rw, err.Error(), http.StatusInternalServerError)
        return
    }

    fmt.Fprint(rw, string(retjs))
}

func GetUUIDString() string {
    u4, err:= uuid.NewV4()
     if err != nil {
            fmt.Println("error:", err)
        }
    return fmt.Sprintf("%x", u4)
}

func GetSomeContactList() map[string] *Task {

   taskArr := [...]*Task{
   {
            Id: GetUUIDString(),
            Fname: "Mani",
            Lname: "Ratnam",
            Address: "233 156th Ave",
            City: "Bothell",
            State: "WA",
            Email: "lisa@someemaildomain.com",
            Type: "Fulltime",
            Phone: "555-623-3222",
        }, {
            Id: GetUUIDString(),
            Fname: "Mark",
            Lname: "Schmit",
            Address: "24424 156th Ave",
            City: "Everett",
            State: "WA",
            Type: "Vendor",
            Email: "Ravi@someemaildomain.com",
            Phone: "555-532-3453",
        }, {
            Id: GetUUIDString(),
            Fname: "Joe",
            Lname: "Rubino",
            Address: "2343 156th Ave",
            City: "Seattle",
            State: "WA",
            Type: "Fulltime",
            Email: "Joe@someemaildomain.com",
            Phone: "425-534-2342",
        }, {
            Id: GetUUIDString(),
            Fname: "Jeremy",
            Lname: "Britten",
            Address: "1111 156th Ave",
            City: "Redmond",
            State: "WA",
            Type: "Fulltime",
            Email: "Jeremy@someemaildomain.com",
            Phone: "425-342-1234",
        }, {
            Id: GetUUIDString(),
            Fname: "Theyagarajan",
            Lname: "V",
            Address: "342 1th Ave",
            City: "Bothell",
            State: "WA",
            Type: "Vendor",
            Email: "Theyagarajan@someemaildomain.com",
            Phone: "232-222-1234",
        }, {
            Id: GetUUIDString(),
            Fname: "Stanley",
            Lname: "Kubrick",
            Address: "3412 16th Ave",
            City: "Bothell",
            State: "WA",
            Type: "Fulltime",
            Email: "bart@someemaildomain.com",
            Phone: "425-222-1234",
        }, {
            Id: GetUUIDString(),
            Fname: "Kamal",
            Lname: "Hassan",
            Address: "1111 16th Ave",
            City: "Bothell",
            State: "WA",
            Type: "Vendor",
            Email: "homer@someemaildomain.com",
            Phone: "423-222-3453",
        }, {
            Id: GetUUIDString(),
            Fname: "Marge",
            Lname: "Joe",
            Address: "1111 56th Ave",
            City: "Bothell",
            State: "WA",
            Type: "Contractor",
            Email: "marge@someemaildomain.com",
            Phone: "324-222-2421",
        },}
            
    tasks := make(map[string] *Task)
    idx := 0
    for  _, value := range taskArr {
       tasks[value.Id] = value
       idx++
    }
    return tasks;
}

func GetContactLists(rw http.ResponseWriter, req * http.Request) {

   
    v := make([]*Task, 0, len(tasks))

    for  _, value := range tasks {
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
    tasks = make(map[string] *Task)
    tasks = GetSomeContactList();
    router.HandleFunc("/contactlist", GetContactLists).Methods("GET")
    router.HandleFunc("/contactlist", AddContactList).Methods("POST")
    router.HandleFunc("/contactlist/{id}", GetContactList).Methods("GET")
    router.HandleFunc("/contactlist/{id}", UpdateContactList).Methods("PUT")
    router.HandleFunc("/contactlist/{id}", DeleteContactList).Methods("DELETE")
    router.PathPrefix("/").Handler(http.FileServer(http.Dir("../")))
    
    fmt.Println("Listening on port", port)
    http.ListenAndServe("localhost:" + strconv.Itoa(port), router)
}