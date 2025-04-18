$(function () {
  // Init matchHeight
  $('.matchHeight').matchHeight();

  const $form = $('form');

  $form.parsley({
    excluded: 'textarea, :hidden, :disabled',
    errorsWrapper: '<div class="invalid-feedback"></div>',
    errorTemplate: '<div></div>',
    trigger: 'change focusout'
  });

  $form.parsley().on('field:validated', function (fieldInstance) {
    const $field = $(fieldInstance.$element);
    if (fieldInstance.isValid()) {
      $field.removeClass('is-invalid').addClass('is-valid');
    } else {
      $field.removeClass('is-valid').addClass('is-invalid');
    }
  });

  $form.on('submit', function (e) {
    e.preventDefault();
  
    if ($form.parsley().isValid()) {
      $('#formSuccess').removeClass('d-none').addClass('show');
  
      // Scroll to message (optional)
      $('html, body').animate({ scrollTop: 0 }, 'fast');
  
      // Reset form, Parsley, and field styles
      $form[0].reset();
      $form.parsley().reset();
      $form.find('.form-control').removeClass('is-valid is-invalid');
    }
  });
  
  //animate scroll to next section
  $('.animate-arrow').on('click', function () {
    $('html, body').animate({
      scrollTop: $('#section-secondary').offset().top
    }, 800); // 800ms scroll duration
  });
  
});
