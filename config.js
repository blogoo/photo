const config = {
    projectName: 'photo',
    title: '照片',
    favicon: 'img/favicon.ico',
    logo: 'img/logo.png',
    colors: {
        primaryColor: '#FF8C00',
        secondaryColor: '#F0E68C',
        activeColor: '#FF4040',
        tintColor: '#005068'
    },
    highlight: {
        theme: 'solarized-dark'
    },
    documentPath: 'docs', //默认为docs
    styles: [],
    scripts: [],
    footer: 'lib/Footer.js', //设置footer
    sideNavCollapsible: true, // 侧边栏是否可以折叠
    homePage: {
        name: '照片',
        path: 'index.md'
    },
    menus: [
        {
            name: '首页',
            mainPage: '/home',
        },
        {
            folder: 'photo', // 指定的路径
            static: true, // 是否为static里面的文件
            expand: true, // 如果为true,则该文件夹中的子文件夹在顶部展示为各个 menuItem，此时 name 无效，否则，以 name 为 menuItem，子文件夹为 group
            origin: 'https://raw.githubusercontent.com/blogoo/photo/master/', // 原始文件的链接
        },
    ]
};

module.exports = config;
