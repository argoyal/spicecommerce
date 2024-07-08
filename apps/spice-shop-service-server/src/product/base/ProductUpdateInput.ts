/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  IsNumber,
  Min,
  Max,
  ValidateNested,
} from "class-validator";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
import { Type } from "class-transformer";
import { InventoryWhereUniqueInput } from "../../inventory/base/InventoryWhereUniqueInput";
import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { InventoryUpdateManyWithoutProductsInput } from "./InventoryUpdateManyWithoutProductsInput";
import { CartUpdateManyWithoutProductsInput } from "./CartUpdateManyWithoutProductsInput";

@InputType()
class ProductUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  category?: CategoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => InventoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InventoryWhereUniqueInput)
  @IsOptional()
  @Field(() => InventoryWhereUniqueInput, {
    nullable: true,
  })
  inventory?: InventoryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => OrderUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => OrderUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => OrderUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  orders?: OrderUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => InventoryUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => InventoryUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => InventoryUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  inventories?: InventoryUpdateManyWithoutProductsInput;

  @ApiProperty({
    required: false,
    type: () => CartUpdateManyWithoutProductsInput,
  })
  @ValidateNested()
  @Type(() => CartUpdateManyWithoutProductsInput)
  @IsOptional()
  @Field(() => CartUpdateManyWithoutProductsInput, {
    nullable: true,
  })
  carts?: CartUpdateManyWithoutProductsInput;
}

export { ProductUpdateInput as ProductUpdateInput };