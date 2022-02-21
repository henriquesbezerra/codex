/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */





declare global {
  interface NexusGenCustomOutputProperties<TypeName extends string> {
    crud: NexusPrisma<TypeName, 'crud'>
    model: NexusPrisma<TypeName, 'model'>
  }
}

declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  BoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  DateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  DateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  IntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedBoolFilter: { // input type
    equals?: boolean | null; // Boolean
    not?: NexusGenInputs['NestedBoolFilter'] | null; // NestedBoolFilter
  }
  NestedDateTimeFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeFilter'] | null; // NestedDateTimeFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedDateTimeNullableFilter: { // input type
    equals?: NexusGenScalars['DateTime'] | null; // DateTime
    gt?: NexusGenScalars['DateTime'] | null; // DateTime
    gte?: NexusGenScalars['DateTime'] | null; // DateTime
    in?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
    lt?: NexusGenScalars['DateTime'] | null; // DateTime
    lte?: NexusGenScalars['DateTime'] | null; // DateTime
    not?: NexusGenInputs['NestedDateTimeNullableFilter'] | null; // NestedDateTimeNullableFilter
    notIn?: NexusGenScalars['DateTime'][] | null; // [DateTime!]
  }
  NestedIntFilter: { // input type
    equals?: number | null; // Int
    gt?: number | null; // Int
    gte?: number | null; // Int
    in?: number[] | null; // [Int!]
    lt?: number | null; // Int
    lte?: number | null; // Int
    not?: NexusGenInputs['NestedIntFilter'] | null; // NestedIntFilter
    notIn?: number[] | null; // [Int!]
  }
  NestedStringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  PostCreateInput: { // input type
    autor: NexusGenInputs['UserCreateNestedOneWithoutPostsInput']; // UserCreateNestedOneWithoutPostsInput!
    conteudo: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    publicado?: boolean | null; // Boolean
    reviews?: NexusGenInputs['ReviewCreateNestedManyWithoutPostInput'] | null; // ReviewCreateNestedManyWithoutPostInput
    titulo: string; // String!
  }
  PostCreateManyAutorInput: { // input type
    conteudo: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: number | null; // Int
    publicado?: boolean | null; // Boolean
    titulo: string; // String!
  }
  PostCreateManyAutorInputEnvelope: { // input type
    data?: NexusGenInputs['PostCreateManyAutorInput'][] | null; // [PostCreateManyAutorInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  PostCreateNestedManyWithoutAutorInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'][] | null; // [PostWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['PostCreateOrConnectWithoutAutorInput'][] | null; // [PostCreateOrConnectWithoutAutorInput!]
    create?: NexusGenInputs['PostCreateWithoutAutorInput'][] | null; // [PostCreateWithoutAutorInput!]
    createMany?: NexusGenInputs['PostCreateManyAutorInputEnvelope'] | null; // PostCreateManyAutorInputEnvelope
  }
  PostCreateNestedOneWithoutReviewsInput: { // input type
    connect?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
    connectOrCreate?: NexusGenInputs['PostCreateOrConnectWithoutReviewsInput'] | null; // PostCreateOrConnectWithoutReviewsInput
    create?: NexusGenInputs['PostCreateWithoutReviewsInput'] | null; // PostCreateWithoutReviewsInput
  }
  PostCreateOrConnectWithoutAutorInput: { // input type
    create: NexusGenInputs['PostCreateWithoutAutorInput']; // PostCreateWithoutAutorInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostCreateOrConnectWithoutReviewsInput: { // input type
    create: NexusGenInputs['PostCreateWithoutReviewsInput']; // PostCreateWithoutReviewsInput!
    where: NexusGenInputs['PostWhereUniqueInput']; // PostWhereUniqueInput!
  }
  PostCreateWithoutAutorInput: { // input type
    conteudo: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    publicado?: boolean | null; // Boolean
    reviews?: NexusGenInputs['ReviewCreateNestedManyWithoutPostInput'] | null; // ReviewCreateNestedManyWithoutPostInput
    titulo: string; // String!
  }
  PostCreateWithoutReviewsInput: { // input type
    autor: NexusGenInputs['UserCreateNestedOneWithoutPostsInput']; // UserCreateNestedOneWithoutPostsInput!
    conteudo: string; // String!
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    publicado?: boolean | null; // Boolean
    titulo: string; // String!
  }
  PostListRelationFilter: { // input type
    every?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    none?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    some?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
  }
  PostOrderByRelationAggregateInput: { // input type
    _count?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  PostWhereInput: { // input type
    AND?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    NOT?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    OR?: NexusGenInputs['PostWhereInput'][] | null; // [PostWhereInput!]
    autor?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    autorId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    conteudo?: NexusGenInputs['StringFilter'] | null; // StringFilter
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    publicado?: NexusGenInputs['BoolFilter'] | null; // BoolFilter
    reviews?: NexusGenInputs['ReviewListRelationFilter'] | null; // ReviewListRelationFilter
    titulo?: NexusGenInputs['StringFilter'] | null; // StringFilter
  }
  PostWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  ReviewCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    nota: number; // Int!
    post: NexusGenInputs['PostCreateNestedOneWithoutReviewsInput']; // PostCreateNestedOneWithoutReviewsInput!
    reviewer: NexusGenInputs['UserCreateNestedOneWithoutReviewsInput']; // UserCreateNestedOneWithoutReviewsInput!
  }
  ReviewCreateManyPostInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: number | null; // Int
    nota: number; // Int!
    reviewerId: number; // Int!
  }
  ReviewCreateManyPostInputEnvelope: { // input type
    data?: NexusGenInputs['ReviewCreateManyPostInput'][] | null; // [ReviewCreateManyPostInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  ReviewCreateManyReviewerInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id?: number | null; // Int
    nota: number; // Int!
    postId: number; // Int!
  }
  ReviewCreateManyReviewerInputEnvelope: { // input type
    data?: NexusGenInputs['ReviewCreateManyReviewerInput'][] | null; // [ReviewCreateManyReviewerInput!]
    skipDuplicates?: boolean | null; // Boolean
  }
  ReviewCreateNestedManyWithoutPostInput: { // input type
    connect?: NexusGenInputs['ReviewWhereUniqueInput'][] | null; // [ReviewWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['ReviewCreateOrConnectWithoutPostInput'][] | null; // [ReviewCreateOrConnectWithoutPostInput!]
    create?: NexusGenInputs['ReviewCreateWithoutPostInput'][] | null; // [ReviewCreateWithoutPostInput!]
    createMany?: NexusGenInputs['ReviewCreateManyPostInputEnvelope'] | null; // ReviewCreateManyPostInputEnvelope
  }
  ReviewCreateNestedManyWithoutReviewerInput: { // input type
    connect?: NexusGenInputs['ReviewWhereUniqueInput'][] | null; // [ReviewWhereUniqueInput!]
    connectOrCreate?: NexusGenInputs['ReviewCreateOrConnectWithoutReviewerInput'][] | null; // [ReviewCreateOrConnectWithoutReviewerInput!]
    create?: NexusGenInputs['ReviewCreateWithoutReviewerInput'][] | null; // [ReviewCreateWithoutReviewerInput!]
    createMany?: NexusGenInputs['ReviewCreateManyReviewerInputEnvelope'] | null; // ReviewCreateManyReviewerInputEnvelope
  }
  ReviewCreateOrConnectWithoutPostInput: { // input type
    create: NexusGenInputs['ReviewCreateWithoutPostInput']; // ReviewCreateWithoutPostInput!
    where: NexusGenInputs['ReviewWhereUniqueInput']; // ReviewWhereUniqueInput!
  }
  ReviewCreateOrConnectWithoutReviewerInput: { // input type
    create: NexusGenInputs['ReviewCreateWithoutReviewerInput']; // ReviewCreateWithoutReviewerInput!
    where: NexusGenInputs['ReviewWhereUniqueInput']; // ReviewWhereUniqueInput!
  }
  ReviewCreateWithoutPostInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    nota: number; // Int!
    reviewer: NexusGenInputs['UserCreateNestedOneWithoutReviewsInput']; // UserCreateNestedOneWithoutReviewsInput!
  }
  ReviewCreateWithoutReviewerInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    nota: number; // Int!
    post: NexusGenInputs['PostCreateNestedOneWithoutReviewsInput']; // PostCreateNestedOneWithoutReviewsInput!
  }
  ReviewListRelationFilter: { // input type
    every?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    none?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
    some?: NexusGenInputs['ReviewWhereInput'] | null; // ReviewWhereInput
  }
  ReviewOrderByRelationAggregateInput: { // input type
    _count?: NexusGenEnums['SortOrder'] | null; // SortOrder
  }
  ReviewWhereInput: { // input type
    AND?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    NOT?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    OR?: NexusGenInputs['ReviewWhereInput'][] | null; // [ReviewWhereInput!]
    createdAt?: NexusGenInputs['DateTimeNullableFilter'] | null; // DateTimeNullableFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    nota?: NexusGenInputs['IntFilter'] | null; // IntFilter
    post?: NexusGenInputs['PostWhereInput'] | null; // PostWhereInput
    postId?: NexusGenInputs['IntFilter'] | null; // IntFilter
    reviewer?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    reviewerId?: NexusGenInputs['IntFilter'] | null; // IntFilter
  }
  ReviewWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
  StringFilter: { // input type
    contains?: string | null; // String
    endsWith?: string | null; // String
    equals?: string | null; // String
    gt?: string | null; // String
    gte?: string | null; // String
    in?: string[] | null; // [String!]
    lt?: string | null; // String
    lte?: string | null; // String
    not?: NexusGenInputs['NestedStringFilter'] | null; // NestedStringFilter
    notIn?: string[] | null; // [String!]
    startsWith?: string | null; // String
  }
  UserCreateInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    nome: string; // String!
    posts?: NexusGenInputs['PostCreateNestedManyWithoutAutorInput'] | null; // PostCreateNestedManyWithoutAutorInput
    reviews?: NexusGenInputs['ReviewCreateNestedManyWithoutReviewerInput'] | null; // ReviewCreateNestedManyWithoutReviewerInput
  }
  UserCreateNestedOneWithoutPostsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutPostsInput'] | null; // UserCreateOrConnectWithoutPostsInput
    create?: NexusGenInputs['UserCreateWithoutPostsInput'] | null; // UserCreateWithoutPostsInput
  }
  UserCreateNestedOneWithoutReviewsInput: { // input type
    connect?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
    connectOrCreate?: NexusGenInputs['UserCreateOrConnectWithoutReviewsInput'] | null; // UserCreateOrConnectWithoutReviewsInput
    create?: NexusGenInputs['UserCreateWithoutReviewsInput'] | null; // UserCreateWithoutReviewsInput
  }
  UserCreateOrConnectWithoutPostsInput: { // input type
    create: NexusGenInputs['UserCreateWithoutPostsInput']; // UserCreateWithoutPostsInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateOrConnectWithoutReviewsInput: { // input type
    create: NexusGenInputs['UserCreateWithoutReviewsInput']; // UserCreateWithoutReviewsInput!
    where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
  }
  UserCreateWithoutPostsInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    nome: string; // String!
    reviews?: NexusGenInputs['ReviewCreateNestedManyWithoutReviewerInput'] | null; // ReviewCreateNestedManyWithoutReviewerInput
  }
  UserCreateWithoutReviewsInput: { // input type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    email: string; // String!
    nome: string; // String!
    posts?: NexusGenInputs['PostCreateNestedManyWithoutAutorInput'] | null; // PostCreateNestedManyWithoutAutorInput
  }
  UserOrderByWithRelationInput: { // input type
    createdAt?: NexusGenEnums['SortOrder'] | null; // SortOrder
    email?: NexusGenEnums['SortOrder'] | null; // SortOrder
    id?: NexusGenEnums['SortOrder'] | null; // SortOrder
    nome?: NexusGenEnums['SortOrder'] | null; // SortOrder
    posts?: NexusGenInputs['PostOrderByRelationAggregateInput'] | null; // PostOrderByRelationAggregateInput
    reviews?: NexusGenInputs['ReviewOrderByRelationAggregateInput'] | null; // ReviewOrderByRelationAggregateInput
  }
  UserWhereInput: { // input type
    AND?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    NOT?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    OR?: NexusGenInputs['UserWhereInput'][] | null; // [UserWhereInput!]
    createdAt?: NexusGenInputs['DateTimeFilter'] | null; // DateTimeFilter
    email?: NexusGenInputs['StringFilter'] | null; // StringFilter
    id?: NexusGenInputs['IntFilter'] | null; // IntFilter
    nome?: NexusGenInputs['StringFilter'] | null; // StringFilter
    posts?: NexusGenInputs['PostListRelationFilter'] | null; // PostListRelationFilter
    reviews?: NexusGenInputs['ReviewListRelationFilter'] | null; // ReviewListRelationFilter
  }
  UserWhereUniqueInput: { // input type
    id?: number | null; // Int
  }
}

