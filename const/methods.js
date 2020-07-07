const Methods = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
  PATCH: 'patch',
  DELETE: 'delete',
  OPTIONS: 'options',
  TRACE: 'trace',
  HEAD: 'head',
  CONNECT: 'connect'
};

const AvailableMethods = [
  Methods.GET,
  Methods.POST,
  Methods.PUT,
  Methods.PATCH,
  Methods.DELETE,
  Methods.OPTIONS,
  Methods.TRACE,
  Methods.HEAD,
  Methods.CONNECT
];

module.exports = {
  Methods: AvailableMethods
};
