/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { UsersObject } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UsersObjectUpdateFormInputValues = {
    name?: string;
    email?: string;
    type?: string;
};
export declare type UsersObjectUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    email?: ValidationFunction<string>;
    type?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UsersObjectUpdateFormOverridesProps = {
    UsersObjectUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    type?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type UsersObjectUpdateFormProps = React.PropsWithChildren<{
    overrides?: UsersObjectUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    usersObject?: UsersObject;
    onSubmit?: (fields: UsersObjectUpdateFormInputValues) => UsersObjectUpdateFormInputValues;
    onSuccess?: (fields: UsersObjectUpdateFormInputValues) => void;
    onError?: (fields: UsersObjectUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UsersObjectUpdateFormInputValues) => UsersObjectUpdateFormInputValues;
    onValidate?: UsersObjectUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UsersObjectUpdateForm(props: UsersObjectUpdateFormProps): React.ReactElement;
