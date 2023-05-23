function showConfirmationModal() {
  var confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "block";
}

function closeConfirmationModal() {
  var confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "none";
}

function cancelAction() {
  var confirmationModal = document.getElementById("confirmationModal");
  confirmationModal.style.display = "none";

  // Rename the button to "Cancelled"
  var cancelButton = document.querySelector(".button");
  cancelButton.innerHTML = "Cancelled";

  // Show the timeout modal for 2 seconds
  var timeoutModal = document.getElementById("timeoutModal");
  timeoutModal.style.display = "block";

  setTimeout(function () {
    timeoutModal.style.display = "none";
  }, 2000);
}
