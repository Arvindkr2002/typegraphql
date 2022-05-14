import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "../entity/user";
import { post } from "../entity/post";
import { MyContext } from "../../MyContent";


    if (Ctx.req.session!.userId) {
        @Resolver()
        export class PostResolver {
          @Mutation(() => post, { nullable: true })
          async post(
            @Arg("title") title: string,
            @Arg("By") By: User,
          ): Promise<post> {
            const user = await post.create({
              title,
              By
            }).save();
        
            return post;
          }
        }
    }