import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DonationCreateManyInput } from './donation-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyDonationArgs {

    @Field(() => [DonationCreateManyInput], {nullable:false})
    @Type(() => DonationCreateManyInput)
    data!: Array<DonationCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
