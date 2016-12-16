#About

This is a basic webpack build system with some content designed for scrolling content. It is a modification of the earlier [webpack build system](https://github.com/AndrewStaroscik/webpack-single-page-builder) I put together. 

#To get started

run `npm install`

#Development

`npm run start` - starts the development server. The page can be viewed at localhost:8080 or over the local network (to preview on mobile devices)

#Production

`npm run build` - generates static resources in the build folder that can be used as sigle page or embeded into a page on a site (such as a post on docpad or jekyll)

#Limitations

This is still a work in progress. It is not a one click deployment solution. Once the index.js, "bundle".js and "main".css files are created they need to be moved to where they are wanted in the containing framework (i.e. jekyll or docpad) and renamed as desired.

They can be renamed during this step as desired, but for everyting to work the html file needs one and only one div with id `mainFrame` 

#Next Steps

* Add a clean step to delete build folder as the first step of the `npm run build` call
* Add more variables to the `webpack.config.js` file to make it easier to customize the target div id (default mainFrame).
* Get [webpack-validator working with stylus](http://disq.us/p/19ptmz7)