/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SessionsCreateFormInputValues = {
    type?: string;
    startTime?: string;
    endTime?: string;
    isActive?: boolean;
    jobId?: string;
    userId?: string;
};
export declare type SessionsCreateFormValidationValues = {
    type?: ValidationFunction<string>;
    startTime?: ValidationFunction<string>;
    endTime?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    jobId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionsCreateFormOverridesProps = {
    SessionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    startTime?: PrimitiveOverrideProps<TextFieldProps>;
    endTime?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    jobId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SessionsCreateFormProps = React.PropsWithChildren<{
    overrides?: SessionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SessionsCreateFormInputValues) => SessionsCreateFormInputValues;
    onSuccess?: (fields: SessionsCreateFormInputValues) => void;
    onError?: (fields: SessionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionsCreateFormInputValues) => SessionsCreateFormInputValues;
    onValidate?: SessionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function SessionsCreateForm(props: SessionsCreateFormProps): React.ReactElement;
