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
     * 发现
     * @returns {string}
     */
    found:()=>{
        return `found`;
    },
    /**
     * 页面组件
     * @returns {string}
     */
    element:()=>{
        return `element`;
    },
     pull_load:()=>{
        return `pull_load`;
    }
};

export default URL_CONFIG;