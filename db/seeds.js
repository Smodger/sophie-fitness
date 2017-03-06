const mongoose = require('mongoose');
const db = require('../config/db');
const Blog = require('../models/blog');

mongoose.connect(db.uri);

Blog.collection.drop();

Blog.create([{
  title: 'Test Blog 1',
  author: 'Bis',
  image: 'https://pbs.twimg.com/profile_images/591235840652619776/7Y6spghi.jpg'
},{
  title: 'Test Blog 2',
  author: 'Sophie',
  image: 'http://mynorthants.co.uk/wp-content/uploads/2017/01/idUPnufpT0q6miq5Mxvu_fitness.jpg'
}], (err, blogs) => {
  if(err) console.log('There was an error creating blogs', err);

  console.log(`${blogs.length} blogs created!`);
  mongoose.connection.close();
});
