# ComfyUI-Workflows-Linc
 
仅ComfyUI的学习项目笔记

## 更多资料和教程

该文件夹只存放项目文件、案例类。不是主要提供教程和一些细节的笔记，md笔记相关的详见 [[Artificial_Intelligence/Project/Draw/ComfyUI/]] 这部分
## 该文件夹下只看到此文件？其他文件无法显示？

注意，该项目文件夹主要是Comfyui导出的.json文件

- 如在 Obsidian 环境，识别和打开json文件需要借助插件 NodeFlow
- 如在 VuePress 环境，识别和打开json文件需要借助插件 NodeFlow + Config.ts 中的一些配置

## 学习与笔记方式

学习时多用注释节点

### 纯管理json文件

方案一：

然后使用**新版UI**的内部工作流保存工具（无需导出），命好名。通过这种方式的保存，是进入到 “工作流管理器中”，对应路径：`软件安装路径/ComfyUI/user/default/workflows`。之后只要定期将该文件夹上传同步就行了

%%`H:\Soft\SoftDev\Plane\ComfyUI_windows_portable\ComfyUI\user\default\workflows`%%

方案二：

也许可以设置该文件路径的位置，直接保存到ob中，但我没研究。不过这一步由于浏览器的限制，ComfyUI可能需要一些额外的操作。据说ComfyUI要推出App版的界面，那个可以自由选择要保存的路径，能使这一步简单许多。例如可以自定义保存路径直接到obsidian/vuepress项目/git对应的目录中

补充：

还有一个类似的路径：`软件安装路径/workflow.json`，但这个路径保存的应该是那些使用拖拽方式放进去的工作流，不要弄混

### 图片管理方式

得益于ComfyUI可以将工作流信息嵌入到图片中，可以使用这种方式。例如 https://comfyanonymous.github.io/ComfyUI_examples/ 中通常使用这种方式

需要注意的是，这种方式管理的图片最好不要因为被压缩而损失掉元信息

## 学习方式扩展

因为这里是单文件项目管理，且源码纯文本，用笔记方式管理还是方便的

单文件编程项目也可以，但多文件项目或有多文件依赖 (又没有单文件依赖说明的) 一般不建议

只是后缀可能有所约束


