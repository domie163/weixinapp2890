const base = {
    get() {
        return {
            url : "http://localhost:8080/ssm1m683/",
            name: "ssm1m683",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssm1m683/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "在线厨艺平台的设计与实现微信小程序"
        } 
    }
}
export default base
