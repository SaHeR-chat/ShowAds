$(function(){
  var adBanners = [
       "GoDaddy728x90",
       "flipkart728x90.jpg",
       "samsung728x90.jpg",
       "GoDaddy728x901"
  ];
  var bannerLinks = [
       "https://clnk.in/gXeG",
       "http://www.flipkart.com/offers/electronics?affid=prakashincovai",
       "https://goo.gl/y4tS3k",
       "https://clnk.in/gXeG"
  ];
  
  
  var imgPrefix   = "https://raw.githack.com/prakashincovai/ShowAds/master/Basic Ads/images/";
  var randNum     = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  var topAdBanner = $('#topad > a > img');
  
  var newBannerImg  = imgPrefix + adBanners[randNum];
  var newBannerLink = bannerLinks[randNum];
  
  // update new img src and link HREF value
  $(topAdBanner).attr('src',newBannerImg);
  $('#topad > a').attr('href',newBannerLink);
});
