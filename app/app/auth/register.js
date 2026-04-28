import React from "react";
import AuthForm from "../../src/components/common/AuthForm";

export default function Register () {
    return (
        <AuthForm route="api/auth/register/" method="register" />
    )
}