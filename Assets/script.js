// console.log(localStorage.getItem('9'));
getval();
function getval(){
    $("#nine").val(localStorage.getItem('9'));
    $("#ten").val(localStorage.getItem('10'));
    $("#eleven").val(localStorage.getItem('11'));
    $("#twelve").val(localStorage.getItem('12'));
    $("#one").val(localStorage.getItem('1'));
    $("#two").val(localStorage.getItem('2'));
    $("#three").val(localStorage.getItem('3'));
    $("#four").val(localStorage.getItem('4'));
    $("#five").val(localStorage.getItem('5'));
}

// workin on getting the text boxes and save buttons the same height
// space the times and the text box apart
$('.saveBtnnine').on('click', function(e) {
 e.preventDefault();
 //hour 9 input
 var input = $('#nine').val();
 localStorage.setItem("9" ,input)
 getval();
})

$('.saveBtnten').on('click', function(e) {
 e.preventDefault();
 //hour 10 input
 var input = $('#ten').val();
 localStorage.setItem("10" ,input)
 getval();
})

$('.saveBtneleven').on('click', function(e) {
 e.preventDefault();
 //hour 11 input
 var input = $('#eleven').val();
 localStorage.setItem("11" ,input)
 getval();
})

// console.log(localStorage.getItem('11'));

$('.saveBtntwelve').on('click', function(e) {
    e.preventDefault();
    //hour 12 input
    var input = $('#twelve').val();
    localStorage.setItem("12" ,input)
    getval();
   })

   $('.saveBtnone').on('click', function(e) {
    e.preventDefault();
    //hour 1 input
    var input = $('#one').val();
    localStorage.setItem("1" ,input)
    getval();
   })

   $('.saveBtntwo').on('click', function(e) {
    e.preventDefault();
    //hour 2 input
    var input = $('#two').val();
    localStorage.setItem("2" ,input)
    getval();
   })

   $('.saveBtnthree').on('click', function(e) {
    e.preventDefault();
    //hour 3 input
    var input = $('#three').val();
    localStorage.setItem("3" ,input)
    getval();
   })

   $('.saveBtnfour').on('click', function(e) {
    e.preventDefault();
    //hour 4 input
    var input = $('#four').val();
    localStorage.setItem("4" ,input)
    getval();
   })

   $('.saveBtnfive').on('click', function(e) {
    e.preventDefault();
    //hour 5 input
    var input = $('#five').val();
    localStorage.setItem("5" ,input)
    getval();
   })

//    Each timeblock is color coded to indicate whether it is in a past, present, or future hour.
// Originally, Jill and I worked on this homework together. I have also worked on this with my tutor.