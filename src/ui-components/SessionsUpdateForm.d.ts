/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Sessions } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type SessionsUpdateFormInputValues = {
    type?: string;
    startTime?: string;
    endTime?: string;
    isActive?: boolean;
    jobId?: string;
    userId?: string;
};
export declare type SessionsUpdateFormValidationValues = {
    type?: ValidationFunction<string>;
    startTime?: ValidationFunction<string>;
    endTime?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
    jobId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SessionsUpdateFormOverridesProps = {
    SessionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    type?: PrimitiveOverrideProps<SelectFieldProps>;
    startTime?: PrimitiveOverrideProps<TextFieldProps>;
    endTime?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    jobId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SessionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: SessionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sessions?: Sessions;
    onSubmit?: (fields: SessionsUpdateFormInputValues) => SessionsUpdateFormInputValues;
    onSuccess?: (fields: SessionsUpdateFormInputValues) => void;
    onError?: (fields: SessionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SessionsUpdateFormInputValues) => SessionsUpdateFormInputValues;
    onValidate?: SessionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SessionsUpdateForm(props: SessionsUpdateFormProps): React.ReactElement;
