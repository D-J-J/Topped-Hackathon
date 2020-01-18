import React from "react";

import  PasswordChangeForm from '../PasswordChange';
import { PasswordForgetForm } from '../PasswordForget';

const AccountPage = () => {
    return (<div>
        <h1>Account Page</h1>
        <PasswordChangeForm />
        <PasswordForgetForm />
    </div>)
}
export default AccountPage;
