export class Blog{
    desTitle : String = '';
    desComment : String = "";

    constructor(blogtitle, blogcomment){
        this.desTitle = blogtitle.value;
        this.desComment = blogcomment.value;
    }
}