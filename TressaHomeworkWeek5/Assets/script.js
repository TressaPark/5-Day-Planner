let inputArray = []
$('.saveBtnnine').on('click', function(e) {
 e.preventDefault();
 var input = $('#nine').val();
 inputArray.push (input)
 textField = localStorage.getItem('items')
 var parsedObject = JSON.parse(textField)
 if (input === null) {
 $('#nine').val(parsedObject)
}
 localStorage.setItem('items',JSON.stringify(inputArray))
 
})

$('.saveBtnten').on('click', function(e) {
    e.preventDefault();
    var input = $('#ten').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtneleven').on('click', function(e) {
    e.preventDefault();
    var input = $('#eleven').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtntwelve').on('click', function(e) {
    e.preventDefault();
    var input = $('#twelve').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnone').on('click', function(e) {
    e.preventDefault();
    var input = $('#one').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtntwo').on('click', function(e) {
    e.preventDefault();
    var input = $('#two').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnthree').on('click', function(e) {
    e.preventDefault();
    var input = $('#three').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnfour').on('click', function(e) {
    e.preventDefault();
    var input = $('#four').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })

   $('.saveBtnfive').on('click', function(e) {
    e.preventDefault();
    var input = $('#five').val();
    inputArray.push (input)
    localStorage.setItem('items',JSON.stringify(inputArray))
    console.log(input);  console.log('hello')
    console.log(inputArray)
   })