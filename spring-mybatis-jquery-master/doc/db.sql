/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50619
Source Host           : localhost:3306
Source Database       : edu

Target Server Type    : MYSQL
Target Server Version : 50619
File Encoding         : 65001

Date: 2014-08-14 00:01:47
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `editname` varchar(255) DEFAULT NULL,
  `auditname` varchar(255) DEFAULT NULL,
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `content` varchar(8000) DEFAULT NULL,
  `author` varchar(255) DEFAULT NULL,
  `posttime` datetime DEFAULT NULL,
  `categoryid` bigint(20) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (null, null, '1', '47', '04545dddffd', '11', '2014-08-07 00:00:00', '1', null);
INSERT INTO `news` VALUES (null, null, '2', '47的发展形成v', '04545dddffd', '11', '2014-08-07 00:00:00', '1', null);
INSERT INTO `news` VALUES (null, null, '3', 'ceshi', '<p>&nbsp;123123</p>,', 'xianing', null, '1', null);
INSERT INTO `news` VALUES (null, null, '4', 'ceshi', '<p>&nbsp;123123</p>,', 'xianing', null, '1', null);
INSERT INTO `news` VALUES (null, null, '5', 'test', '<p>&nbsp;saasfdasdfasdf</p>,', 'vvv', '2014-08-09 00:23:01', '1', null);
INSERT INTO `news` VALUES (null, null, '6', 'sasdfasdfasdf', '<p><b>&nbsp;sfdaasdfasdfasdf</b></p>\r\n<p>&nbsp;</p>\r\n<h3 style=\"color: red;\">fdasdfasdf</h3>,', 'assdf', '2014-08-09 00:29:50', null, null);
INSERT INTO `news` VALUES (null, null, '7', 'dfasfdasdf', '<p>&nbsp;sdfasdf</p>,', 'sdfsdf', '2014-08-09 01:04:10', null, null);
INSERT INTO `news` VALUES (null, null, '8', 'vvvv', '<p>&nbsp;sdfasdf</p>,', 'sssdf', '2014-08-09 01:04:17', null, null);
INSERT INTO `news` VALUES (null, null, '9', 'ceshiddd', '<ol>\r\n    <li><span style=\"background-color: lime;\">&nbsp;sdsd</span></li>\r\n</ol>,', 'vvvv', '2014-08-09 01:53:56', '3', null);
INSERT INTO `news` VALUES (null, null, '10', 'vvvv111', '<ol>\r\n    <li><span style=\"background-color: lime;\">&nbsp;sdsd</span></li>\r\n</ol>,', 'sasfasdf', '2014-08-09 01:54:27', '1', null);
INSERT INTO `news` VALUES (null, null, '11', 'fffcvvv', '<p>&nbsp;sdfadfasdf</p>,', 'ddssdsd', '2014-08-09 02:41:57', '37', null);
INSERT INTO `news` VALUES (null, null, '12', '领导简介', '<p><span style=\"background-color: yellow;\">&nbsp;大是大法师打发</span></p>,', 'sdfsdf', '2014-08-09 16:11:43', '36', null);
INSERT INTO `news` VALUES (null, null, '13', '组织机构简介', '<h3 style=\"color: red;\">&nbsp;现在在现场vzxcvzxcv&nbsp;</h3>,', 'sdfsdf', '2014-08-09 16:27:53', '37', null);
INSERT INTO `news` VALUES (null, null, '14', 'asfasdf', '<p><span style=\"background-color: yellow;\">&nbsp;asdf asdf&nbsp;</span></p>,', 'asfdasdf', '2014-08-09 16:31:25', '47', null);
INSERT INTO `news` VALUES (null, null, '15', '123123', '<p>\r\n	<img alt=\"123123\" src=\"/SMJquery/userfiles/images/IMG_0458.JPG\" style=\"width: 1600px; height: 1067px;\" /></p>', '123', '2014-08-10 12:41:10', '36', null);
INSERT INTO `news` VALUES (null, null, '16', 'test', '<p>\r\n	阿斯蒂芬<img alt=\"\" src=\"/SMJquery/userfiles/images/IMG_0471.JPG\" style=\"width: 800px; height: 1200px;\" /></p>', '是大法师打发', '2014-08-10 14:04:51', '36', null);
INSERT INTO `news` VALUES (null, null, '17', 'test', '<p>\r\n	afasdf&nbsp;</p>', 'sdfasdf', '2014-08-10 14:05:33', '39', null);
INSERT INTO `news` VALUES (null, null, '18', 'sdf', '<p>\r\n	sdf&nbsp;</p>', 'sdf', '2014-08-10 14:06:34', '39', null);
INSERT INTO `news` VALUES (null, null, '19', 'asdasdf', '<p>\r\n	aasdfasdf</p>', 'sdfasdf', '2014-08-10 14:08:48', '40', null);
INSERT INTO `news` VALUES (null, null, '20', 'test', '<p>\r\n	111</p>', 'vvvv', '2014-08-10 14:31:30', '36', null);
INSERT INTO `news` VALUES (null, null, '21', '测试', '<p>\r\n	<img alt=\"123\" src=\"/SMJquery/userfiles/images/IMG_0471.JPG\" style=\"width: 100px; height: 150px;\" /></p>\r\n<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width: 500px;\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n				1</td>\r\n			<td>\r\n				2</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n				&nbsp;</td>\r\n			<td>\r\n				&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n				3</td>\r\n			<td>\r\n				3</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n<p>\r\n	&nbsp;</p>\r\n<p>\r\n	&nbsp;</p>\r\n<ul>\r\n	<li>\r\n		afasdfasdf</li>\r\n</ul>', 'sdfsdf', '2014-08-10 15:21:32', '39', null);
INSERT INTO `news` VALUES (null, null, '22', '测试1', '<p>\r\n	<img alt=\"\" src=\"/SMJquery/userfiles/files/IMG_0458.JPG\" style=\"width: 150px; height: 100px;\" /></p>\r\n<table border=\"1\" cellpadding=\"1\" cellspacing=\"1\" style=\"width: 500px;\">\r\n	<tbody>\r\n		<tr>\r\n			<td>\r\n				1</td>\r\n			<td>\r\n				&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n				&nbsp;</td>\r\n			<td>\r\n				&nbsp;</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n				&nbsp;</td>\r\n			<td>\r\n				1</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n<p>\r\n	&nbsp;</p>\r\n<ol>\r\n	<li>\r\n		asdfsdf</li>\r\n</ol>', 'vvvv', '2014-08-10 15:25:18', '36', null);

