패키지 설치
```bash 
npm i express mysql sequelize
```

```bash
npm i -D dotenv nodemon prettier sequelize-cli
```

```bash
npx sequelize init
```

### Sequelize model 생성
-- Users Table
npx sequelize model:generate --name Users --attributes userId:string,teamId:string,name:string,password:string,createdAt:date,updatedAt:date

-- UserInfos Table
npx sequelize model:generate --name UserInfos --attributes userInfoId:string,userId:string,profileImage:string,nickname:string,age:integer,gender:string,position:string,createdAt:date,updatedAt:date

-- Teams
npx sequelize model:generate --name Teams --attributes teamId:string,userId:string,teamName:string,userRole:string,createdAt:date,updatedAt:date

-- Comments Table
npx sequelize model:generate --name Comments --attributes commentId:string,postId:string,userId:string,parentCommentId:string,content:string,createdAt:date,updatedAt:date

-- Posts Table
npx sequelize model:generate --name Posts --attributes postId:string,userId:string,title:string,introduce:string,content:string,thumnail:string,createdAt:date,updatedAt:date

-- ResourceStorage Table
npx sequelize model:generate --name ResourceStorage --attributes resourseId:string,postId:string,resoureUrl:string,createdAt:date,updatedAt:date

-- PostTags Table
npx sequelize model:generate --name PostTags --attributes tagId:string,postId:string,tagName:string,createdAt:date,updatedAt:date

-- LikePosts Table
npx sequelize model:generate --name LikePosts --attributes likeId:string,postId:string,userId:string,createdAt:date,updatedAt:date

-- LikeComments Table
npx sequelize model:generate --name LikeComments --attributes likeId:string,commentId:string,userId:string,createdAt:date,updatedAt:date

-- CommonItems Table
npx sequelize model:generate --name CommonItems --attributes itemId:string,itemUseTable:string,itemUseColum:string,itemCode:string,itemName:string,createdAt:date,updatedAt:date

model 수정 이후 다음 명령 수행
```bash
# config에 지정한 sequelize-ralation Database 삭제
> npx sequelize db:drop
# config에 지정한 sequelize-ralation Database 재 생성
> npx sequelize db:create
> npx sequelize
> node app.js
```