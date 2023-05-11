/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { JobTypesList } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type JobTypesListUpdateFormInputValues = {
    name?: string;
    subTypeList?: string[];
    isActive?: boolean;
};
export declare type JobTypesListUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    subTypeList?: ValidationFunction<string>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobTypesListUpdateFormOverridesProps = {
    JobTypesListUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    subTypeList?: PrimitiveOverrideProps<TextFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type JobTypesListUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobTypesListUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobTypesList?: JobTypesList;
    onSubmit?: (fields: JobTypesListUpdateFormInputValues) => JobTypesListUpdateFormInputValues;
    onSuccess?: (fields: JobTypesListUpdateFormInputValues) => void;
    onError?: (fields: JobTypesListUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobTypesListUpdateFormInputValues) => JobTypesListUpdateFormInputValues;
    onValidate?: JobTypesListUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobTypesListUpdateForm(props: JobTypesListUpdateFormProps): React.ReactElement;