-- ----------------------------
-- Table structure for `news_category`
-- ----------------------------
DROP TABLE IF EXISTS `news_category`;
CREATE TABLE `news_category` (
  `id` bigint(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(1) DEFAULT NULL,
  `parentid` bigint(11) DEFAULT NULL,
  `sortid` bigint(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news_category
-- ----------------------------
INSERT INTO `news_category` VALUES ('1', '学校概况', null, '0', '1');
INSERT INTO `news_category` VALUES ('2', '发展战略', null, '0', '2');
INSERT INTO `news_category` VALUES ('3', '教学培训', null, '0', '3');
INSERT INTO `news_category` VALUES ('4', '科研咨询', null, '0', '4');
INSERT INTO `news_category` VALUES ('5', '课程师资', null, '0', '5');
INSERT INTO `news_category` VALUES ('6', '队伍建设', null, '0', '6');
INSERT INTO `news_category` VALUES ('7', '管理服务', null, '0', '7');
INSERT INTO `news_category` VALUES ('8', '党群工作', null, '0', '8');
INSERT INTO `news_category` VALUES ('9', '校园动态', null, '0', '9');
INSERT INTO `news_category` VALUES ('10', '主体班次', null, '0', '10');
INSERT INTO `news_category` VALUES ('11', '特色培训', null, '0', '11');
INSERT INTO `news_category` VALUES ('12', '通知公告', null, '0', '12');
INSERT INTO `news_category` VALUES ('13', '上海十景', null, '0', '13');
INSERT INTO `news_category` VALUES ('14', '智慧教务', null, '0', '14');
INSERT INTO `news_category` VALUES ('15', '学员社区', null, '0', '15');
INSERT INTO `news_category` VALUES ('16', '数字图书', null, '0', '16');
INSERT INTO `news_category` VALUES ('17', '网上招生', null, '0', '17');
INSERT INTO `news_category` VALUES ('18', '校长信箱', null, '0', '18');
INSERT INTO `news_category` VALUES ('19', '学校邮箱', null, '0', '19');
INSERT INTO `news_category` VALUES ('20', '格式文本', null, '0', '20');
INSERT INTO `news_category` VALUES ('21', '标准模版', null, '0', '21');
INSERT INTO `news_category` VALUES ('22', '办公室', null, '0', '22');
INSERT INTO `news_category` VALUES ('23', '学员工作处', null, '0', '23');
INSERT INTO `news_category` VALUES ('24', '行政处', null, '0', '24');
INSERT INTO `news_category` VALUES ('25', '综合教研中心', null, '0', '25');
INSERT INTO `news_category` VALUES ('26', '图文信息中心', null, '0', '26');
INSERT INTO `news_category` VALUES ('27', '总校概况', null, '0', '27');
INSERT INTO `news_category` VALUES ('28', '分校概要', null, '0', '28');
INSERT INTO `news_category` VALUES ('29', '校园概况', null, '0', '29');
INSERT INTO `news_category` VALUES ('30', '视频播报', null, '0', '30');
INSERT INTO `news_category` VALUES ('31', '要闻回访', null, '0', '31');
INSERT INTO `news_category` VALUES ('32', '上级部门', null, '0', '32');
INSERT INTO `news_category` VALUES ('33', '分校与区县党校', null, '0', '33');
INSERT INTO `news_category` VALUES ('34', '理事单位', null, '0', '34');
INSERT INTO `news_category` VALUES ('35', '教务处', null, '0', '35');
INSERT INTO `news_category` VALUES ('36', '学校领导', null, '1', '1');
INSERT INTO `news_category` VALUES ('37', '机构设置', null, '1', '2');
INSERT INTO `news_category` VALUES ('38', '历史沿革', null, '1', '3');
INSERT INTO `news_category` VALUES ('39', '学校战略定位', null, '2', '1');
INSERT INTO `news_category` VALUES ('40', '学校奋斗目标', null, '2', '2');
INSERT INTO `news_category` VALUES ('41', '学校教学品牌战略', null, '2', '3');
INSERT INTO `news_category` VALUES ('43', '学校队伍建设与名师战略', null, '2', '5');
INSERT INTO `news_category` VALUES ('44', '学校管理服务战略', null, '2', '6');
INSERT INTO `news_category` VALUES ('45', '学校党建科学化战略', null, '2', '7');
INSERT INTO `news_category` VALUES ('46', '学校战略实施的工作要求', null, '2', '8');
INSERT INTO `news_category` VALUES ('47', '主体班次', null, '3', '1');
INSERT INTO `news_category` VALUES ('48', '特色培训', null, '3', '2');
INSERT INTO `news_category` VALUES ('49', '社会培训', null, '3', '3');
INSERT INTO `news_category` VALUES ('50', '学员管理', null, '3', '4');
INSERT INTO `news_category` VALUES ('51', '教学计划', null, '3', '5');
INSERT INTO `news_category` VALUES ('52', '教材建设', null, '3', '6');
INSERT INTO `news_category` VALUES ('53', '参考资料', null, '3', '7');
INSERT INTO `news_category` VALUES ('54', '通知公告', null, '3', '8');
INSERT INTO `news_category` VALUES ('55', '政策法规', null, '3', '9');
INSERT INTO `news_category` VALUES ('56', '表格下载', null, '3', '10');
INSERT INTO `news_category` VALUES ('57', '科研动态', null, '4', '1');
INSERT INTO `news_category` VALUES ('58', '在研课题', null, '4', '2');
INSERT INTO `news_category` VALUES ('59', '科研成果', null, '4', '3');
INSERT INTO `news_category` VALUES ('60', '决策咨询', null, '4', '4');
INSERT INTO `news_category` VALUES ('61', '获奖作品', null, '4', '5');
INSERT INTO `news_category` VALUES ('62', '科研管理', null, '4', '6');
INSERT INTO `news_category` VALUES ('63', '通知公告', null, '4', '7');
INSERT INTO `news_category` VALUES ('64', '政策法规', null, '4', '8');
INSERT INTO `news_category` VALUES ('65', '课程综述', null, '5', '1');
INSERT INTO `news_category` VALUES ('66', '师资综述', null, '5', '2');
INSERT INTO `news_category` VALUES ('67', '中青班课程', null, '5', '3');
INSERT INTO `news_category` VALUES ('68', '处级班课程', null, '5', '3');
INSERT INTO `news_category` VALUES ('69', '培训班课程', null, '5', '4');
INSERT INTO `news_category` VALUES ('70', '本校师资', null, '5', '5');
INSERT INTO `news_category` VALUES ('71', '总校兼职师资', null, '5', '6');
INSERT INTO `news_category` VALUES ('72', '高校兼职师资', null, '5', '7');
INSERT INTO `news_category` VALUES ('73', '社会兼职专家', null, '5', '8');
INSERT INTO `news_category` VALUES ('74', '师资工作', null, '6', '1');
INSERT INTO `news_category` VALUES ('75', '干部工作', null, '6', '2');
INSERT INTO `news_category` VALUES ('76', '劳动工资', null, '6', '3');
INSERT INTO `news_category` VALUES ('77', '离退休人员服务', null, '6', '4');
INSERT INTO `news_category` VALUES ('78', '人才招聘', null, '6', '5');
INSERT INTO `news_category` VALUES ('79', '办事指南', null, '6', '6');
INSERT INTO `news_category` VALUES ('80', '通知公告', null, '6', '7');
INSERT INTO `news_category` VALUES ('81', '政策法规', null, '6', '8');
INSERT INTO `news_category` VALUES ('82', '表格下载', null, '6', '9');
INSERT INTO `news_category` VALUES ('83', '行政管理', null, '7', '1');
INSERT INTO `news_category` VALUES ('84', '后勤服务', null, '7', '2');
INSERT INTO `news_category` VALUES ('85', '信息管理', null, '7', '3');
INSERT INTO `news_category` VALUES ('86', '行政动态', null, '83', '1');
INSERT INTO `news_category` VALUES ('87', '办事导航', null, '83', '2');
INSERT INTO `news_category` VALUES ('88', '行文标准', null, '83', '3');
INSERT INTO `news_category` VALUES ('89', '通知公告', null, '83', '4');
INSERT INTO `news_category` VALUES ('90', '政策法规', null, '83', '5');
INSERT INTO `news_category` VALUES ('91', '表格下载', null, '83', '6');
INSERT INTO `news_category` VALUES ('92', '后勤动态', null, '84', '1');
INSERT INTO `news_category` VALUES ('93', '办事导航', null, '84', '2');
INSERT INTO `news_category` VALUES ('94', '上网须知', null, '84', '3');
INSERT INTO `news_category` VALUES ('95', '餐饮须知', null, '84', '4');
INSERT INTO `news_category` VALUES ('96', '住宿须知', null, '84', '5');
INSERT INTO `news_category` VALUES ('97', '停车须知', null, '84', '6');
INSERT INTO `news_category` VALUES ('98', '故障报修', null, '84', '7');
INSERT INTO `news_category` VALUES ('99', '资产申购', null, '84', '8');
INSERT INTO `news_category` VALUES ('100', '通知公告', null, '84', '9');
INSERT INTO `news_category` VALUES ('101', '政策法规', null, '84', '10');
INSERT INTO `news_category` VALUES ('102', '表格下载', null, '84', '11');
INSERT INTO `news_category` VALUES ('103', '故障报修', null, '85', '1');
INSERT INTO `news_category` VALUES ('104', '需求建议', null, '85', '2');
INSERT INTO `news_category` VALUES ('105', '使用规定', null, '85', '3');
INSERT INTO `news_category` VALUES ('106', '机关党建', null, '8', '1');
INSERT INTO `news_category` VALUES ('107', '纪检工作', null, '8', '2');
INSERT INTO `news_category` VALUES ('108', '工会工作', null, '8', '3');
INSERT INTO `news_category` VALUES ('109', '通知公告', null, '8', '4');
INSERT INTO `news_category` VALUES ('110', '政策法规', null, '8', '5');
INSERT INTO `news_category` VALUES ('111', '表格下载', null, '8', '6');
INSERT INTO `news_category` VALUES ('112', '教学管理动态', null, '9', '1');
INSERT INTO `news_category` VALUES ('113', '科研管理动态', null, '9', '2');
INSERT INTO `news_category` VALUES ('114', '行政管理动态', null, '9', '3');
INSERT INTO `news_category` VALUES ('115', '学校服务动态', null, '9', '4');
INSERT INTO `news_category` VALUES ('116', '党群工作动态', null, '9', '5');
INSERT INTO `news_category` VALUES ('117', '处级干部进修班动态', null, '10', '1');
INSERT INTO `news_category` VALUES ('118', '中青年干部培训班动态', null, '10', '2');
INSERT INTO `news_category` VALUES ('119', '青年干部培训班动态', null, '10', '3');
INSERT INTO `news_category` VALUES ('120', '行业特色专题培训班动态', null, '11', '1');
INSERT INTO `news_category` VALUES ('121', '党建培训班动态', null, '11', '2');
INSERT INTO `news_category` VALUES ('122', '企事业委托培训班动态', null, '11', '3');
INSERT INTO `news_category` VALUES ('123', '长三角地区培训班动态', null, '11', '4');
INSERT INTO `news_category` VALUES ('124', '中西部领导干部培训班动态', null, '11', '5');
INSERT INTO `news_category` VALUES ('125', '总校通知', null, '12', '1');
INSERT INTO `news_category` VALUES ('126', '学校通知', null, '12', '2');
INSERT INTO `news_category` VALUES ('127', '学校公告', null, '12', '3');
INSERT INTO `news_category` VALUES ('128', '学术预告', null, '12', '4');
INSERT INTO `news_category` VALUES ('129', '部门信息', null, '12', '5');
INSERT INTO `news_category` VALUES ('130', '办公室信息', null, '129', '1');
INSERT INTO `news_category` VALUES ('131', '教务处信息', null, '129', '2');
INSERT INTO `news_category` VALUES ('132', '学院工作处信息', null, '129', '3');
INSERT INTO `news_category` VALUES ('133', '行政处信息', null, '129', '4');
INSERT INTO `news_category` VALUES ('134', '综合教研中心信息', null, '129', '5');
INSERT INTO `news_category` VALUES ('135', '图文信息中心信息', null, '129', '6');
INSERT INTO `news_category` VALUES ('136', '教学管理', null, '14', '1');
INSERT INTO `news_category` VALUES ('137', '教务管理', null, '14', '2');
INSERT INTO `news_category` VALUES ('138', '各类班次计划表', null, '136', '1');
INSERT INTO `news_category` VALUES ('139', '教务管理流程图', null, '136', '2');
INSERT INTO `news_category` VALUES ('140', '班次计划实施图', null, '136', '3');
INSERT INTO `news_category` VALUES ('141', '班次动态实况', null, '136', '4');
INSERT INTO `news_category` VALUES ('142', '班次问卷库', null, '137', '1');
INSERT INTO `news_category` VALUES ('143', '班次管理人库', null, '137', '2');
INSERT INTO `news_category` VALUES ('144', '班次收费标准', null, '137', '3');
INSERT INTO `news_category` VALUES ('145', '班次考核办法', null, '137', '4');
INSERT INTO `news_category` VALUES ('146', '优秀学员风采', null, '15', '1');
INSERT INTO `news_category` VALUES ('147', '学员优秀成果', null, '15', '2');
INSERT INTO `news_category` VALUES ('148', '学员分布网络', null, '15', '3');
INSERT INTO `news_category` VALUES ('149', '学员意见建议', null, '15', '4');
INSERT INTO `news_category` VALUES ('150', '理事单位建言', null, '15', '5');
INSERT INTO `news_category` VALUES ('151', '学员网上课堂', null, '15', '6');
INSERT INTO `news_category` VALUES ('152', '学术报告录像', null, '151', '1');
INSERT INTO `news_category` VALUES ('153', '教学课程录像', null, '151', '2');
INSERT INTO `news_category` VALUES ('154', '网上教学答疑', null, '151', '3');
INSERT INTO `news_category` VALUES ('155', '图书分类目录', null, '16', '1');
INSERT INTO `news_category` VALUES ('156', '期刊分类目录', null, '16', '2');
INSERT INTO `news_category` VALUES ('157', '总校数字阅览', null, '16', '3');
INSERT INTO `news_category` VALUES ('158', '全国阅览联网', null, '16', '4');
INSERT INTO `news_category` VALUES ('159', '主体班次招生', null, '17', '1');
INSERT INTO `news_category` VALUES ('160', '特色培训招生', null, '17', '2');
INSERT INTO `news_category` VALUES ('161', '社会培训招生', null, '17', '3');
INSERT INTO `news_category` VALUES ('162', '学术报告预告', null, '17', '4');
INSERT INTO `news_category` VALUES ('163', '处级干部进修班', null, '159', '1');
INSERT INTO `news_category` VALUES ('164', '中青年干部培训班', null, '159', '2');
INSERT INTO `news_category` VALUES ('165', '青年干部培训班', null, '159', '3');
INSERT INTO `news_category` VALUES ('166', '行业特色专题培训班', null, '160', '1');
INSERT INTO `news_category` VALUES ('167', '长三角地区培训班', null, '160', '2');
INSERT INTO `news_category` VALUES ('168', '中西部领导干部培训班', null, '160', '3');
INSERT INTO `news_category` VALUES ('169', '党建培训班', null, '161', '1');
INSERT INTO `news_category` VALUES ('170', '企事业委托培训班', null, '161', '2');
INSERT INTO `news_category` VALUES ('171', '工作建议', null, '18', '1');
INSERT INTO `news_category` VALUES ('172', '个人意见', null, '18', '2');
INSERT INTO `news_category` VALUES ('173', '实名投诉', null, '18', '3');
INSERT INTO `news_category` VALUES ('174', '学员投稿', null, '19', '1');
INSERT INTO `news_category` VALUES ('175', '员工投稿', null, '19', '2');
INSERT INTO `news_category` VALUES ('176', '来往信函', null, '19', '3');
INSERT INTO `news_category` VALUES ('177', '工作文案', null, '19', '4');
INSERT INTO `news_category` VALUES ('178', '申请报告', null, '20', '1');
INSERT INTO `news_category` VALUES ('179', '请示报告', null, '20', '2');
INSERT INTO `news_category` VALUES ('180', '工作报告', null, '20', '3');
INSERT INTO `news_category` VALUES ('181', '各类规划', null, '20', '4');
INSERT INTO `news_category` VALUES ('182', '行政文件', null, '20', '5');
INSERT INTO `news_category` VALUES ('183', '党群文件', null, '20', '6');
INSERT INTO `news_category` VALUES ('184', '讲课模版', null, '21', '1');
INSERT INTO `news_category` VALUES ('185', '报告模版', null, '21', '2');
INSERT INTO `news_category` VALUES ('186', '汇报模版', null, '21', '3');
INSERT INTO `news_category` VALUES ('187', '人员构成', null, '22', '1');
INSERT INTO `news_category` VALUES ('188', '机构框架', null, '22', '2');
INSERT INTO `news_category` VALUES ('189', '主要职能', null, '22', '3');
INSERT INTO `news_category` VALUES ('190', '联系方式', null, '22', '4');
INSERT INTO `news_category` VALUES ('191', '人员构成', null, '35', '1');
INSERT INTO `news_category` VALUES ('192', '机构框架', null, '35', '2');
INSERT INTO `news_category` VALUES ('193', '主要职能', null, '35', '3');
INSERT INTO `news_category` VALUES ('194', '联系方式', null, '35', '4');
INSERT INTO `news_category` VALUES ('195', '人员构成', null, '23', '1');
INSERT INTO `news_category` VALUES ('196', '机构框架', null, '23', '2');
INSERT INTO `news_category` VALUES ('197', '主要职能', null, '23', '3');
INSERT INTO `news_category` VALUES ('198', '联系方式', null, '23', '4');
INSERT INTO `news_category` VALUES ('199', '人员构成', null, '24', '1');
INSERT INTO `news_category` VALUES ('200', '机构框架', null, '24', '2');
INSERT INTO `news_category` VALUES ('201', '主要职能', null, '24', '3');
INSERT INTO `news_category` VALUES ('202', '联系方式', null, '24', '4');
INSERT INTO `news_category` VALUES ('203', '人员构成', null, '25', '1');
INSERT INTO `news_category` VALUES ('204', '机构框架', null, '25', '2');
INSERT INTO `news_category` VALUES ('205', '主要职能', null, '25', '3');
INSERT INTO `news_category` VALUES ('206', '联系方式', null, '25', '4');
INSERT INTO `news_category` VALUES ('207', '人员构成', null, '26', '1');
INSERT INTO `news_category` VALUES ('208', '机构框架', null, '26', '2');
INSERT INTO `news_category` VALUES ('209', '主要职能', null, '26', '3');
INSERT INTO `news_category` VALUES ('210', '联系方式', null, '26', '4');
INSERT INTO `news_category` VALUES ('211', '学校校门', null, '27', '1');
INSERT INTO `news_category` VALUES ('212', '学校广场', null, '27', '2');
INSERT INTO `news_category` VALUES ('213', '学校教学楼', null, '27', '3');
INSERT INTO `news_category` VALUES ('214', '学校办公楼', null, '27', '4');
INSERT INTO `news_category` VALUES ('215', '学校教室', null, '27', '5');
INSERT INTO `news_category` VALUES ('216', '学校实训室', null, '27', '6');
INSERT INTO `news_category` VALUES ('217', '学校会场', null, '27', '7');
INSERT INTO `news_category` VALUES ('218', '学校讨论室', null, '27', '8');
INSERT INTO `news_category` VALUES ('219', '学校影视厅', null, '27', '9');
INSERT INTO `news_category` VALUES ('220', '学校图书馆', null, '27', '10');
INSERT INTO `news_category` VALUES ('221', '学校餐厅', null, '27', '11');
INSERT INTO `news_category` VALUES ('222', '学校健身中心', null, '27', '12');
INSERT INTO `news_category` VALUES ('223', '第一分校', null, '28', '1');
INSERT INTO `news_category` VALUES ('224', '第二分校', null, '28', '2');
INSERT INTO `news_category` VALUES ('225', '第四分校', null, '28', '3');
INSERT INTO `news_category` VALUES ('226', '第五分校', null, '28', '4');
INSERT INTO `news_category` VALUES ('227', '上级要闻视频', null, '30', '1');
INSERT INTO `news_category` VALUES ('228', '分校要闻视频', null, '30', '2');
INSERT INTO `news_category` VALUES ('229', '本校要闻视频', null, '30', '3');
INSERT INTO `news_category` VALUES ('230', '学校科研聚焦战略', null, '2', '1');

-- ----------------------------
-- Table structure for `operater`
-- ----------------------------
DROP TABLE IF EXISTS `operater`;
CREATE TABLE `operater` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `type` int(1) DEFAULT NULL COMMENT '类型：0内部用户，1外部用户',
  `code` varchar(50) DEFAULT NULL COMMENT '账号',
  `name` varchar(50) DEFAULT NULL COMMENT '名称',
  `password` varchar(100) DEFAULT NULL COMMENT '密码',
  `superUser` int(1) DEFAULT NULL COMMENT '是否是超级用户',
  `email` varchar(100) DEFAULT NULL COMMENT '邮箱',
  `phone` varchar(100) DEFAULT NULL COMMENT '电话号码',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` datetime DEFAULT NULL COMMENT '更新时间',
  `operaterId` bigint(20) DEFAULT NULL COMMENT '操作者',
  `operaterCode` varchar(50) DEFAULT NULL COMMENT '操作者的账号',
  `status` int(1) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of operater
-- ----------------------------
INSERT INTO `operater` VALUES ('1', '0', 'admin', '超级管理员', '21232f297a57a5a743894a0e4a801fc3', '1', '', '', '2011-05-11 09:57:52', '2014-03-12 11:06:38', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('2', '0', 'songkun', 'songkun', 'e10adc3949ba59abbe56e057f20f883e', '0', 'xintiankun@163.com', '123', '2011-05-27 15:19:16', '2014-04-25 20:47:01', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('3', '0', 'test', 'test', 'e10adc3949ba59abbe56e057f20f883e', '0', '2222211', '3213213', '2014-03-12 00:10:30', '2014-04-26 11:54:05', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('21', '0', 't', 't', 'e358efa489f58062f10dd7316b65649e', '0', '1@1.c', '', '2014-05-02 16:26:48', '2014-05-04 17:18:02', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('22', '0', 'tt', 'tt', 'e358efa489f58062f10dd7316b65649e', '0', 'd@e.cdde', '', '2014-05-04 16:45:55', '2014-05-04 17:17:49', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('25', '0', '1', '1', 'c4ca4238a0b923820dcc509a6f75849b', '0', '', '', '2014-05-04 17:19:31', '2014-05-04 17:19:31', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('26', '0', '2', '2', 'c81e728d9d4c2f636f067f89cc14862c', '0', '', '', '2014-05-04 17:19:39', '2014-05-04 17:19:39', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('27', '0', '3', '3', 'eccbc87e4b5ce2fe28308fd9f2a7baf3', '0', '', '', '2014-05-04 17:19:45', '2014-05-04 17:19:45', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('34', '0', 'd', 'd', '8277e0910d750195b448797616e091ad', '0', '', '', '2014-07-01 20:52:56', '2014-07-01 20:52:56', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('35', '0', 'sdfsdf', 'adminsfsdf', '4297f44b13955235245b2497399d7a93', '0', '', '', '2014-08-09 23:26:04', '2014-08-09 23:26:04', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('36', '0', 'fasasdf', 'adminsdasdf', '6e9abeea535938c496a261b3b39c0d79', '0', '', '', '2014-08-09 23:26:12', '2014-08-09 23:26:12', '1', 'admin', '1');
INSERT INTO `operater` VALUES ('37', '1', '123123', '123123', '4297f44b13955235245b2497399d7a93', '0', '1@1.com', '13912341234', '2014-08-12 23:44:46', '2014-08-12 23:44:46', '1', 'admin', '1');

-- ----------------------------
-- Table structure for `operater_bind_role`
-- ----------------------------
DROP TABLE IF EXISTS `operater_bind_role`;
CREATE TABLE `operater_bind_role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userId` bigint(20) DEFAULT NULL COMMENT '后台操作员',
  `roleId` bigint(20) DEFAULT NULL COMMENT '角色',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` datetime DEFAULT NULL COMMENT '更新时间',
  `operaterId` bigint(20) DEFAULT NULL COMMENT '操作者',
  `operaterCode` varchar(50) DEFAULT NULL COMMENT '操作者的账号',
  `status` int(1) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`),
  KEY `FK_ID` (`userId`),
  CONSTRAINT `FK_ID` FOREIGN KEY (`userId`) REFERENCES `operater` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of operater_bind_role
-- ----------------------------
INSERT INTO `operater_bind_role` VALUES ('4', '3', '2', '2014-07-03 13:36:52', '2014-07-03 13:36:52', '1', 'admin', '1');
INSERT INTO `operater_bind_role` VALUES ('5', '2', '1', '2014-07-03 13:40:34', '2014-07-03 13:40:34', '1', 'admin', '1');

-- ----------------------------
-- Table structure for `permit`
-- ----------------------------
DROP TABLE IF EXISTS `permit`;
CREATE TABLE `permit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL COMMENT '权限名称',
  `code` varchar(200) DEFAULT NULL COMMENT '权限代码',
  `leaf` int(1) DEFAULT NULL COMMENT '是否是叶子节点',
  `status` int(1) DEFAULT NULL COMMENT '状态',
  `ordinal` int(11) DEFAULT NULL COMMENT '排序，显示顺序',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of permit
-- ----------------------------
INSERT INTO `permit` VALUES ('1', '后台用户管理', 'operater', '0', '1', '1');
INSERT INTO `permit` VALUES ('2', '后台用户', 'operater.operater', '1', '1', '2');
INSERT INTO `permit` VALUES ('3', '用户角色', 'operater.role', '1', '1', '3');

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) DEFAULT NULL COMMENT '名称',
  `remark` varchar(200) DEFAULT NULL COMMENT '备注',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` datetime DEFAULT NULL COMMENT '更新时间',
  `operaterId` bigint(20) DEFAULT NULL COMMENT '操作者',
  `operaterCode` varchar(50) DEFAULT NULL COMMENT '操作者的账号',
  `status` int(1) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------
INSERT INTO `role` VALUES ('1', '厂商', 'test', '2011-05-12 15:23:49', '2011-06-19 18:59:06', '1', 'admin', '1');
INSERT INTO `role` VALUES ('2', 'test', 't', '2014-05-05 23:38:32', '2014-05-05 23:38:38', '1', 'admin', '1');

-- ----------------------------
-- Table structure for `role_bind_permit`
-- ----------------------------
DROP TABLE IF EXISTS `role_bind_permit`;
CREATE TABLE `role_bind_permit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `auditable` bit(1) DEFAULT NULL,
  `editable` bit(1) DEFAULT NULL,
  `permitId` bigint(20) DEFAULT NULL COMMENT '权限ID',
  `roleId` bigint(20) DEFAULT NULL COMMENT '角色ID',
  `createTime` datetime DEFAULT NULL COMMENT '创建时间',
  `updateTime` datetime DEFAULT NULL COMMENT '更新时间',
  `operaterId` bigint(20) DEFAULT NULL COMMENT '操作者',
  `operaterCode` varchar(50) DEFAULT NULL COMMENT '操作者的账号',
  `status` int(1) DEFAULT NULL COMMENT '状态',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_bind_permit
-- ----------------------------
INSERT INTO `role_bind_permit` VALUES ('42', null, null, '1', '1', '2014-05-11 22:22:06', '2014-05-11 22:22:06', '1', 'admin', '1');
INSERT INTO `role_bind_permit` VALUES ('43', null, null, '2', '1', '2014-05-11 22:22:06', '2014-05-11 22:22:06', '1', 'admin', '1');
INSERT INTO `role_bind_permit` VALUES ('44', null, null, '3', '1', '2014-05-11 22:22:06', '2014-05-11 22:22:06', '1', 'admin', '1');
