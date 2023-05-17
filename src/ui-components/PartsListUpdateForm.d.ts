/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { PartsList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PartsListUpdateFormInputValues = {
    name?: string;
    quantity?: number;
    cost?: string;
    code?: string;
};
export declare type PartsListUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    quantity?: ValidationFunction<number>;
    cost?: ValidationFunction<string>;
    code?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PartsListUpdateFormOverridesProps = {
    PartsListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    quantity?: PrimitiveOverrideProps<TextFieldProps>;
    cost?: PrimitiveOverrideProps<TextFieldProps>;
    code?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PartsListUpdateFormProps = React.PropsWithChildren<{
    overrides?: PartsListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    partsList?: PartsList;
    onSubmit?: (fields: PartsListUpdateFormInputValues) => PartsListUpdateFormInputValues;
    onSuccess?: (fields: PartsListUpdateFormInputValues) => void;
    onError?: (fields: PartsListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: PartsListUpdateFormInputValues) => PartsListUpdateFormInputValues;
    onValidate?: PartsListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PartsListUpdateForm(props: PartsListUpdateFormProps): React.ReactElement;
