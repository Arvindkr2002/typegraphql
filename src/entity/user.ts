import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
@Entity()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  Username: string;

  @Field()
  @Column()
  posts: Array;

  @Field()
  @Column("text", { unique: true })
  email: string;

  @Column()
  password: string;
}