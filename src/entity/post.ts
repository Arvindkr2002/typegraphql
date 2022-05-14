import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import {User} from "user.ts"

@ObjectType()
@Entity()
export class post extends BaseEntity {
  @Field()
  @Column()
  title: string;

  @Field()
  @Column()
  by: User;

}