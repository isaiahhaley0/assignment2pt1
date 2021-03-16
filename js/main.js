const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            curretPage: 0,
            result: null
        }
    },
    "pagination": {
        "total": 10000,
        "per_page": 50,
        "current_page": 15,
        "last_page": 200,
        "next_page_url": "/api/stories?page=16",
        "prev_page_url": "/api/stories?page=14",
        "from": 751,
        "to": 800,
      },
    methods: {
        searchGoogleBooks() {
             
            fetch('https://www.googleapis.com/books/v1/volumes?q=' + this.keyword + "&startIndex="+ this.curretPage*20 + "&maxResults=20")
            .then(response => response.json())
            .then(json => this.result = json)       
        },
        nextPage() {
            this.curretPage += 1
            this.searchGoogleBooks()    
        },
        prevPage() {


            if(this.curretPage > 0){
            this.curretPage -= 1
            this.searchGoogleBooks()
            }    
        }
    }
})