import React from "react";
import AuthForm from "../../src/components/common/AuthForm";

export default function Login () {
    return (
        <AuthForm route="api/auth/" method="login" />
    )
}