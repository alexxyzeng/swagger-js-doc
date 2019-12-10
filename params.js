[
  {
    "paramName": "description",
    "type": "string",
    "description": "故障描述"
  },
  {
    "paramName": "handleResult",
    "type": "string",
    "description": "异常处理结果：1-已处理、2-未处理 {已处理=Dispose, 未处理=Undispose}"
  },
  {
    "paramName": "handleWay",
    "type": "string",
    "description": "异常处理方式：1-现状处理、2-保障工单 {现状处理=Situation, 报修工单=Workorder}"
  },
  {
    "paramName": "id",
    "type": "number",
    "description": "唯一id"
  },
  {
    "paramName": "projectId",
    "type": "number",
    "description": "项目id"
  },
  {
    "paramName": "serviceman",
    "type": "string",
    "description": "维修人员"
  },
  {
    "paramName": "taskContentId",
    "type": "number",
    "description": "任务内容ID"
  },
  {
    "paramName": "taskId",
    "type": "number",
    "description": "任务ID"
  },
  {
    "paramName": "workorderCode",
    "type": "string",
    "description": "工单编号"
  },
  {
    "paramName": "workorderId",
    "type": "number",
    "description": "工单ID"
  },
  {
    "paramName": "workorders",
    "type": "array",
    "itemType": "workordersItem"
  }
]