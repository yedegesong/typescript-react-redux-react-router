/**
 * 全局跳转路由
 * @type {{period: (function(any): string)}}
 */
const URL_CONFIG = {
    /**
     * 详情页
     * @param id
     * @returns {string}
     */
    details: (id)=> {
        return `/details/${id}`;
    },
    /**
     * 目的地
     * @returns {string}
     */
    destination:()=>{
        return `destination`;
    }
};

export default URL_CONFIG;