/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { UsersObject } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function UsersObjectUpdateForm(props) {
  const {
    id: idProp,
    usersObject: usersObjectModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    email: "",
    type: "",
    financialContactName: "",
    financialContactEmail: "",
    siteType: "",
    currencyCode: "",
    vatRate: "",
    vatValue: "",
    vatNumber: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [email, setEmail] = React.useState(initialValues.email);
  const [type, setType] = React.useState(initialValues.type);
  const [financialContactName, setFinancialContactName] = React.useState(
    initialValues.financialContactName
  );
  const [financialContactEmail, setFinancialContactEmail] = React.useState(
    initialValues.financialContactEmail
  );
  const [siteType, setSiteType] = React.useState(initialValues.siteType);
  const [currencyCode, setCurrencyCode] = React.useState(
    initialValues.currencyCode
  );
  const [vatRate, setVatRate] = React.useState(initialValues.vatRate);
  const [vatValue, setVatValue] = React.useState(initialValues.vatValue);
  const [vatNumber, setVatNumber] = React.useState(initialValues.vatNumber);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = usersObjectRecord
      ? { ...initialValues, ...usersObjectRecord }
      : initialValues;
    setName(cleanValues.name);
    setEmail(cleanValues.email);
    setType(cleanValues.type);
    setFinancialContactName(cleanValues.financialContactName);
    setFinancialContactEmail(cleanValues.financialContactEmail);
    setSiteType(cleanValues.siteType);
    setCurrencyCode(cleanValues.currencyCode);
    setVatRate(cleanValues.vatRate);
    setVatValue(cleanValues.vatValue);
    setVatNumber(cleanValues.vatNumber);
    setErrors({});
  };
  const [usersObjectRecord, setUsersObjectRecord] =
    React.useState(usersObjectModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UsersObject, idProp)
        : usersObjectModelProp;
      setUsersObjectRecord(record);
    };
    queryData();
  }, [idProp, usersObjectModelProp]);
  React.useEffect(resetStateValues, [usersObjectRecord]);
  const validations = {
    name: [],
    email: [],
    type: [],
    financialContactName: [],
    financialContactEmail: [],
    siteType: [],
    currencyCode: [],
    vatRate: [],
    vatValue: [],
    vatNumber: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          email,
          type,
          financialContactName,
          financialContactEmail,
          siteType,
          currencyCode,
          vatRate,
          vatValue,
          vatNumber,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            UsersObject.copyOf(usersObjectRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UsersObjectUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={false}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              email,
              type,
              financialContactName,
              financialContactEmail,
              siteType,
              currencyCode,
              vatRate,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        value={email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email: value,
              type,
              financialContactName,
              financialContactEmail,
              siteType,
              currencyCode,
              vatRate,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Type"
        isRequired={false}
        isReadOnly={false}
        value={type}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type: value,
              financialContactName,
              financialContactEmail,
              siteType,
              currencyCode,
              vatRate,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.type ?? value;
          }
          if (errors.type?.hasError) {
            runValidationTasks("type", value);
          }
          setType(value);
        }}
        onBlur={() => runValidationTasks("type", type)}
        errorMessage={errors.type?.errorMessage}
        hasError={errors.type?.hasError}
        {...getOverrideProps(overrides, "type")}
      ></TextField>
      <TextField
        label="Financial contact name"
        isRequired={false}
        isReadOnly={false}
        value={financialContactName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type,
              financialContactName: value,
              financialContactEmail,
              siteType,
              currencyCode,
              vatRate,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.financialContactName ?? value;
          }
          if (errors.financialContactName?.hasError) {
            runValidationTasks("financialContactName", value);
          }
          setFinancialContactName(value);
        }}
        onBlur={() =>
          runValidationTasks("financialContactName", financialContactName)
        }
        errorMessage={errors.financialContactName?.errorMessage}
        hasError={errors.financialContactName?.hasError}
        {...getOverrideProps(overrides, "financialContactName")}
      ></TextField>
      <TextField
        label="Financial contact email"
        isRequired={false}
        isReadOnly={false}
        value={financialContactEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type,
              financialContactName,
              financialContactEmail: value,
              siteType,
              currencyCode,
              vatRate,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.financialContactEmail ?? value;
          }
          if (errors.financialContactEmail?.hasError) {
            runValidationTasks("financialContactEmail", value);
          }
          setFinancialContactEmail(value);
        }}
        onBlur={() =>
          runValidationTasks("financialContactEmail", financialContactEmail)
        }
        errorMessage={errors.financialContactEmail?.errorMessage}
        hasError={errors.financialContactEmail?.hasError}
        {...getOverrideProps(overrides, "financialContactEmail")}
      ></TextField>
      <TextField
        label="Site type"
        isRequired={false}
        isReadOnly={false}
        value={siteType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type,
              financialContactName,
              financialContactEmail,
              siteType: value,
              currencyCode,
              vatRate,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.siteType ?? value;
          }
          if (errors.siteType?.hasError) {
            runValidationTasks("siteType", value);
          }
          setSiteType(value);
        }}
        onBlur={() => runValidationTasks("siteType", siteType)}
        errorMessage={errors.siteType?.errorMessage}
        hasError={errors.siteType?.hasError}
        {...getOverrideProps(overrides, "siteType")}
      ></TextField>
      <TextField
        label="Currency code"
        isRequired={false}
        isReadOnly={false}
        value={currencyCode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type,
              financialContactName,
              financialContactEmail,
              siteType,
              currencyCode: value,
              vatRate,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.currencyCode ?? value;
          }
          if (errors.currencyCode?.hasError) {
            runValidationTasks("currencyCode", value);
          }
          setCurrencyCode(value);
        }}
        onBlur={() => runValidationTasks("currencyCode", currencyCode)}
        errorMessage={errors.currencyCode?.errorMessage}
        hasError={errors.currencyCode?.hasError}
        {...getOverrideProps(overrides, "currencyCode")}
      ></TextField>
      <TextField
        label="Vat rate"
        isRequired={false}
        isReadOnly={false}
        value={vatRate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type,
              financialContactName,
              financialContactEmail,
              siteType,
              currencyCode,
              vatRate: value,
              vatValue,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.vatRate ?? value;
          }
          if (errors.vatRate?.hasError) {
            runValidationTasks("vatRate", value);
          }
          setVatRate(value);
        }}
        onBlur={() => runValidationTasks("vatRate", vatRate)}
        errorMessage={errors.vatRate?.errorMessage}
        hasError={errors.vatRate?.hasError}
        {...getOverrideProps(overrides, "vatRate")}
      ></TextField>
      <TextField
        label="Vat value"
        isRequired={false}
        isReadOnly={false}
        value={vatValue}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type,
              financialContactName,
              financialContactEmail,
              siteType,
              currencyCode,
              vatRate,
              vatValue: value,
              vatNumber,
            };
            const result = onChange(modelFields);
            value = result?.vatValue ?? value;
          }
          if (errors.vatValue?.hasError) {
            runValidationTasks("vatValue", value);
          }
          setVatValue(value);
        }}
        onBlur={() => runValidationTasks("vatValue", vatValue)}
        errorMessage={errors.vatValue?.errorMessage}
        hasError={errors.vatValue?.hasError}
        {...getOverrideProps(overrides, "vatValue")}
      ></TextField>
      <TextField
        label="Vat number"
        isRequired={false}
        isReadOnly={false}
        value={vatNumber}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              email,
              type,
              financialContactName,
              financialContactEmail,
              siteType,
              currencyCode,
              vatRate,
              vatValue,
              vatNumber: value,
            };
            const result = onChange(modelFields);
            value = result?.vatNumber ?? value;
          }
          if (errors.vatNumber?.hasError) {
            runValidationTasks("vatNumber", value);
          }
          setVatNumber(value);
        }}
        onBlur={() => runValidationTasks("vatNumber", vatNumber)}
        errorMessage={errors.vatNumber?.errorMessage}
        hasError={errors.vatNumber?.hasError}
        {...getOverrideProps(overrides, "vatNumber")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || usersObjectModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || usersObjectModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
