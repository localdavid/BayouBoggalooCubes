$(function(){FastClick.attach(document.body)}),$(document).ready(function(){$(".filters").hide()}),$(window).resize(function(){$(this).width()<600?$(".desc_div").hide():$(".desc_div").show()}),$(document).ready(function(){function i(){$(this).find("ul").css("visibility","visible")}function n(){$(this).find("ul").css("visibility","hidden")}function i(){$(this).find("ul").css("visibility","visible")}function n(){$(this).find("ul").css("visibility","hidden")}$(".myMenu > li").on("mouseover touchstart",i),$(".myMenu > li").on("mouseout",n)}),$(document).ready(function(){$(".date_select_div ul li ul li").click(function(){var i=$(this).index();$(".full_cube").hide(),$("#day"+(i+1)).show(),$(".myMenu > li").find("ul").css("visibility","hidden"),$(".filters").show()})}),$(document).ready(function(){$(".count_basin_button").click(function(){$(".count_basin_button").hasClass("basin_button_active")===!1&&($(".cube_column").children("div").show(),$(".cube_column").children("div").not(".band_box_basin_pick").fadeToggle(200)),$(".count_basin_button").hasClass("basin_button_active")===!0&&$(".cube_column").children("div").not(".band_box_basin_pick").fadeIn(200),$(this).toggleClass("basin_button_active"),$(".performer_pick_button").hasClass("performer_pick_button_active")===!0&&$(".performer_pick_button").removeClass("performer_pick_button_active")})}),$(document).ready(function(){$(".performer_pick_button").click(function(){$(".performer_pick_button").hasClass("performer_pick_button_active")===!1&&($(".cube_column").children("div").show(),$(".cube_column").children("div").not(".band_box_performer_pick").fadeToggle(200)),$(".performer_pick_button").hasClass("performer_pick_button_active")===!0&&$(".cube_column").children("div").not(".band_box_performer_pick").fadeIn(200),$(this).toggleClass("performer_pick_button_active"),$(".count_basin_button").hasClass("basin_button_active")===!0&&$(".count_basin_button").removeClass("basin_button_active")})});