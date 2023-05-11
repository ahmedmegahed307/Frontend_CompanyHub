/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UserTypeCreateFormInputValues = {
    name?: string;
    isActive?: boolean;
};
export declare type UserTypeCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserTypeCreateFormOverridesProps = {
    UserTypeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type UserTypeCreateFormProps = React.PropsWithChildren<{
    overrides?: UserTypeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UserTypeCreateFormInputValues) => UserTypeCreateFormInputValues;
    onSuccess?: (fields: UserTypeCreateFormInputValues) => void;
    onError?: (fields: UserTypeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserTypeCreateFormInputValues) => UserTypeCreateFormInputValues;
    onValidate?: UserTypeCreateFormValidationValues;
} & React.CSSProperties>;
export default function UserTypeCreateForm(props: UserTypeCreateFormProps): React.ReactElement;
