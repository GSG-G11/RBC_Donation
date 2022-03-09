/* eslint-disable no-undef */
const tableBody = document.querySelector('tbody');
const donorsSection = document.querySelector('.donors');
const bankSelectElement = document.querySelector('#banksId');
const form = document.getElementById('form');

const getBanks = async () => {
  const banksData = await fetch('/banks');
  const banks = await banksData.json();
  banks.forEach((bank) => {
    const { id, name } = bank;

    const optionBank = document.createElement('option');
    optionBank.value = id;
    optionBank.textContent = name;
    bankSelectElement.appendChild(optionBank);

    const tableRow = document.createElement('tr');
    tableRow.className = 'table-rows';
    tableBody.appendChild(tableRow);

    const bankName = document.createElement('td');
    bankName.textContent = bank.name;
    bankName.className = 'items';
    tableRow.appendChild(bankName);

    const bankAddress = document.createElement('td');
    bankAddress.textContent = bank.address;
    bankAddress.className = 'items';
    tableRow.appendChild(bankAddress);

    fetch(`/banks/${id}/donors`)
      .then((response) => response.json())
      .then((donors) => {
        const bankDonorsNumber = document.createElement('td');
        bankDonorsNumber.textContent = Object.values(donors)[0].count;
        bankDonorsNumber.className = 'items';
        tableRow.appendChild(bankDonorsNumber);
      });
  });
};

const getDonors = async () => {
  const donorsData = fetch('/donors');
  const response = await donorsData;
  const data = await response.json();
  data.forEach(
    ({
      blood_type: bloodType,
      first_name: firstName,
      last_name: lastName,
      bank_name: bankName,
      id,
    }) => {
      const donorCard = document.createElement('div');
      donorsSection.appendChild(donorCard);
      donorCard.classList.add('donor-blood');

      const bloodTypeContainer = document.createElement('div');
      bloodTypeContainer.classList.add('donor-blood-type');
      donorCard.appendChild(bloodTypeContainer);

      const donorBloodType = document.createElement('span');
      donorBloodType.textContent = bloodType;
      bloodTypeContainer.appendChild(donorBloodType);

      const donorName = document.createElement('p');
      donorName.textContent = `${firstName} ${lastName}`;
      donorName.classList.add('donor-name');
      donorCard.appendChild(donorName);

      const bankNameElement = document.createElement('p');
      bankNameElement.textContent = `${bankName}`;
      bankNameElement.classList.add('donor-bank-name');
      donorCard.appendChild(bankNameElement);

      const deleteForm = document.createElement('div');

      donorCard.appendChild(deleteForm);

      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete-btn');
      deleteBtn.textContent = 'Delete';

      const removeDonor = async (donorId) => {
        const options = {
          method: 'DELETE',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin',
          headers: {
            'Content-Type': 'application/json',
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
        };

        fetch(`/donor/${donorId}`, options)
          .then((res) => res.json())
          .then(() => {
            donorsSection.innerHTML = '';
            tableBody.innerHTML = '';
            getDonors();
            getBanks();
          })
          .catch(() => {
            window.location.href = '/error/404';
          });
      };

      deleteBtn.addEventListener('click', () => removeDonor(id));
      deleteForm.appendChild(deleteBtn);
    },
  );
};

function validateForm(e) {
  const email = document.getElementsByName('email')[0].value.trim();
  const bloodType = document.getElementsByName('bloodType')[0].value.trim();
  const bank = document.getElementsByName('bankId')[0].value.trim();
  const age = document.getElementsByName('age')[0].value.trim();
  const firstName = document.getElementsByName('firstName')[0].value.trim();
  const lastName = document.getElementsByName('lastName')[0].value.trim();
  const address = document.getElementsByName('address')[0].value.trim();

  const errorMessages = [];

  if (!email || !bank || !age || !firstName || !lastName || !address) {
    errorMessages.push('All fields are required');
  }
  if (!email.includes('@')) {
    errorMessages.push('Please enter a valid email');
  }
  if (age < 18) {
    errorMessages.push('You must be 18 or older to donate blood');
  }
  if (!bloodType) {
    errorMessages.push('Please select a blood type');
  }

  if (errorMessages.length > 0) {
    e.preventDefault();

    document.querySelector('ul') ? document.querySelector('ul').remove() : null;
    const messagesList = document.createElement('ul');
    form.appendChild(messagesList);
    errorMessages.forEach((message) => {
      const messageItem = document.createElement('li');

      messageItem.classList.add('error-message');
      messageItem.textContent = message;
      messagesList.appendChild(messageItem);
    });
  } else {
    form.submit();
  }
}

form.addEventListener('submit', validateForm);

window.onload = () => {
  getBanks();
  getDonors();
};
