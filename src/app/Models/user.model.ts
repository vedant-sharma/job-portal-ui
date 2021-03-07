
export class AuthenticationModel
{
    email : string;
    password : string;
}

export class RegistrationModel
{
    first_name : string;
    last_name : string;
    phone : string;
    email : string;
    role_id : any;
    password : string;
}

export class VerifyEmailModel
{
    email : string;
}

export class resetPasswordModel
{
    otp : string;
    new_password : string;
}