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
export declare type StatusListCreateFormInputValues = {
    name?: string;
    isActive?: string;
};
export declare type StatusListCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    isActive?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatusListCreateFormOverridesProps = {
    StatusListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatusListCreateFormProps = React.PropsWithChildren<{
    overrides?: StatusListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StatusListCreateFormInputValues) => StatusListCreateFormInputValues;
    onSuccess?: (fields: StatusListCreateFormInputValues) => void;
    onError?: (fields: StatusListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatusListCreateFormInputValues) => StatusListCreateFormInputValues;
    onValidate?: StatusListCreateFormValidationValues;
} & React.CSSProperties>;
export default function StatusListCreateForm(props: StatusListCreateFormProps): React.ReactElement;
