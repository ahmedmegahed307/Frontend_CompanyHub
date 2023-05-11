/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Resolutions } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ResolutionsUpdateFormInputValues = {
    name?: string;
    isActive?: boolean;
};
export declare type ResolutionsUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ResolutionsUpdateFormOverridesProps = {
    ResolutionsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ResolutionsUpdateFormProps = React.PropsWithChildren<{
    overrides?: ResolutionsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    resolutions?: Resolutions;
    onSubmit?: (fields: ResolutionsUpdateFormInputValues) => ResolutionsUpdateFormInputValues;
    onSuccess?: (fields: ResolutionsUpdateFormInputValues) => void;
    onError?: (fields: ResolutionsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ResolutionsUpdateFormInputValues) => ResolutionsUpdateFormInputValues;
    onValidate?: ResolutionsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ResolutionsUpdateForm(props: ResolutionsUpdateFormProps): React.ReactElement;
