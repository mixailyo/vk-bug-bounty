function sendFormInit() {
  const form = document.getElementById('form-with-recaptcha');

  if (form) {
    form.addEventListener('submit', async function(event) {
      event.preventDefault();
      
      checkRecaptcha();
    });
  }

  function checkRecaptcha() {
    grecaptcha.ready(function() {
      grecaptcha.execute('6LeuqKsUAAAAAEor6g5LTz03KEXd9D8n0_bwX_zL', {action: 'submit'}).then(function(token) {
        let response = grecaptcha.getResponse();

        if (response) {
          const formData = new FormData(form);
          formData.append('event', 1160);
          formData.set('recaptcha_token', token ?? formData.get('g-recaptcha-response'));
          formData.delete('g-recaptcha-response');

          fetch('https://vk.company/press/api/v2/event_offers/?', {
            method: 'POST',
            body: formData
          })
          .then(res => {
            if (res.ok) {
              modals.close("feedback")
              form.reset();
              modals.open("success")
            } else if (res.status === 400) {
              res.json().then(data => {
                Object.keys(data).forEach(field => {
                  const errorMessages = data[field];
                  const inputField = document.querySelector(`[name="${field}"]`);
                  const errorElement = inputField.closest('.FormFields_field__n3Ch1').querySelector('.FormFields_fieldErrorText__Si9Y7')
  
                  errorElement.textContent = errorMessages.join(', ');
  
                  inputField.addEventListener('input', () => {
                    errorElement.textContent = ''; 
                  });
                });
              });
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }
      });
    });
  }
}

export { sendFormInit }