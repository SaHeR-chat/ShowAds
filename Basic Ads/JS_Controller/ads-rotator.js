var adBanners;
var bannerLinks;
var Cus_analyticsId;
var UniqueAds;
var Uid;

// Muliple Ads not allowed restriction Start
if (isNaN(Uid)==true)
{
Uid=0;
}
Uid = Uid +  UniqueAds;
// Muliple Ads not allowed restriction End

// Individual analytics
if (Cus_analyticsId!=='') {
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create',Cus_analyticsId, 'auto', 'client');
        ga('client.send', 'pageview');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config',Cus_analyticsId);
}
// Overall analytics
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
        })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
        ga('create','UA-98674484-3', 'auto', 'myTracker');
        ga('myTracker.send', 'pageview');

window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config','UA-98674484-3');

// Add Css File
//  var head = document.getElementsByTagName('head')[0],
//  link = document.createElement('link');
//   link.type = 'text/css';
//  link.rel = 'stylesheet';
//   link.href = 'css/Res.css';
//   head.appendChild(link);

  
// Main Ads Start
$(function(){
        
if (Uid!==1)
{
return;
};

if (isNaN(Uid)==true)
{
return;
};
       
if (ads_size=='Any') 
{
  AllBannerNames();
  AllBannerLinks();
}

//$.getScript('js/Responsive_Links.js', function() {
  //  //script is loaded and executed put your dependent JS here
  //ResponsiveBannerNames();
  //ResponsiveBannerLinks();
//});



//Load jQuery
//var script = document.createElement("SCRIPT");
//script.setAttribute("type", "text/javascript");
//script.setAttribute("src", "file://C:/Users/administrator.SIVASAKTHISOFT/Desktop/Show Ads/Basic Ads/js/Responsive_Links.js");
//document.getElementsByTagName("head")[0].appendChild(script);



if (ads_size=='Responsive') 
{
  	var Rnd =Math.floor(Math.random() * ((2-1) - 0 + 1)) + 0;
	if (Rnd==0)
	{
  	ResponsiveBannerNames();
  	ResponsiveBannerLinks();
	}
	else
	{
  	BannerNames300x300();
  	BannerLinks300x300();
	}


}
else if(ads_size=='ResponsiveSidebar')
{
	var Rnd =Math.floor(Math.random() * ((2-1) - 0 + 1)) + 0;
	if (Rnd==0)
	{
  	ResponsiveBannerNamesSideBar();
  	ResponsiveBannerLinksSideBar();
	}
	else
	{
  	BannerNamesSideBar300x300();
  	BannerLinksSideBar300x300();
	}
}
else
{
     return;           
};
        
// alert message
if (adBanners.length!=bannerLinks.length)
  {
   alert("Banner and link Mismatch!");
   return;
};
   


var strVar="";
if (ads_size=='Responsive') 
{
	if (Rnd==0)
	{
	  var imgPrefix   = "images/";
	  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
 	 var newBannerImg  = imgPrefix + adBanners[randNum];
	  var newBannerLink = bannerLinks[randNum];

	 // 728x214 728x90 banners 
	strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
	strVar += "href=\"https://rawcdn.githack.com/prakashincovai/ShowAds/c5f5323b51acd028a3e09fe1aa39d0f3c65227ae/Basic%20Ads/css/Res.css\">";
	strVar += "<div id=\"w\">\n <div id=\"topad\">\n <a href="+newBannerLink+">";
	strVar += "<img src="+newBannerImg+ " alt=\"\" class=\"res\"/></a>\n </div> </div>";
	}
	else
	{ // 300x300 banners

  	var imgPrefix   = "images300x300/";
	  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  	var newBannerImg  = imgPrefix + adBanners[randNum];
	  var newBannerLink = bannerLinks[randNum];
	//
	  var imgPrefix2   = "images300x300/";
	  var randNum2     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
	  
	  var newBannerImg2  = imgPrefix2 + adBanners[randNum2];
	  var newBannerLink2 = bannerLinks[randNum2];
	
	  var imgPrefix3   = "images300x300/";
	  var randNum3     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
	  
	  var newBannerImg3  = imgPrefix3 + adBanners[randNum3];
	  var newBannerLink3 = bannerLinks[randNum3];


strVar += "<div style=\"height: 300px;\">";
strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
strVar += "href=\"css/Res.css\">";
strVar += "        <table cellpadding=\"0\" border=\"1\" role=\"presentation\">";
strVar += "            <tr>";
strVar += "                <td>";
strVar += "                    <table width=\"100%\" cellspacing=\"0\" cellpadding=\"1\" border=\"1\" align=\"center\">";
strVar += "                        <tbody> ";
strVar += "                            <tr>";
strVar += "                                <td width=\"33.33%\">";
strVar += "                                    <a href="+newBannerLink+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg+ "\n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                                <td width=\"33.33%\">";
strVar += "                                    <a href="+newBannerLink2+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg2+ " \n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                                <td width=\"33.33%\">";
strVar += "                                    <a href="+newBannerLink3+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg3+ " \n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                            <\/tr>";
strVar += "                        <\/tbody>";
strVar += "                    <\/table>";
strVar += "                <\/td>";
strVar += "            <\/tr>";
strVar += "        <\/table>";
strVar += "    <\/div>";
}
}
else if (ads_size=='ResponsiveSidebar')
{
	if (Rnd==0)
	{
	  var imgPrefix   = "imagesSidebar/";
	  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
	  var newBannerImg  = imgPrefix + adBanners[randNum];
	  var newBannerLink = bannerLinks[randNum];

	 // 728x214 728x90 banners 
	strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
	strVar += "css\Ressidebar.css\">";
	strVar += "<div id=\"w\">\n <div id=\"topad\">\n <a href="+newBannerLink+">";
	strVar += "<img src="+newBannerImg+ " alt=\"\" class=\"Ressidebar\"/></a>\n </div> </div>";
	}
	else
	{ // 300x300 banners

  var imgPrefix   = "images300x300/";
  var randNum     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
//
  var imgPrefix2   = "images300x300/";
  var randNum2     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg2  = imgPrefix2 + adBanners[randNum2];
  var newBannerLink2 = bannerLinks[randNum2];

  var imgPrefix3   = "images300x300/";
  var randNum3     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg3  = imgPrefix3 + adBanners[randNum3];
  var newBannerLink3 = bannerLinks[randNum3];

  var imgPrefix4   = "images300x300/";
  var randNum4     = Math.floor(Math.random() * ((adBanners.length-1) - 0 + 1)) + 0;
  
  var newBannerImg4  = imgPrefix4 + adBanners[randNum4];
  var newBannerLink4 = bannerLinks[randNum4];


strVar += "<div style=\"height: 250px;\" \"width: 250px;\">";
strVar += "<link type=\"text/css\" rel=\"stylesheet\n \"";
strVar += "href=\"css/Ressidebar.css\">";
strVar += "        <table width=\"11%\" cellpadding=\"0\" border=\"1\" role=\"presentation\">";
strVar += "            <tr>";
strVar += "                <td>";
strVar += "                    <table width=\"100%\" cellspacing=\"0\" cellpadding=\"1\" border=\"1\" align=\"center\">";
strVar += "                        <tbody> ";
strVar += "                            <tr>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg+ "\n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                            <\/tr>";
strVar += "                            <tr>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink2+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg2+ "\n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                            <\/tr>";
strVar += "                            <tr>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink3+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg3+ "\n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                            <\/tr>";
strVar += "                            <tr>";
strVar += "                                <td width=\"25%\">";
strVar += "                                    <a href="+newBannerLink4+" style=\"display:block;border:none\" target=\"_blank\" data-saferedirecturl=\"\">";
strVar += "                                    <img alt=\"xxx\" src="+newBannerImg4+ "\n \"";
strVar += "			            style=\"background-color:#f6f2e9;border:none;color:#818181;display:";
strVar += "			            block;font-size:9px;max-width:100%\" width=\"100%\"><\/a>";
strVar += "                                <\/td>";
strVar += "                            <\/tr>";
strVar += "                        <\/tbody>";
strVar += "                    <\/table>";
strVar += "                <\/td>";
strVar += "            <\/tr>";
strVar += "        <\/table>";
strVar += "    <\/div>";
	}
}

document.getElementById("UAds").innerHTML = strVar;


})
// Main Ads End