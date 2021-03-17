app.component('book-display', {
    props: {
        book: {
            type: String,
            required: true,
            default: null
        }
    },
    template:
        /*html*/
        `<ul class="col-sm-12 col-md-6 col-xl-4">
        
    <a class="list-group-item list-group-item-action active" :href="this.bookObj.selfLink">{{this.bookObj.volumeInfo.title}}</a>
     

    <li class="list-group-item" v-for="author in this.bookObj.volumeInfo.authors">
     {{ author }}
    </li>

    <li class="list-group-item" v-if="this.bookObj.volumeInfo.publisher != undefined">{{this.bookObj.volumeInfo.publisher}}, {{this.bookObj.volumeInfo.publishedDate}}</li>
    <li class="list-group-item" >
        <div v-if = "this.bookObj.accessInfo.epub.isAvailable === true" >
            Available As EPUB 
        </div>
        <div v-if = "this.bookObj.accessInfo.pdf.isAvailable === true" >
            Available As PDF 
        </div>
    </li>
    
    <img v-if="this.bookObj.volumeInfo.imageLinks != undefined" :src="this.bookObj.volumeInfo.imageLinks.thumbnail" width="150" height="150">
    <li class="list-group-item" v-if="this.bookObj.volumeInfo.averageRating != undefined">
        <img  v-if="this.bookObj.volumeInfo.averageRating === 5" :src="'stars/fivestar.png'" width="140" height = "32">
        <img  v-else-if="this.bookObj.volumeInfo.averageRating >= 4" :src="'stars/fourstar.png'" width="140" height = "32">
        <img  v-else-if="this.bookObj.volumeInfo.averageRating >= 3" :src="'stars/threestar.png'" width="140" height = "32">
        <img  v-else-if="this.bookObj.volumeInfo.averageRating >= 2" :src="'stars/twostar.png'" width="140" height = "32">
        <img  v-else-if="this.bookObj.volumeInfo.averageRating >= 0" :src="'stars/onestar.png'" width="140" height = "32">
        Rating: {{this.bookObj.volumeInfo.averageRating}}
    </li>
    
    </ul>
     `,
    computed: {
        bookObj() {
            try{
            if (this.book != null)
                return JSON.parse(this.book);
            else
                return null;
            }
            catch(error)
            {
                console.error('outer',error.message)
            }
        }
    }



})