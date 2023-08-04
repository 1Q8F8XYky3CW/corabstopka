// Pobieranie referencji do elementów formularza i wynikowego div'a
const firstNameInput = document.getElementById('firstName');
const lastNameInput = document.getElementById('lastName');
const generatedFooterDiv = document.getElementById('generatedFooter');

// Funkcja generująca stopkę e-mail
function generateEmailFooter() {
    const firstName = firstNameInput.value;
    const lastName = lastNameInput.value;

    // Wzór stopki e-mail - dostosuj do swoich potrzeb
    const emailFooterTemplate = `
        Witaj ${firstName} ${lastName},
        To jest automatyczna stopka e-mail generowana za pomocą generatora.
        Pozdrawiam,
        Twój Imię/Nazwisko
    `;

    // Wyświetlenie wygenerowanej stopki e-mail na stronie
    generatedFooterDiv.textContent = emailFooterTemplate;
}