export interface NexusGenEnums {
  SortOrder: "asc" | "desc"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Mutation: {};
  Post: { // root type
    conteudo: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    publicado: boolean; // Boolean!
    titulo: string; // String!
  }
  Query: {};
  Review: { // root type
    createdAt?: NexusGenScalars['DateTime'] | null; // DateTime
    id: number; // Int!
    nota: number; // Int!
  }
  User: { // root type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    nome: string; // String!
  }
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  Mutation: { // field return type
    createOnePost: NexusGenRootTypes['Post']; // Post!
    createOneReview: NexusGenRootTypes['Review']; // Review!
    createOneUser: NexusGenRootTypes['User']; // User!
  }
  Post: { // field return type
    autor: NexusGenRootTypes['User']; // User!
    conteudo: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    publicado: boolean; // Boolean!
    titulo: string; // String!
  }
  Query: { // field return type
    buscaAutoresPublicados: Array<NexusGenRootTypes['User'] | null> | null; // [User]
    postsAprovados: Array<NexusGenRootTypes['Post'] | null> | null; // [Post]
    reviews: NexusGenRootTypes['Review'][]; // [Review!]!
    user: NexusGenRootTypes['User'] | null; // User
    users: NexusGenRootTypes['User'][]; // [User!]!
  }
  Review: { // field return type
    createdAt: NexusGenScalars['DateTime'] | null; // DateTime
    id: number; // Int!
    nota: number; // Int!
    post: NexusGenRootTypes['Post']; // Post!
    reviewer: NexusGenRootTypes['User']; // User!
  }
  User: { // field return type
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    nome: string; // String!
    posts: NexusGenRootTypes['Post'][]; // [Post!]!
  }
}

