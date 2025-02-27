/**
 * Requests user permission for microphone access.
 * @returns {Promise<void>} A Promise that resolves when permission is granted or rejects with an error.
 */
async function getUserPermission() {
  console.log("Getting user permission for microphone access...");
  // Using navigator.mediaDevices.getUserMedia to request microphone access
  await navigator.mediaDevices.getUserMedia({ audio: true });
}

// Call the function to request microphone permission
getUserPermission();
