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
export declare type ChatMessagesCreateFormInputValues = {
    text?: string;
    senderId?: string;
    reciverId?: string;
    isRead?: boolean;
    isActive?: boolean;
};
export declare type ChatMessagesCreateFormValidationValues = {
    text?: ValidationFunction<string>;
    senderId?: ValidationFunction<string>;
    reciverId?: ValidationFunction<string>;
    isRead?: ValidationFunction<boolean>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatMessagesCreateFormOverridesProps = {
    ChatMessagesCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    senderId?: PrimitiveOverrideProps<TextFieldProps>;
    reciverId?: PrimitiveOverrideProps<TextFieldProps>;
    isRead?: PrimitiveOverrideProps<SwitchFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ChatMessagesCreateFormProps = React.PropsWithChildren<{
    overrides?: ChatMessagesCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: ChatMessagesCreateFormInputValues) => ChatMessagesCreateFormInputValues;
    onSuccess?: (fields: ChatMessagesCreateFormInputValues) => void;
    onError?: (fields: ChatMessagesCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatMessagesCreateFormInputValues) => ChatMessagesCreateFormInputValues;
    onValidate?: ChatMessagesCreateFormValidationValues;
} & React.CSSProperties>;
export default function ChatMessagesCreateForm(props: ChatMessagesCreateFormProps): React.ReactElement;
