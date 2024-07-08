/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InventoryWhereInput } from "./InventoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { InventoryOrderByInput } from "./InventoryOrderByInput";

@ArgsType()
class InventoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => InventoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => InventoryWhereInput, { nullable: true })
  @Type(() => InventoryWhereInput)
  where?: InventoryWhereInput;

  @ApiProperty({
    required: false,
    type: [InventoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [InventoryOrderByInput], { nullable: true })
  @Type(() => InventoryOrderByInput)
  orderBy?: Array<InventoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { InventoryFindManyArgs as InventoryFindManyArgs };
