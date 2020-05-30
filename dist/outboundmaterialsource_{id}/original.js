{
  "path": "/outboundmaterialsource/{id}",
  "methods": {
    "get": {
      "parameters": {
        "body": [],
        "path": [
          {
            "type": "number",
            "name": "id",
            "description": "id",
            "required": true,
            "enum": []
          }
        ],
        "query": []
      },
      "summary": "出库物资-入库信息-详情",
      "consumes": [
        "application/json"
      ],
      "operationId": "findByIdUsingGET_37",
      "tags": [
        "inventory"
      ]
    }
  }
}