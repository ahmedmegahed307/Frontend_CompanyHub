/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { StatusList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StatusListUpdateFormInputValues = {
    name?: string;
    isActive?: string;
};
export declare type StatusListUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    isActive?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatusListUpdateFormOverridesProps = {
    StatusListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatusListUpdateFormProps = React.PropsWithChildren<{
    overrides?: StatusListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    statusList?: StatusList;
    onSubmit?: (fields: StatusListUpdateFormInputValues) => StatusListUpdateFormInputValues;
    onSuccess?: (fields: StatusListUpdateFormInputValues) => void;
    onError?: (fields: StatusListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatusListUpdateFormInputValues) => StatusListUpdateFormInputValues;
    onValidate?: StatusListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StatusListUpdateForm(props: StatusListUpdateFormProps): React.ReactElement;
