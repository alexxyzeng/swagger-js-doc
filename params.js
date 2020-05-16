[
  {
    paramName: 'code',
    type: 'string',
    description: '需求类型编码',
  },
  {
    paramName: 'description',
    type: 'string',
    description: '需求描述',
  },
  {
    fileTypes: {
      paramName: 'fileTypes',
      type: 'array',
      itemType: 'fileTypesItem',
      description: '',
    },
  },
  {
    paramName: 'id',
    type: 'number',
    description: '由程序分配的唯一ID',
  },
  {
    paramName: 'isRefOrder',
    type: 'string',
    description: '是否关联工单 是否枚举{否=No-0, 是=Yes-1}',
  },
  {
    paramName: 'isVisiblePhotograph',
    type: 'string',
    description: '随手拍是否可见 是否枚举{否=No-0, 是=Yes-1}',
  },
  {
    paramName: 'parentId',
    type: 'number',
    description: '父ID',
  },
  {
    paramName: 'pathName',
    type: 'string',
    description: '全称',
  },
  {
    paramName: 'sort',
    type: 'number',
    description: '排序',
  },
  {
    paramName: 'typeName',
    type: 'string',
    description: '类型名称',
  },
];