export interface NexusGenFieldTypeNames {
  Mutation: { // field return type name
    createOnePost: 'Post'
    createOneReview: 'Review'
    createOneUser: 'User'
  }
  Post: { // field return type name
    autor: 'User'
    conteudo: 'String'
    createdAt: 'DateTime'
    id: 'Int'
    publicado: 'Boolean'
    titulo: 'String'
  }
  Query: { // field return type name
    buscaAutoresPublicados: 'User'
    postsAprovados: 'Post'
    reviews: 'Review'
    user: 'User'
    users: 'User'
  }
  Review: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    nota: 'Int'
    post: 'Post'
    reviewer: 'User'
  }
  User: { // field return type name
    createdAt: 'DateTime'
    id: 'Int'
    nome: 'String'
    posts: 'Post'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createOnePost: { // args
      data: NexusGenInputs['PostCreateInput']; // PostCreateInput!
    }
    createOneReview: { // args
      data: NexusGenInputs['ReviewCreateInput']; // ReviewCreateInput!
    }
    createOneUser: { // args
      data: NexusGenInputs['UserCreateInput']; // UserCreateInput!
    }
  }
  Query: {
    buscaAutoresPublicados: { // args
      email: string; // String!
    }
    reviews: { // args
      after?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      before?: NexusGenInputs['ReviewWhereUniqueInput'] | null; // ReviewWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
    user: { // args
      where: NexusGenInputs['UserWhereUniqueInput']; // UserWhereUniqueInput!
    }
    users: { // args
      after?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      before?: NexusGenInputs['UserWhereUniqueInput'] | null; // UserWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
      orderBy?: NexusGenInputs['UserOrderByWithRelationInput'][] | null; // [UserOrderByWithRelationInput!]
      where?: NexusGenInputs['UserWhereInput'] | null; // UserWhereInput
    }
  }
  User: {
    posts: { // args
      after?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      before?: NexusGenInputs['PostWhereUniqueInput'] | null; // PostWhereUniqueInput
      first?: number | null; // Int
      last?: number | null; // Int
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
    /**
     * Whether the type can be null
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    nullable?: boolean
    /**
     * Whether the type is list of values, or just a single value.
     * If list is true, we assume the type is a list. If list is an array,
     * we'll assume that it's a list with the depth. The boolean indicates whether
     * the type is required (non-null), where true = nonNull, false = nullable.
     * @see declarativeWrappingPlugin
     */
    list?: true | boolean[]
    /**
     * Whether the type should be non null, `required: true` = `nullable: false`
     * @default (depends on whether nullability is configured in type or schema)
     * @see declarativeWrappingPlugin
     */
    required?: boolean
  }
}