npx sequelize model:generate --name user --attributes "user_id:string,firstn
ame:string,lastname:string,email:string,password:string,user_imageURL:string,is_Admin:boolean"

npx sequelize model:generate --name post --attributes "post_id:string,post_user_id:string,post_body:string,post_date:string,post_imageURL:string"

npx sequelize model:generate --name comment --attributes "comment_post_id:string,commentt_user_id:string,comment_id:string,comment_body:string,comment_date:string,comment_imageURL:string
pour creer la liason entre sass et css
sass styles.scss index.css 
pour compiler le tous dans le css
sass --watch styles.scss index.css 