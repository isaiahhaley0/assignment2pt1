const app = Vue.createApp({
    data() {
        return {
            keyword: '',
            curretPage: 0,
            result: null
        }
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
            if(this.curretPage > 0)
            {
                document.getElementById("prev").classList.remove(invisible);
            }    
        },
        prevPage() {


            if(this.curretPage > 0){
            this.curretPage -= 1;
            this.searchGoogleBooks();
            }
            if(this.curretPage == 0)
            {
                document.getElementById("prev").classList.add(invisible);
            }    
        }
    }
})