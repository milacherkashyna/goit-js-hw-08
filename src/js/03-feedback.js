import throttle from 'lodash.throttle';
const formRef = document.querySelector('.feedback-form');
formRef.addEventListener('input', throttle(onFormInput, 500));
function onFormInput(event) {
  const emailValue =
    event.target.closest('.feedback-form').elements.email.value;
  const messageValue =
    event.target.closest('.feedback-form').elements.message.value;
  const formData = { email: emailValue, message: messageValue };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}
const data = JSON.parse(localStorage.getItem('feedback-form-state')) || {
  email: '',
  message: '',
};

formRef.elements.email.value = data.email;
formRef.elements.message.value = data.message;

formRef.addEventListener('submit', onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  const data = JSON.parse(localStorage.getItem('feedback-form-state'));
  data.email = data.email.trim();
  data.message = data.message.trim();

  if (data.email === '' || data.message === '') {
    return alert('fill all fields');
  }
  console.log(data);

  event.target.reset();
  localStorage.removeItem('feedback-form-state');
}
