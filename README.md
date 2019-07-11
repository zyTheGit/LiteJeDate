# LiteJeDate
只需要引用一个文件的日期插件

## [jeDate V6.5.0 日期控件](http://www.jemui.com/)

![range](https://github.com/zyTheGit/LiteJeDate/blob/master/src/img/%E5%8F%8C%E9%9D%A2%E6%9D%BF%E9%80%89%E6%8B%A9.png)

![自定义](https://github.com/zyTheGit/LiteJeDate/blob/master/src/img/%E8%87%AA%E5%AE%9A%E4%B9%89.png)

![自定义](https://github.com/zyTheGit/LiteJeDate/blob/master/src/img/%E4%B8%87%E5%B9%B4%E5%8E%86.png)

![自定义主题](https://github.com/zyTheGit/LiteJeDate/blob/master/src/img/%E5%8F%8C%E6%A8%A1%E7%89%88.png)

## 优势 
* 使用简单
* 文档详细
 >此项目将jeDate插件一次性打包成一个js文件，页面中只需要引用`./dist/LiteJeDate.js`即可使用它的方法，调用日期
* 日历自适应
* 所有样式和功能可自定义
* 文件小只有`64K`

## 页面使用
```
# html
<input type='text' class='test'>

#js
<script src='./dist/LiteJeDate.js'></script>	
 jeDate(".test",{
    format:"YYYY年MM月DD日 hh:mm",
    isTime:true,
    festival: true,//开启万年历
    minDate:"2014-09-19 00:00:00"
})
```
## 参数使用
```
skinCell:"jedateblue",                      //日期风格样式，默认蓝色
    format:"YYYY-MM-DD hh:mm:ss",               //日期格式
    minDate:"1900-01-01 00:00:00",              //最小日期 或者 "1900-01-01" 或者 "10:30:25"
    maxDate:"2099-12-31 23:59:59",              //最大日期 或者 "2099-12-31" 或者 "16:35:25"
    language:{                                  //多语言设置
        name  : "cn",
        month : ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"],
        weeks : [ "日", "一", "二", "三", "四", "五", "六" ],
        times : ["小时","分钟","秒数"],
        titText: "请选择日期时间",
        clear : "清空",
        today : "今天",
        yes   : "确定",
        close : "关闭"
    },
    isShow:true,                                //是否显示为固定日历，为false的时候固定显示
    multiPane:true,                             //是否为双面板，为false是展示双面板
    onClose:true,                               //是否为选中日期后关闭弹层，为false时选中日期后关闭弹层
    range:null,                                 //如果不为空，则会进行区域选择，例如 " 至 "，" ~ "，" To "
    trigger:"click",                            //是否为内部触发事件，默认为内部触发事件
    position:[],                                //自定义日期弹层的偏移位置，长度为0，弹层自动查找位置
    valiDate:[],                                //有效日期与非有效日期，例如 ["0[4-7]$,1[1-5]$,2[58]$",true]
    isinitVal:false,                            //是否初始化时间，默认不初始化时间
    initDate:{},                                //初始化时间，加减 天 时 分
    isTime:true,                                //是否开启时间选择
    isClear:true,                               //是否显示清空
    isToday:true,                               //是否显示今天或本月
    festival:false,                             //是否显示农历节日
    fixed:true,                                 //是否静止定位，为true时定位在输入框，为false时居中定位
    zIndex:2099,                                //弹出层的层级高度
    marks:null,                                 //给日期做标注
    clearfun:function(elem, val) {},            //清除日期后的回调, elem当前输入框ID, val当前选择的值
    donefun:function(obj) {},                   //点击确定后的回调,obj包含{ elem当前输入框ID, val当前选择的值, date当前的日期值}
    success:function(elem) {},                  //层弹出后的成功回调方法, elem当前输入框ID
```

### 支持格式类型
```
日期格式 可以随意组合，下面随意列出几种格式：
1、 YYYY-MM-DD hh:mm:ss   或者   MM-DD-YYYY hh:mm:ss   或者   MM/DD/YYYY hh:mm:ss
2、 YYYY-MM-DD hh:mm   或者   MM-DD-YYYY hh:mm   或者   MM/DD/YYYY hh:mm
3、 YYYY-MM-DD hh   或者   MM-DD-YYYY hh   或者   MM/DD/YYYY hh
4、 YYYY-MM-DD   或者   MM-DD-YYYY   或者   MM/DD/YYYY
5、 YYYY-MM
6、 YYYY
7、 hh:mm:ss
8、 hh:mm
9、 hh
10、 YYYY-MM-DD hh:zz
11、 hh:zz
```

 
