declare namespace API {
  type BaseResponseBoolean = {
    code?: number;
    data?: boolean;
    message?: string;
  };

  type BaseResponseInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo;
    message?: string;
  };

  type BaseResponseListInterfaceInfo = {
    code?: number;
    data?: InterfaceInfo[];
    message?: string;
  };

  type BaseResponseListPost = {
    code?: number;
    data?: Post[];
    message?: string;
  };

  type BaseResponseListUserVO = {
    code?: number;
    data?: UserVO[];
    message?: string;
  };

  type BaseResponseLong = {
    code?: number;
    data?: number;
    message?: string;
  };

  type BaseResponsePageInterfaceInfo = {
    code?: number;
    data?: PageInterfaceInfo;
    message?: string;
  };

  type BaseResponsePagePost = {
    code?: number;
    data?: PagePost;
    message?: string;
  };

  type BaseResponsePageUserVO = {
    code?: number;
    data?: PageUserVO;
    message?: string;
  };

  type BaseResponsePost = {
    code?: number;
    data?: Post;
    message?: string;
  };

  type BaseResponseUser = {
    code?: number;
    data?: User;
    message?: string;
  };

  type BaseResponseUserVO = {
    code?: number;
    data?: UserVO;
    message?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type getInterfaceInfoByIdParams = {
    id: number;
  };

  type getPostByIdParams = {
    id: number;
  };

  type getUserByIdParams = {
    id: number;
  };

  type IdRequest = {
    id?: number;
  };

  type InterfaceInfo = {
    id?: number;
    apiName?: string;
    apiDescription?: string;
    apiUrl?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
    requestParams?: string;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDeleted?: number;
  };

  type InterfaceInfoAddRequest = {
    apiName?: string;
    apiDescription?: string;
    apiUrl?: string;
    requestHeader?: string;
    responseHeader?: string;
    method?: string;
  };

  type InterfaceInfoQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    apiName?: string;
    apiDescription?: string;
    apiUrl?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
    userId?: number;
  };

  type InterfaceInfoUpdateRequest = {
    id?: number;
    apiName?: string;
    apiDescription?: string;
    apiUrl?: string;
    requestHeader?: string;
    responseHeader?: string;
    status?: number;
    method?: string;
  };

  type listInterfaceInfoByPageParams = {
    interfaceInfoQueryRequest: InterfaceInfoQueryRequest;
  };

  type listInterfaceInfoParams = {
    interfaceInfoQueryRequest: InterfaceInfoQueryRequest;
  };

  type listPostByPageParams = {
    postQueryRequest: PostQueryRequest;
  };

  type listPostParams = {
    postQueryRequest: PostQueryRequest;
  };

  type listUserByPageParams = {
    userQueryRequest: UserQueryRequest;
  };

  type listUserParams = {
    userQueryRequest: UserQueryRequest;
  };

  type OrderItem = {
    column?: string;
    asc?: boolean;
  };

  type PageInterfaceInfo = {
    records?: InterfaceInfo[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageInterfaceInfo;
    searchCount?: PageInterfaceInfo;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PagePost = {
    records?: Post[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PagePost;
    searchCount?: PagePost;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type PageUserVO = {
    records?: UserVO[];
    total?: number;
    size?: number;
    current?: number;
    orders?: OrderItem[];
    optimizeCountSql?: PageUserVO;
    searchCount?: PageUserVO;
    optimizeJoinOfCountSql?: boolean;
    maxLimit?: number;
    countId?: string;
    pages?: number;
  };

  type Post = {
    id?: number;
    age?: number;
    gender?: number;
    education?: string;
    place?: string;
    job?: string;
    contact?: string;
    loveExp?: string;
    content?: string;
    photo?: string;
    reviewStatus?: number;
    reviewMessage?: string;
    viewNum?: number;
    thumbNum?: number;
    userId?: number;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type PostAddRequest = {
    age?: number;
    gender?: number;
    education?: string;
    place?: string;
    job?: string;
    contact?: string;
    loveExp?: string;
    content?: string;
    photo?: string;
  };

  type PostQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    age?: number;
    gender?: number;
    education?: string;
    place?: string;
    job?: string;
    contact?: string;
    loveExp?: string;
    content?: string;
    reviewStatus?: number;
    userId?: number;
  };

  type PostUpdateRequest = {
    id?: number;
    age?: number;
    gender?: number;
    education?: string;
    place?: string;
    job?: string;
    contact?: string;
    loveExp?: string;
    content?: string;
    photo?: string;
    reviewStatus?: number;
    reviewMessage?: string;
  };

  type User = {
    id?: number;
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    gender?: number;
    userRole?: string;
    userPassword?: string;
    accessKey?: string;
    secretKey?: string;
    createTime?: string;
    updateTime?: string;
    isDelete?: number;
  };

  type UserAddRequest = {
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    gender?: number;
    userRole?: string;
    userPassword?: string;
  };

  type UserLoginRequest = {
    userAccount?: string;
    userPassword?: string;
  };

  type UserQueryRequest = {
    current?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    id?: number;
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    gender?: number;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
  };

  type UserRegisterRequest = {
    userAccount?: string;
    userPassword?: string;
    checkPassword?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    gender?: number;
    userRole?: string;
    userPassword?: string;
  };

  type UserVO = {
    id?: number;
    userName?: string;
    userAccount?: string;
    userAvatar?: string;
    gender?: number;
    userRole?: string;
    createTime?: string;
    updateTime?: string;
  };
}
