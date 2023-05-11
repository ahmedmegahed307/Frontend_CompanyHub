/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UserType } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserTypeUpdateFormInputValues = {
    name?: string;
    isActive?: boolean;
};
export declare type UserTypeUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTypeUpdateFormOverridesProps = {
    UserTypeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserTypeUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserTypeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userType?: UserType;
    onSubmit?: (fields: UserTypeUpdateFormInputValues) => UserTypeUpdateFormInputValues;
    onSuccess?: (fields: UserTypeUpdateFormInputValues) => void;
    onError?: (fields: UserTypeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTypeUpdateFormInputValues) => UserTypeUpdateFormInputValues;
    onValidate?: UserTypeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserTypeUpdateForm(props: UserTypeUpdateFormProps): React.ReactElement;
