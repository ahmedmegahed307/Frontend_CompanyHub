/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ChatMessages } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type ChatMessagesUpdateFormInputValues = {
    text?: string;
    senderId?: string;
    reciverId?: string;
    isRead?: boolean;
    isActive?: boolean;
};
export declare type ChatMessagesUpdateFormValidationValues = {
    text?: ValidationFunction<string>;
    senderId?: ValidationFunction<string>;
    reciverId?: ValidationFunction<string>;
    isRead?: ValidationFunction<boolean>;
    isActive?: ValidationFunction<boolean>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ChatMessagesUpdateFormOverridesProps = {
    ChatMessagesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    text?: PrimitiveOverrideProps<TextFieldProps>;
    senderId?: PrimitiveOverrideProps<TextFieldProps>;
    reciverId?: PrimitiveOverrideProps<TextFieldProps>;
    isRead?: PrimitiveOverrideProps<SwitchFieldProps>;
    isActive?: PrimitiveOverrideProps<SwitchFieldProps>;
} & EscapeHatchProps;
export declare type ChatMessagesUpdateFormProps = React.PropsWithChildren<{
    overrides?: ChatMessagesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    chatMessages?: ChatMessages;
    onSubmit?: (fields: ChatMessagesUpdateFormInputValues) => ChatMessagesUpdateFormInputValues;
    onSuccess?: (fields: ChatMessagesUpdateFormInputValues) => void;
    onError?: (fields: ChatMessagesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: ChatMessagesUpdateFormInputValues) => ChatMessagesUpdateFormInputValues;
    onValidate?: ChatMessagesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function ChatMessagesUpdateForm(props: ChatMessagesUpdateFormProps): React.ReactElement;
