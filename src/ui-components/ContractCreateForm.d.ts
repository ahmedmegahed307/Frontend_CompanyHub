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
export declare type ContractCreateFormInputValues = {
    clientId?: string;
    description?: string;
    jobSubtype?: string;
    estDuration?: string;
    pmFreq?: string;
    contractCharge?: number;
    startDate?: string;
    expiryDate?: string;
    billingType?: string;
    pmActive?: boolean;
    isActive?: boolean;
};
export declare type ContractCreateFormValidationValues = {
    clientId?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    jobSubtype?: ValidationFunction<string>;
    estDuration?: ValidationFunction<string>;
    pmFreq?: ValidationFunction<string>;
    contractCharge?: ValidationFunction<number>;
    startDate?: ValidationFunction<string>;
    expiryDate?: ValidationFunction<string>;
    billingType?: ValidationFunction<string>;
    pmActive?: ValidationFunction<boolean>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContractCreateFormOverridesProps = {
    ContractCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    clientId?: PrimitiveOverrideProps<TextFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    jobSubtype?: PrimitiveOverrideProps<TextFieldProps>;
    estDuration?: PrimitiveOverrideProps<TextFieldProps>;
    pmFreq?: PrimitiveOverrideProps<SelectFieldProps>;
    contractCharge?: PrimitiveOverrideProps<TextFieldProps>;
    startDate?: PrimitiveOverrideProps<TextFieldProps>;
    expiryDate?: PrimitiveOverrideProps<TextFieldProps>;
    billingType?: PrimitiveOverrideProps<SelectFieldProps>;
    pmActive?: PrimitiveOverrideProps<SwitchFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ContractCreateFormProps = React.PropsWithChildren<{
    overrides?: ContractCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ContractCreateFormInputValues) => ContractCreateFormInputValues;
    onSuccess?: (fields: ContractCreateFormInputValues) => void;
    onError?: (fields: ContractCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractCreateFormInputValues) => ContractCreateFormInputValues;
    onValidate?: ContractCreateFormValidationValues;
} & React.CSSProperties>;
export default function ContractCreateForm(props: ContractCreateFormProps): React.ReactElement;
