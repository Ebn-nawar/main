const contactForm = document.forms["contactForm"],
// inputs
  inputName = contactForm["fullName"],
  inputEmail = contactForm["email"],
  inputPhoneNumber = contactForm["phoneNumber"],
  inputMsg = contactForm["msg"],
  inputService = contactForm["service"],
  // patterns
  fullNamePattern = /[a-z]+\s[a-z]+\s[a-z]+/ig,
  phoneNumberPattern = /\d{10}/ig,
  emailPattern = /[a-zA-z]+@[a-zA-z]+.[a-zA-z]+/ig,
  msgPattern = /[a-zA-z]{3}/ig;

  contactForm.addEventListener("submit" , function(e){
    // fullname validation
    if (inputName.value === "") {
      alert("لايجب ان يكون الاسم خاليا")
      e.preventDefault()
    }else{
      if (fullNamePattern.test(inputName.value)) {
        true
      }else{
        alert("يجب ان يكون الاسم ثلاثيا")
        e.preventDefault()
      }
    }
    // phonenumber validation
    if (inputPhoneNumber.value === "") {
      alert("لايجب ان يكون هاتف التواصل خاليا")
      e.preventDefault()
    }else{
      if (phoneNumberPattern.test(inputPhoneNumber.value)) {
        true
      }else{
        alert("يجب ان يكون رقما صالحا")
        e.preventDefault()
      }
    }
    // email validation
    if (inputEmail.value === "") {
      alert("لايجب ان يكون البريد الاكتروني خاليا")
      e.preventDefault()
    }else{
      if (emailPattern.test(inputEmail.value)) {
        true
      }else{
        alert("يجب ان يكون بريدا الكترونيا صالحا")
        e.preventDefault()
      }
    }
    // msg validation
    if(inputMsg.value === ""){
      alert("لايجب ان تكون رسالتك خالية")
      e.preventDefault()
    }
    if (msgPattern.test(inputMsg.value)) {
      true
    }else{
      alert("يجب ان تكون الرسالة تشمل بحد ادني 3 حروف ")
      e.preventDefault()
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
