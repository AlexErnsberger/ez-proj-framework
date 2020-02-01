# 未来集市 H5 客户端直播前台服务

#### 1. 域名环境

- 开发：lives.m-dev.weilaijishi.com
- 测试：lives.m-uat.weilaijishi.com
- 预发布：lives.m-fat.weilaijishi.com
- 验收：lives.m-lpt.weilaijishi.com
- 生产：lives.m.weilaijishi.cn

#### 2. 安装

- nodejs 安装
  - 下载地址：https://nodejs.org/zh-cn/download/
- yarn 安装： npm install -g yarn
- 运行 yarn 命令安装依赖包

#### 3. 运行

- 运行本地环境

  - 开发环境：yarn dev:dev
  - 测试环境：yarn dev:uat
  - 预发布环境：yarn dev:fat
  - 验收环境：yarn dev:lpt
  - 生产环境：yarn dev:pro

- 构建
  - 开发环境：yarn build:dev
  - 测试环境 2：yarn build:uat
  - 预发布环境：yarn build:fat
  - 验证环境：yarn build:lpt
  - 生产环境：yarn build:pro

#### 4. webpack 配置文件（多页面打包）

- src/config
- webpack-common.js // 公共配置信息
- webpack-dev.js // 开发环境路口配置
- webpack-pro.js // 生产环境路口配置

#### 5. ngnix 配置

```
server {
    listen 80;
    server_name lives.weilaijishi.cn localhost;
    access_log  /var/log/nginx/lives.weilaijishi.cn_access.log  access;
    root /home/webapp/lives/dist;
    index index.html index.htm index.nginx-debian.html;
    location / {
        try_files $uri /index.html;
    }
}
```

#### 6. 紧急发布流程

- 第一步，在 master 主分支创建一个 hotfix，例如"hotfix-名称"
- 第二步，在 hotfix 上修改问题
- 第三步，提交代码
- 第四步，在 gitlap 上申请合并 master 审核流。主分支只有 master 才有权限，审核人填写项目 master 即可
- 第五步，通知 master 审核以及审核完成
- 第六步，master 上下合并代码，把 hotfix 合并到开发主分支 develop 上
- 第七步，master 通知运营构建

#### 7. 注释规范

- 函数方法注释

```
/**
 * 描述：
 * @param {Number} program1 描述1
 * @param {String} program2 描述2
 * @param {Object} program3 描述3
 */
```

#### 8. 直播组件说明

```

```
