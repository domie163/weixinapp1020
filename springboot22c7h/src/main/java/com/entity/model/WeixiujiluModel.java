package com.entity.model;

import com.entity.WeixiujiluEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import java.util.Date;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.io.Serializable;
 

/**
 * 维修记录
 * 接收传参的实体类  
 *（实际开发中配合移动端接口开发手动去掉些没用的字段， 后端一般用entity就够用了） 
 * 取自ModelAndView 的model名称
 * @author 
 * @email 
 * @date 2023-04-16 09:14:39
 */
public class WeixiujiluModel  implements Serializable {
	private static final long serialVersionUID = 1L;

	 			
	/**
	 * 简介
	 */
	
	private String jianjie;
		
	/**
	 * 图片
	 */
	
	private String tupian;
		
	/**
	 * 维修记录
	 */
	
	private String weixiujilu;
		
	/**
	 * 维修详情
	 */
	
	private String weixiuxiangqing;
		
	/**
	 * 维修地址
	 */
	
	private String weixiudizhi;
		
	/**
	 * 维修时间
	 */
		
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat 
	private Date weixiushijian;
		
	/**
	 * 用户账号
	 */
	
	private String yonghuzhanghao;
		
	/**
	 * 用户姓名
	 */
	
	private String yonghuxingming;
		
	/**
	 * 维修账号
	 */
	
	private String weixiuzhanghao;
		
	/**
	 * 维修姓名
	 */
	
	private String weixiuxingming;
				
	
	/**
	 * 设置：简介
	 */
	 
	public void setJianjie(String jianjie) {
		this.jianjie = jianjie;
	}
	
	/**
	 * 获取：简介
	 */
	public String getJianjie() {
		return jianjie;
	}
				
	
	/**
	 * 设置：图片
	 */
	 
	public void setTupian(String tupian) {
		this.tupian = tupian;
	}
	
	/**
	 * 获取：图片
	 */
	public String getTupian() {
		return tupian;
	}
				
	
	/**
	 * 设置：维修记录
	 */
	 
	public void setWeixiujilu(String weixiujilu) {
		this.weixiujilu = weixiujilu;
	}
	
	/**
	 * 获取：维修记录
	 */
	public String getWeixiujilu() {
		return weixiujilu;
	}
				
	
	/**
	 * 设置：维修详情
	 */
	 
	public void setWeixiuxiangqing(String weixiuxiangqing) {
		this.weixiuxiangqing = weixiuxiangqing;
	}
	
	/**
	 * 获取：维修详情
	 */
	public String getWeixiuxiangqing() {
		return weixiuxiangqing;
	}
				
	
	/**
	 * 设置：维修地址
	 */
	 
	public void setWeixiudizhi(String weixiudizhi) {
		this.weixiudizhi = weixiudizhi;
	}
	
	/**
	 * 获取：维修地址
	 */
	public String getWeixiudizhi() {
		return weixiudizhi;
	}
				
	
	/**
	 * 设置：维修时间
	 */
	 
	public void setWeixiushijian(Date weixiushijian) {
		this.weixiushijian = weixiushijian;
	}
	
	/**
	 * 获取：维修时间
	 */
	public Date getWeixiushijian() {
		return weixiushijian;
	}
				
	
	/**
	 * 设置：用户账号
	 */
	 
	public void setYonghuzhanghao(String yonghuzhanghao) {
		this.yonghuzhanghao = yonghuzhanghao;
	}
	
	/**
	 * 获取：用户账号
	 */
	public String getYonghuzhanghao() {
		return yonghuzhanghao;
	}
				
	
	/**
	 * 设置：用户姓名
	 */
	 
	public void setYonghuxingming(String yonghuxingming) {
		this.yonghuxingming = yonghuxingming;
	}
	
	/**
	 * 获取：用户姓名
	 */
	public String getYonghuxingming() {
		return yonghuxingming;
	}
				
	
	/**
	 * 设置：维修账号
	 */
	 
	public void setWeixiuzhanghao(String weixiuzhanghao) {
		this.weixiuzhanghao = weixiuzhanghao;
	}
	
	/**
	 * 获取：维修账号
	 */
	public String getWeixiuzhanghao() {
		return weixiuzhanghao;
	}
				
	
	/**
	 * 设置：维修姓名
	 */
	 
	public void setWeixiuxingming(String weixiuxingming) {
		this.weixiuxingming = weixiuxingming;
	}
	
	/**
	 * 获取：维修姓名
	 */
	public String getWeixiuxingming() {
		return weixiuxingming;
	}
			
}
