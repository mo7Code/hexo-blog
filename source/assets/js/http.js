// ==================== HTTP.JS ====================
window.http = (function () {
  const axios = window.axios;

  const service = axios.create();
  service.withCredentials = false;
  const $axios_set_default = () => {
    //请求拦截
    service.interceptors.request.use(
      (config) => {
        // console.info('请求开始');
        return config;
      },
      (error) => {
        console.error(error);
        return Promise.reject(error);
      },
    );

    //响应拦截
    service.interceptors.response.use(
      (response) => {
        // console.info('请求结束');
        return response;
      },
      (error) => {
        return Promise.reject(error);
      },
    );
  };

  $axios_set_default();

  const ajax = (param) => {
    const config = {
      headers: {},
      ...param,
    };
    //请求参数转换
    if (config.method === 'get' || !config.method) {
      config.params = config.data;
      delete config.data;
    }
    return service(config);
  };

  return {
    ajax,
  };
})();
