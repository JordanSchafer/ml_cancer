$('#mean_sel').change(function(){
    new_pic = 'static/images/'+this.value + "_plot.png";
    $('#mean_img')[0].src=new_pic;
});

$('#se_sel').change(function(){
    new_pic = 'static/images/'+this.value + "_plot.png";
    $('#se_img')[0].src=new_pic;
});

$('#worst_sel').change(function(){
    new_pic = 'static/images/'+this.value + "_plot.png";
    $('#worst_img')[0].src=new_pic;
});