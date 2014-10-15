package com.kun.flow.web.filter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * Created with IntelliJ IDEA.
 * User: xianing
 * Date: 10/15/14
 * Time: 10:38 AM
 * To change this template use File | Settings | File Templates.
 */
public class IPFilter implements Filter  {
    private List<String> freeIps;
    private String[] vips;
    @Override
    //析构函数
    public void destroy() {
        // TODO Auto-generated method stub
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response,
                         FilterChain chain) throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        String requestUri = req.getServletPath();
        if (this.isVIP(requestUri)) {
            chain.doFilter(request, response);
        }
        System.out.println("-----Start IP Filter!");
        //设置跳转页面
        RequestDispatcher dispatcher=request.getRequestDispatcher("404.html");
        //定义一个布尔变量，如果该值为true则继续向下传递request，否则跳转到指定页面
        boolean flag = true;
        //将取得web.xml中IP范围的值按照“.”拆分成数组
        for(String freeIpItem : this.freeIps){

            String[] freeIpStr = freeIpItem.split("\\.");
            //取得客户端的IP地址的值
            String remoteIp = request.getRemoteAddr();
            //将客户端的IP地址的值根据“.”拆分成数组
            String[] remoteIpStr = remoteIp.split("\\.");

            //定义一个整形变量，根据这个整形变量来确定循环的次数
            int arrayNo = 0;
            //该循环取得非“*”元素个数
            for(int i=0;i<freeIpStr.length;i++){
                if(!freeIpStr[i].equals("*")){
                    arrayNo++;
                }
            }
            //该循环对客户端IP和xml文件中设置的IP范围进行核对，如果客户端IP在允许范围内则flag为true，否则为false
            int i = 0;
            for(i=0;i<arrayNo;i++){
                if( Integer.parseInt(freeIpStr[i].trim().toString()) !=(Integer.parseInt(remoteIpStr[i].trim().toString())) ){
                    flag=false;
                    break;
                }
            }
            if(i==arrayNo)
                flag = true;
            if(flag)
                break;
        }
        //如果flag值为true，则继续传递request，否则进行页面跳转
        if(flag){
            System.out.println("-----Continue next Filter!");
            chain.doFilter(request, response);
        }else{
            System.out.println("-----Invalid IP! remote IP is "+request.getRemoteAddr());
            dispatcher.forward(request,response);
        }
    }

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        String tmp = filterConfig.getInitParameter("vips");
        if (tmp != null && tmp.length() > 0) {
            vips = tmp.split(",");
        }
        this.freeIps = new ArrayList<String>();
        // TODO Auto-generated method stub
        //将取出的xml文件中的允许的IP范围的值赋值给freeIps变量
        String[] str = filterConfig.getInitParameter("FreeIPs").trim().split(",");
        if(str!=null&&str.length>0){
            for(String item : str){
                this.freeIps.add(item);
            }
        }
    }

    /**
     * 判断url是否需要做超时验证
     *
     * @author songkun
     * @create 2014年7月3日 上午9:41:57
     * @since
     * @param url
     * @return
     */
    private boolean isVIP(String url) {
        if (vips == null || vips.length <= 0 || url == null || url.length() <= 0) {
            return false;
        }
        for (int i = 0; i < vips.length; i++) {
            if (url.indexOf(vips[i]) > -1) {
                return true;
            }
        }
        return false;
    }

    public static void main(String[] args){
        boolean flag = true;
        String[] ips = {"192.168.10.*","172.36.3.*","10.20.250.*"};
        //将取得web.xml中IP范围的值按照“.”拆分成数组
        for(String freeIpItem : ips){

            String[] freeIpStr = freeIpItem.split("\\.");
            //取得客户端的IP地址的值
            String remoteIp = "10.20.250.191";
            //将客户端的IP地址的值根据“.”拆分成数组
            String[] remoteIpStr = remoteIp.split("\\.");

            //定义一个整形变量，根据这个整形变量来确定循环的次数
            int arrayNo = 0;
            //该循环取得非“*”元素个数
            for(int i=0;i<freeIpStr.length;i++){
                if(!freeIpStr[i].equals("*")){
                    arrayNo++;
                }
            }
            //该循环对客户端IP和xml文件中设置的IP范围进行核对，如果客户端IP在允许范围内则flag为true，否则为false
            int i = 0;
            for(i=0;i<arrayNo;i++){
                if( Integer.parseInt(freeIpStr[i].trim().toString()) !=(Integer.parseInt(remoteIpStr[i].trim().toString())) ){
                    flag=false;
                    break;
                }
            }
            if(i==arrayNo)
                flag = true;
            if(flag)
                break;
        }
        //如果flag值为true，则继续传递request，否则进行页面跳转
        if(flag){
            System.out.println("-----Continue next Filter!");
        }else{
            System.out.println("-----Invalid IP!");
        }
    }
}
