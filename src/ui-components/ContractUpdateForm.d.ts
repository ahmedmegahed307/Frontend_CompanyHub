/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Contract } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ContractUpdateFormInputValues = {
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
export declare type ContractUpdateFormValidationValues = {
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
export declare type ContractUpdateFormOverridesProps = {
    ContractUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
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
export declare type ContractUpdateFormProps = React.PropsWithChildren<{
    overrides?: ContractUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    contract?: Contract;
    onSubmit?: (fields: ContractUpdateFormInputValues) => ContractUpdateFormInputValues;
    onSuccess?: (fields: ContractUpdateFormInputValues) => void;
    onError?: (fields: ContractUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ContractUpdateFormInputValues) => ContractUpdateFormInputValues;
    onValidate?: ContractUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ContractUpdateForm(props: ContractUpdateFormProps): React.ReactElement;
