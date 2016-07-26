
/**
 * 配置项  
 * TelBaseUrl => 配置模板路径
 * ApiBaseUrl => 配置API路径
 * UploadBaseUrl => 图片上传地址
   ImagesBaseUrl => 图片路径
 */
declare let applicationConfig:{
    baseUrl?:string;
    apiPath?:string

};
let prefix = applicationConfig.apiPath ? applicationConfig.apiPath : 'http://127.0.0.1:9090/';
const Config= {
    version:'1.1.0',
    ApiBaseUrl: `${prefix}`,
    //ApiBaseUrl: `${prefix}act`
}
export default Config;