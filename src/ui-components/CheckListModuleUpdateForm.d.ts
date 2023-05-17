/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CheckListModule } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CheckListModuleUpdateFormInputValues = {
    name?: string;
    visibleOn?: string;
    JobTypes?: string;
    isReq?: boolean;
    connectionId?: string;
};
export declare type CheckListModuleUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    visibleOn?: ValidationFunction<string>;
    JobTypes?: ValidationFunction<string>;
    isReq?: ValidationFunction<boolean>;
    connectionId?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CheckListModuleUpdateFormOverridesProps = {
    CheckListModuleUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    visibleOn?: PrimitiveOverrideProps<TextFieldProps>;
    JobTypes?: PrimitiveOverrideProps<TextFieldProps>;
    isReq?: PrimitiveOverrideProps<SwitchFieldProps>;
    connectionId?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CheckListModuleUpdateFormProps = React.PropsWithChildren<{
    overrides?: CheckListModuleUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    checkListModule?: CheckListModule;
    onSubmit?: (fields: CheckListModuleUpdateFormInputValues) => CheckListModuleUpdateFormInputValues;
    onSuccess?: (fields: CheckListModuleUpdateFormInputValues) => void;
    onError?: (fields: CheckListModuleUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CheckListModuleUpdateFormInputValues) => CheckListModuleUpdateFormInputValues;
    onValidate?: CheckListModuleUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CheckListModuleUpdateForm(props: CheckListModuleUpdateFormProps): React.ReactElement;
