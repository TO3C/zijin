# 紫金国际中心招商网站

这是紫金国际中心商业裙楼的招商展示网站，用于展示楼层信息和招商内容。

## 项目结构

- `index.html`: 主要展示页面，包含楼层切换和招商信息展示
- 图片资源: 包含项目相关图片
- 招商文档: 包含项目招商方案、PPT大纲、执行计划等文档

## 部署说明

### GitHub Pages 部署步骤

1. 将此仓库推送到GitHub
2. 在GitHub仓库设置中，找到Pages选项
3. 选择分支（通常为main或master）
4. 选择根目录 `/` 作为部署源
5. 点击保存，GitHub将自动部署

部署成功后，可以通过 `https://[username].github.io/[repository-name]` 访问网站。

### 本地开发

可以使用Python的简易HTTP服务器进行本地预览：

```bash
python3 -m http.server 8000
```

然后访问 http://localhost:8000/index_new.html 查看效果。

## 功能说明

- 楼层切换功能：通过点击1F、2F、3F按钮切换不同楼层的招商信息
- 响应式设计：适配不同设备尺寸
- 现代化UI：使用紫色主题和白色背景，提供清晰的视觉体验