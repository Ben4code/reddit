// import {Entity as TOEntity, Column, Index, ManyToOne, JoinColumn} from "typeorm";

// import User from './User'
// import Entity from "./Entity";

// @TOEntity("posts")
// export default class Post extends Entity{
//     constructor(post: Partial<Post>){
//       super()
//       Object.assign(this, post)
//     }

//     @Index()
//     @Column()
//     identifier: string;

//     @Index()
//     @Column()
//     title: string;
    
//     @Index()
//     @Column({ nullable: true, type: 'text' })
//     body: string;

//     @Column()
//     subName: string;

//     @ManyToOne(() => User, user => user.posts)
//     @JoinColumn({ name: 'username', referencedColumnName: 'username'})
//     user: User
// }
