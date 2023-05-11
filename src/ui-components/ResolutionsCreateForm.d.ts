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
export declare type ResolutionsCreateFormInputValues = {
    name?: string;
    isActive?: boolean;
};
export declare type ResolutionsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResolutionsCreateFormOverridesProps = {
    ResolutionsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ResolutionsCreateFormProps = React.PropsWithChildren<{
    overrides?: ResolutionsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ResolutionsCreateFormInputValues) => ResolutionsCreateFormInputValues;
    onSuccess?: (fields: ResolutionsCreateFormInputValues) => void;
    onError?: (fields: ResolutionsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResolutionsCreateFormInputValues) => ResolutionsCreateFormInputValues;
    onValidate?: ResolutionsCreateFormValidationValues;
} & React.CSSProperties>;
export default function ResolutionsCreateForm(props: ResolutionsCreateFormProps): React.ReactElement;
