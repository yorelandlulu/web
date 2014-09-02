package com.kun.flow.web.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;

import com.kun.flow.constants.Constants;

/**
 * Session过期检查.
 * 
 */
public class SessionTimeoutCheckFilter implements Filter {

	private Logger logger = Logger.getLogger(this.getClass());

	private FilterConfig filterConfig;
	private String[] vips;
	private boolean clientRedirect = true;

	public FilterConfig getFilterConfig() {
		return filterConfig;
	}

	public void init(FilterConfig filterConfig) throws ServletException {
		this.filterConfig = filterConfig;
		String tmp = filterConfig.getInitParameter("vips");
		if (tmp != null && tmp.length() > 0) {
			vips = tmp.split(",");
		}
		tmp = filterConfig.getInitParameter("clientRedirect");
		if (tmp != null && (tmp.equals("0") || tmp.equalsIgnoreCase("false"))) {
			clientRedirect = false;
		}
	}

	public void setFilterConfig(FilterConfig filterconfig) {
		this.filterConfig = filterconfig;
	}

	public void destroy() {
		this.filterConfig = null;
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

	/**
	 * 超时重定向
	 * 
	 * @author songkun
	 * @create 2014年7月3日 上午10:28:50
	 * @since
	 * @param request
	 * @param response
	 */
	private void redirect(HttpServletRequest request, HttpServletResponse response) {
		try {
			if (clientRedirect) {
//				StringBuilder sb = new StringBuilder(80);
//				sb.append("alert('连接超时');top.location.href='");
//				sb.append(request.getContextPath());
//				sb.append("';");
//				response.setContentType("text/html; charset=utf-8");
//				response.setStatus(400);
//				response.getWriter().print(sb.toString());
                response.sendRedirect(request.getContextPath()+"/index.html");
            } else {
                response.sendRedirect(request.getContextPath()+"/index.html");
            }
		} catch (IOException e) {
			logger.error(e);
		}
	}

	public void doFilter(ServletRequest req, ServletResponse res, FilterChain chain) throws IOException,
			ServletException {
		try {
			HttpServletRequest request = (HttpServletRequest) req;
			String requestUri = request.getServletPath();
			if (!this.isVIP(requestUri)) {
				HttpServletResponse response = (HttpServletResponse) res;
				HttpSession session = request.getSession();
				if ((session == null || session.getAttribute(Constants.USER_INFO) == null)) {
					logger.info("session timeout PATH：" + requestUri);
					redirect(request, response);
					return;
				}
			}
			chain.doFilter(req, res);
		} catch (Exception ex) {
			ex.printStackTrace();
		} finally {
		}
	}
}
