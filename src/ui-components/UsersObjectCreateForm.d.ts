/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersObjectCreateFormInputValues = {
    name?: string;
    email?: string;
    type?: string;
};
export declare type UsersObjectCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersObjectCreateFormOverridesProps = {
    UsersObjectCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersObjectCreateFormProps = React.PropsWithChildren<{
    overrides?: UsersObjectCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UsersObjectCreateFormInputValues) => UsersObjectCreateFormInputValues;
    onSuccess?: (fields: UsersObjectCreateFormInputValues) => void;
    onError?: (fields: UsersObjectCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersObjectCreateFormInputValues) => UsersObjectCreateFormInputValues;
    onValidate?: UsersObjectCreateFormValidationValues;
} & React.CSSProperties>;
export default function UsersObjectCreateForm(props: UsersObjectCreateFormProps): React.ReactElement;
