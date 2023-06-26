// 用户相关的API
import request from "@/utils/request";

// 接口演示
export const getuserInfoAPI = function () {
    return request.get('/user')
    
}