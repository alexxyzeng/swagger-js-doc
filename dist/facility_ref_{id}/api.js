[
  "/facility/ref/{id}",
  {
    "get": {
      "tags": [
        "facility"
      ],
      "summary": "设备台帐-关联设备",
      "operationId": "findRefFacilitysUsingGET",
      "consumes": [
        "application/json"
      ],
      "produces": [
        "*/*"
      ],
      "parameters": [
        {
          "name": "Authorization",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-tenant-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "df-project-id",
          "in": "header",
          "required": false,
          "type": "string"
        },
        {
          "name": "id",
          "in": "path",
          "description": "id",
          "required": true,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "id",
          "in": "query",
          "description": "设备台帐ID",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "facilityCode",
          "in": "query",
          "description": "设备编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityName",
          "in": "query",
          "description": "设备名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "capitalCode",
          "in": "query",
          "description": "资产编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "fixedCode",
          "in": "query",
          "description": "固定编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityLevel",
          "in": "query",
          "description": "设备级别dict_type=facility_tally_level 1-一级设备 2-二级设备 3-三级设备 4-四级设备 5-五级设备 {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilitySearchLevel",
          "in": "query",
          "description": "facilitySearchLevel {一级设备=One-1, 二级设备=Two-2, 三级设备=Three-3, 四级设备=Four-4, 五级设备=Five-5}",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityType",
          "in": "query",
          "description": "设备分类",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityStatus",
          "in": "query",
          "description": "设备状态dict_type=facility_tally_status 1-备用 2-停运 3-在用 4-维修中 5-待机 6-报废 7-维保中 {备用=Spare-1, 停运=Stop-2, 在用=Using-3, 维修中=Repair-4, 待机=Standby-5, 报废=Scrap-6, 维保中=Maint-7}",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityBrand",
          "in": "query",
          "description": "品牌",
          "required": false,
          "type": "string"
        },
        {
          "name": "facilityModel",
          "in": "query",
          "description": "型号",
          "required": false,
          "type": "string"
        },
        {
          "name": "mountSpace",
          "in": "query",
          "description": "安装位置",
          "required": false,
          "type": "string"
        },
        {
          "name": "spBuildingId",
          "in": "query",
          "description": "大厦id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spFloorId",
          "in": "query",
          "description": "楼层id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "spSpaceId",
          "in": "query",
          "description": "空间id",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "ids",
          "in": "query",
          "description": "设备id集合",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        },
        {
          "name": "direct",
          "in": "query",
          "description": "只查上级关联设备或者只查下级关联设备或全部关联设备 {上级设备=Up-0, 下级设备=Down-1, 全部关联设备=All-2}",
          "required": false,
          "type": "string"
        },
        {
          "name": "code",
          "in": "query",
          "description": "编码",
          "required": false,
          "type": "string"
        },
        {
          "name": "name",
          "in": "query",
          "description": "设备名称",
          "required": false,
          "type": "string"
        },
        {
          "name": "status",
          "in": "query",
          "description": "设备状态 1,2,3,4,5",
          "required": false,
          "type": "string"
        },
        {
          "name": "lastUpdatedTimestamp",
          "in": "query",
          "description": "上次离线下载时间",
          "required": false,
          "type": "integer",
          "format": "int64"
        },
        {
          "name": "excludeIds",
          "in": "query",
          "description": "过滤设备id集合",
          "required": false,
          "type": "array",
          "items": {
            "type": "integer",
            "format": "int64"
          },
          "collectionFormat": "multi"
        }
      ],
      "responses": {
        "200": {
          "description": "OK",
          "schema": {
            "$ref": "#/definitions/统一响应体OfListOf设备展示信息"
          }
        },
        "401": {
          "description": "Unauthorized"
        },
        "403": {
          "description": "Forbidden"
        },
        "404": {
          "description": "Not Found"
        }
      }
    }
  }
]