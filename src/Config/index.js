const WebConfig = {
    name:'Truested Source',
    logo:'img/brand/logo.svg',
    logominimized:'img/brand/sygnet.svg',
    basepath:'',    
    suppliermenu : [
        {weblinkname:'Dashbaord',weblink:'/supplier/dashboard', ref:'dashboard', icon:'assets/images/icon1.png', },
		{weblinkname:'Product Browser',weblink:'/supplier/productbrowser', ref:'productbrowser', icon:'assets/images/icon2.png'},
        {weblinkname:'Insert New Product',weblink:'/supplier/insertproduct', ref:'insertproduct', icon:'assets/images/icon5.png'},
        {weblinkname:'Enrich from Excel',weblink:'/supplier/importexcelfile', ref:'importexcelfile', icon:'assets/images/icon3.png'},
        {weblinkname:'Upload Assets',weblink:'/supplier/assetview', ref:'assetview', icon:'assets/images/icon4.png'},
        {weblinkname:'1WS XML',weblink:'/supplier/xmldata', ref:'xmldata', icon:'assets/images/xmlnr.png'}
       
    ],

    supplierrightmenu:[
        {weblinkname:'Dashbaord',weblink:'/supplier/productbrowser', ref:'dashboard', icon:'fa fa-bell-o', classname:"notification"},
        {weblinkname:'messages',weblink:'/supplier/productbrowser', ref:'messages', icon:'fa fa-envelope-o', classname:"messages"},
    ]
};

export default WebConfig;