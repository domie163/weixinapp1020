package com.entity;

import com.baomidou.mybatisplus.annotations.TableId;
import com.baomidou.mybatisplus.annotations.TableName;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import com.fasterxml.jackson.annotation.JsonFormat;
import org.apache.commons.beanutils.BeanUtils;
import com.baomidou.mybatisplus.annotations.TableField;
import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.enums.IdType;


/**
 * 维修信息
 * 数据库通用操作实体类（普通增删改查）
 * @author 
 * @email 
 * @date 2023-04-16 09:14:38
 */
@TableName("weixiuxinxi")
public class WeixiuxinxiEntity<T> implements Serializable {
	private static final long serialVersionUID = 1L;


	public WeixiuxinxiEntity() {
		
	}
	
	public WeixiuxinxiEntity(T t) {
		try {
			BeanUtils.copyProperties(this, t);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	/**
	 * 主键id
	 */
	@TableId
	private Long id;
	/**
	 * 标题
	 */
					
	private String biaoti;
	
	/**
	 * 简介
	 */
					
	private String jianjie;
	
	/**
	 * 图片
	 */
					
	private String tupian;
	
	/**
	 * 维修内容
	 */
					
	private String weixiuneirong;
	
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
	 * 维修地址
	 */
					
	private String weixiudizhi;
	
	/**
	 * 维修账号
	 */
					
	private String weixiuzhanghao;
	
	/**
	 * 维修姓名
	 */
					
	private String weixiuxingming;
	
	/**
	 * 是否审核
	 */
					
	private String sfsh;
	
	/**
	 * 审核回复
	 */
					
	private String shhf;
	
	
	@JsonFormat(locale="zh", timezone="GMT+8", pattern="yyyy-MM-dd HH:mm:ss")
	@DateTimeFormat
	private Date addtime;

	public Date getAddtime() {
		return addtime;
	}
	public void setAddtime(Date addtime) {
		this.addtime = addtime;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	/**
	 * 设置：标题
	 */
	public void setBiaoti(String biaoti) {
		this.biaoti = biaoti;
	}
	/**
	 * 获取：标题
	 */
	public String getBiaoti() {
		return biaoti;
	}
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
	 * 设置：维修内容
	 */
	public void setWeixiuneirong(String weixiuneirong) {
		this.weixiuneirong = weixiuneirong;
	}
	/**
	 * 获取：维修内容
	 */
	public String getWeixiuneirong() {
		return weixiuneirong;
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
	/**
	 * 设置：是否审核
	 */
	public void setSfsh(String sfsh) {
		this.sfsh = sfsh;
	}
	/**
	 * 获取：是否审核
	 */
	public String getSfsh() {
		return sfsh;
	}
	/**
	 * 设置：审核回复
	 */
	public void setShhf(String shhf) {
		this.shhf = shhf;
	}
	/**
	 * 获取：审核回复
	 */
	public String getShhf() {
		return shhf;
	}

}
