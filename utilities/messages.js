/* -----------------------------------------------------------------------
   * @ description : Main module to include all the messages used in project.
----------------------------------------------------------------------- */

export default {
    accept: "Accepted",
    confirm: "Confirmed",
    success: "Success!",
    systemError: "Technical error ! Please try again later.",
    userNameAlreadyExists: "Username is already registered.",
    emailAlreadyExists: "Email is already registered with us.",
    mobileAlreadyExists: "Mobile is already registered with us.",
    contactAlreadyExists: "Contact number is already registered with us.",
    amountError: (min, max) => `You can only redeem ${min} to ${max} amount for this gift card`,
    detailsNotMatched: "Details you entered is not matched with the records.",
    emailNotExists: "Email is not registered with us.",
    phoneNumberNotExists: "Phone Number not registered.",
    userAdded: "Registeration successfully done!.",
    recordAdded: "Record successfully added!.",
    recordFetched: "Record successfully featched!.",
    recordUpdated: "Record successfully updated.",
    recordRemoved: "Record successfully removed.",
    tokenExpired: "Session Expired.",
    tokenVerified: "Token has been verified",
    loginSuccessfull: "Logged in successfully.",
    adminChangePasswordSuccessfull: "Password successfully changed.",
    logoutSuccessfull: "Logged out successfully.",
    invalidCredentials: "Invalid credentials.",
    userUpdate: "User Profile successfully updated.",
    updateStatus: status => `User has been ${status} successfully.`,
};