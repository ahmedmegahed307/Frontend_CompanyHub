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
export declare type CheckListModuleCreateFormInputValues = {
    name?: string;
    visibleOn?: string;
    JobTypes?: string;
    isReq?: boolean;
    connectionId?: string;
};
export declare type CheckListModuleCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    visibleOn?: ValidationFunction<string>;
    JobTypes?: ValidationFunction<string>;
    isReq?: ValidationFunction<boolean>;
    connectionId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckListModuleCreateFormOverridesProps = {
    CheckListModuleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    visibleOn?: PrimitiveOverrideProps<TextFieldProps>;
    JobTypes?: PrimitiveOverrideProps<TextFieldProps>;
    isReq?: PrimitiveOverrideProps<SwitchFieldProps>;
    connectionId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CheckListModuleCreateFormProps = React.PropsWithChildren<{
    overrides?: CheckListModuleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CheckListModuleCreateFormInputValues) => CheckListModuleCreateFormInputValues;
    onSuccess?: (fields: CheckListModuleCreateFormInputValues) => void;
    onError?: (fields: CheckListModuleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CheckListModuleCreateFormInputValues) => CheckListModuleCreateFormInputValues;
    onValidate?: CheckListModuleCreateFormValidationValues;
} & React.CSSProperties>;
export default function CheckListModuleCreateForm(props: CheckListModuleCreateFormProps): React.ReactElement;
