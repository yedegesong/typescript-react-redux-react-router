import promise from './Promise';
/**
 * 整站API模块
 */
const BaseApi = {
	/**
	 * 登录接口
	 */
    queryContent:()=>{
        return promise.resource('get', 'forum/34/topics/204949',
            {});
    },
    /**
	 * 数据回填接口
	 */
    backfill: () => {
        return promise.resource('post', 'TextApi.php',
            { });
    }
}

export default BaseApi;