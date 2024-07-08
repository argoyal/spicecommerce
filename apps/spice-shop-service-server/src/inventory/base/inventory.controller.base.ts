/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { InventoryService } from "../inventory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { InventoryCreateInput } from "./InventoryCreateInput";
import { Inventory } from "./Inventory";
import { InventoryFindManyArgs } from "./InventoryFindManyArgs";
import { InventoryWhereUniqueInput } from "./InventoryWhereUniqueInput";
import { InventoryUpdateInput } from "./InventoryUpdateInput";
import { ProductFindManyArgs } from "../../product/base/ProductFindManyArgs";
import { Product } from "../../product/base/Product";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class InventoryControllerBase {
  constructor(
    protected readonly service: InventoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Inventory })
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createInventory(
    @common.Body() data: InventoryCreateInput
  ): Promise<Inventory> {
    return await this.service.createInventory({
      data: {
        ...data,

        product: data.product
          ? {
              connect: data.product,
            }
          : undefined,
      },
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,

        product: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [Inventory] })
  @ApiNestedQuery(InventoryFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async inventories(@common.Req() request: Request): Promise<Inventory[]> {
    const args = plainToClass(InventoryFindManyArgs, request.query);
    return this.service.inventories({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,

        product: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async inventory(
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Inventory | null> {
    const result = await this.service.inventory({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        quantity: true,

        product: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateInventory(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() data: InventoryUpdateInput
  ): Promise<Inventory | null> {
    try {
      return await this.service.updateInventory({
        where: params,
        data: {
          ...data,

          product: data.product
            ? {
                connect: data.product,
              }
            : undefined,
        },
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          quantity: true,

          product: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Inventory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteInventory(
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Inventory | null> {
    try {
      return await this.service.deleteInventory({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          quantity: true,

          product: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id/products")
  @ApiNestedQuery(ProductFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "Product",
    action: "read",
    possession: "any",
  })
  async findProducts(
    @common.Req() request: Request,
    @common.Param() params: InventoryWhereUniqueInput
  ): Promise<Product[]> {
    const query = plainToClass(ProductFindManyArgs, request.query);
    const results = await this.service.findProducts(params.id, {
      ...query,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        description: true,
        price: true,

        category: {
          select: {
            id: true,
          },
        },

        inventory: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "update",
    possession: "any",
  })
  async connectProducts(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        connect: body,
      },
    };
    await this.service.updateInventory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "update",
    possession: "any",
  })
  async updateProducts(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        set: body,
      },
    };
    await this.service.updateInventory({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/products")
  @nestAccessControl.UseRoles({
    resource: "Inventory",
    action: "update",
    possession: "any",
  })
  async disconnectProducts(
    @common.Param() params: InventoryWhereUniqueInput,
    @common.Body() body: ProductWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      products: {
        disconnect: body,
      },
    };
    await this.service.updateInventory({
      where: params,
      data,
      select: { id: true },
    });
  }
}
