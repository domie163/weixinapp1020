const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot22c7h/",
            name: "springboot22c7h",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot22c7h/front/h5/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于微信小程序的上门维修系统"
        } 
    }
}
export default base
