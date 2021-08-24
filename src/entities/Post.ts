import { Entity as TOEntity, Column, Index, ManyToOne, JoinColumn, BeforeInsert } from "typeorm";

import User from './User'
import Entity from "./Entity";
import { makeId, slugify } from "../util/helpers";
import Sub from "./Sub";

@TOEntity("posts")
export default class Post extends Entity {
  constructor(post: Partial<Post>) {
    super()
    Object.assign(this, post)
  }

  @Index()
  @Column()
  identifier: string;

  @Index()
  @Column()
  title: string;

  @Index()
  @Column()
  slug: string;

  @Index()
  @Column({ nullable: true, type: 'text' })
  body: string;

  @Column()
  subName: string;

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'username', referencedColumnName: 'username' })
  user: User

  @ManyToOne(() => Sub, sub => sub.posts)
  @JoinColumn({ name: 'subName', referencedColumnName: 'name' })
  sub: Sub

  @BeforeInsert()
  makeId() {
    this.identifier = makeId(7)
    this.slug = slugify(this.title)
  }
}
