import { Component, OnInit } from '@angular/core';
import { Blog } from './blog';

@Component({
  selector: 'app-blog-layout',
  templateUrl: './blog-layout.component.html',
  styleUrls: ['./blog-layout.component.css']
})
export class BlogLayoutComponent {
   
	holdBlog: Array<Blog> = [];

	displayBlog(blogtitle, blogcomment){
		const blogData = new Blog( blogtitle, blogcomment);

		this.holdBlog.push(blogData);
		this.clearForm(blogtitle, blogcomment);
		console.log(blogData);
	};
	clearForm(blogtitle, blogcomment){
	   blogtitle.value = '';
	   blogcomment.value = '';
	   return;
	}
}
