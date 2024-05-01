class User {
  id: number;
  posts: Post[];
  followers: User[];

  constructor(id: number) {
    this.id = id;
    this.posts = [];
    this.followers = [];
  }

  createPost(nd: string) {
    const post = new Post(this.id, nd);
    this.posts.push(post);
  }
  comment(post: Post, nd: string) {
    const comment = new Comment(this.id, nd);
    post.addComment(comment);
  }

  follow(user: User) {
    this.followers.push(user);
  }

  likePost(post: Post) {
    post.addLike(this.id);
  }

  viewFeed() {
    for (const user of this.followers) {
      for (const post of user.posts) {
        console.log(`User ${user.id}-Post ${post.id}:${post.content}`);
      }
    }
  }
}

class Post {
  id: number;
  userId: number;
  likes: number[];
  comments: Comment[];
  content: string;

  constructor(userId: number, content: string) {
    this.id = Date.now();
    this.userId = userId;
    this.likes = [];
    this.comments = [];
    this.content = content;
  }

  addLike(userId: number) {
    this.likes.push(userId);
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }
}

class Comment1 {
  id: number;
  userId: number;
  content: string;
  replies: Comment[];

  constructor(userId: number, content: string) {
    this.id = Date.now();
    this.userId = userId;
    this.content = content;
    this.replies = [];
  }
}


const user6 = new User(1);
const user8 = new User(2);

user6.createPost(" bài viet mới");
user8.createPost("tôi và chó");

user6.follow(user8);

user6.likePost(user8.posts[0]);
user6.comment(user8.posts[0], "đẹp quá");

console.log(user6.posts[0]);
