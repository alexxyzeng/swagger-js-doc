# swagger-js-doc

an implementation of parse swagger api doc into js doc, and generate api mock files.

- [x] 扫描 swagger 的 api 接口，生成接口对应的 path 和 method 的映射
- [ ] 生成接口请求字段，判断可选类型，请求方式
- [x] 根据 definitions 生成返回字段格式
- [x] 生成统一的前端 service 文件
- [x] 根据接口信息生成请求内容的 js-doc
- [x] 生成响应的 js-doc
- [ ] 根据返回数据字段格式生成 mock 数据
- [ ] 支持单独根据某个接口生成
- [ ] 支持单独根据某个方法或某组方法来进行生成
