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
export declare type JobTypesListCreateFormInputValues = {
    name?: string;
    subTypeList?: string[];
    isActive?: boolean;
};
export declare type JobTypesListCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    subTypeList?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobTypesListCreateFormOverridesProps = {
    JobTypesListCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    subTypeList?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobTypesListCreateFormProps = React.PropsWithChildren<{
    overrides?: JobTypesListCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobTypesListCreateFormInputValues) => JobTypesListCreateFormInputValues;
    onSuccess?: (fields: JobTypesListCreateFormInputValues) => void;
    onError?: (fields: JobTypesListCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobTypesListCreateFormInputValues) => JobTypesListCreateFormInputValues;
    onValidate?: JobTypesListCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobTypesListCreateForm(props: JobTypesListCreateFormProps): React.ReactElement;
