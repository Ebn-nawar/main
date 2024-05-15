const contactForm = document.forms["contactForm"],
  inputName = contactForm["fullName"],
  inputEmail = contactForm["email"],
  inputPhoneNumber = contactForm["phoneNumber"],
  inputMsg = contactForm["msg"],
  inputService = contactForm["service"],
  contactFormElements = [inputName , inputEmail , inputPhoneNumber , inputMsg, inputService]

  contactForm.addEventListener("submit" , function(e){
    contactFormElements.map( x => x.value === "" ? e.preventDefault() : false )
    const fullNamePattern = /[a-z]\s[a-z]\s[a-z]/
    if (inputName.value === "") {
      alert("لايجب ان يكون الاسم خاليا")
    }else if(!(fullNamePattern.test(inputName.value))){
      alert("يجب ان يحتوي الاسم علي حروف فقط")
      
    }
  })
  










$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 3,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
  });
});
