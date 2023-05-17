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
export declare type PartsListCreateFormInputValues = {
    name?: string;
    quantity?: number;
    cost?: string;
    code?: string;
};
export declare type PartsListCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    cost?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartsListCreateFormOverridesProps = {
    PartsListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PartsListCreateFormProps = React.PropsWithChildren<{
    overrides?: PartsListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PartsListCreateFormInputValues) => PartsListCreateFormInputValues;
    onSuccess?: (fields: PartsListCreateFormInputValues) => void;
    onError?: (fields: PartsListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PartsListCreateFormInputValues) => PartsListCreateFormInputValues;
    onValidate?: PartsListCreateFormValidationValues;
} & React.CSSProperties>;
export default function PartsListCreateForm(props: PartsListCreateFormProps): React.ReactElement;
