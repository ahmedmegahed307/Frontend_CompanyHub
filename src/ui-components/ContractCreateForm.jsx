/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Contract } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function ContractCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    clientId: "",
    description: "",
    jobSubtype: "",
    estDuration: "",
    pmFreq: "",
    contractCharge: "",
    startDate: "",
    expiryDate: "",
    billingType: "",
    pmActive: false,
    isActive: false,
  };
  const [clientId, setClientId] = React.useState(initialValues.clientId);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [jobSubtype, setJobSubtype] = React.useState(initialValues.jobSubtype);
  const [estDuration, setEstDuration] = React.useState(
    initialValues.estDuration
  );
  const [pmFreq, setPmFreq] = React.useState(initialValues.pmFreq);
  const [contractCharge, setContractCharge] = React.useState(
    initialValues.contractCharge
  );
  const [startDate, setStartDate] = React.useState(initialValues.startDate);
  const [expiryDate, setExpiryDate] = React.useState(initialValues.expiryDate);
  const [billingType, setBillingType] = React.useState(
    initialValues.billingType
  );
  const [pmActive, setPmActive] = React.useState(initialValues.pmActive);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setClientId(initialValues.clientId);
    setDescription(initialValues.description);
    setJobSubtype(initialValues.jobSubtype);
    setEstDuration(initialValues.estDuration);
    setPmFreq(initialValues.pmFreq);
    setContractCharge(initialValues.contractCharge);
    setStartDate(initialValues.startDate);
    setExpiryDate(initialValues.expiryDate);
    setBillingType(initialValues.billingType);
    setPmActive(initialValues.pmActive);
    setIsActive(initialValues.isActive);
    setErrors({});
  };
  const validations = {
    clientId: [],
    description: [],
    jobSubtype: [],
    estDuration: [],
    pmFreq: [],
    contractCharge: [],
    startDate: [],
    expiryDate: [],
    billingType: [],
    pmActive: [],
    isActive: [],
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
          clientId,
          description,
          jobSubtype,
          estDuration,
          pmFreq,
          contractCharge,
          startDate,
          expiryDate,
          billingType,
          pmActive,
          isActive,
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
          await DataStore.save(new Contract(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "ContractCreateForm")}
      {...rest}
    >
      <TextField
        label="Client id"
        isRequired={false}
        isReadOnly={false}
        value={clientId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId: value,
              description,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.clientId ?? value;
          }
          if (errors.clientId?.hasError) {
            runValidationTasks("clientId", value);
          }
          setClientId(value);
        }}
        onBlur={() => runValidationTasks("clientId", clientId)}
        errorMessage={errors.clientId?.errorMessage}
        hasError={errors.clientId?.hasError}
        {...getOverrideProps(overrides, "clientId")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId,
              description: value,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Job subtype"
        isRequired={false}
        isReadOnly={false}
        value={jobSubtype}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype: value,
              estDuration,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.jobSubtype ?? value;
          }
          if (errors.jobSubtype?.hasError) {
            runValidationTasks("jobSubtype", value);
          }
          setJobSubtype(value);
        }}
        onBlur={() => runValidationTasks("jobSubtype", jobSubtype)}
        errorMessage={errors.jobSubtype?.errorMessage}
        hasError={errors.jobSubtype?.hasError}
        {...getOverrideProps(overrides, "jobSubtype")}
      ></TextField>
      <TextField
        label="Est duration"
        isRequired={false}
        isReadOnly={false}
        value={estDuration}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration: value,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.estDuration ?? value;
          }
          if (errors.estDuration?.hasError) {
            runValidationTasks("estDuration", value);
          }
          setEstDuration(value);
        }}
        onBlur={() => runValidationTasks("estDuration", estDuration)}
        errorMessage={errors.estDuration?.errorMessage}
        hasError={errors.estDuration?.hasError}
        {...getOverrideProps(overrides, "estDuration")}
      ></TextField>
      <SelectField
        label="Pm freq"
        placeholder="Please select an option"
        isDisabled={false}
        value={pmFreq}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration,
              pmFreq: value,
              contractCharge,
              startDate,
              expiryDate,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.pmFreq ?? value;
          }
          if (errors.pmFreq?.hasError) {
            runValidationTasks("pmFreq", value);
          }
          setPmFreq(value);
        }}
        onBlur={() => runValidationTasks("pmFreq", pmFreq)}
        errorMessage={errors.pmFreq?.errorMessage}
        hasError={errors.pmFreq?.hasError}
        {...getOverrideProps(overrides, "pmFreq")}
      >
        <option
          children="Invoice per visit"
          value="INVOICE_PER_VISIT"
          {...getOverrideProps(overrides, "pmFreqoption0")}
        ></option>
        <option
          children="Invoice per contract"
          value="INVOICE_PER_CONTRACT"
          {...getOverrideProps(overrides, "pmFreqoption1")}
        ></option>
      </SelectField>
      <TextField
        label="Contract charge"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={contractCharge}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge: value,
              startDate,
              expiryDate,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.contractCharge ?? value;
          }
          if (errors.contractCharge?.hasError) {
            runValidationTasks("contractCharge", value);
          }
          setContractCharge(value);
        }}
        onBlur={() => runValidationTasks("contractCharge", contractCharge)}
        errorMessage={errors.contractCharge?.errorMessage}
        hasError={errors.contractCharge?.hasError}
        {...getOverrideProps(overrides, "contractCharge")}
      ></TextField>
      <TextField
        label="Start date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={startDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge,
              startDate: value,
              expiryDate,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.startDate ?? value;
          }
          if (errors.startDate?.hasError) {
            runValidationTasks("startDate", value);
          }
          setStartDate(value);
        }}
        onBlur={() => runValidationTasks("startDate", startDate)}
        errorMessage={errors.startDate?.errorMessage}
        hasError={errors.startDate?.hasError}
        {...getOverrideProps(overrides, "startDate")}
      ></TextField>
      <TextField
        label="Expiry date"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={expiryDate}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate: value,
              billingType,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.expiryDate ?? value;
          }
          if (errors.expiryDate?.hasError) {
            runValidationTasks("expiryDate", value);
          }
          setExpiryDate(value);
        }}
        onBlur={() => runValidationTasks("expiryDate", expiryDate)}
        errorMessage={errors.expiryDate?.errorMessage}
        hasError={errors.expiryDate?.hasError}
        {...getOverrideProps(overrides, "expiryDate")}
      ></TextField>
      <SelectField
        label="Billing type"
        placeholder="Please select an option"
        isDisabled={false}
        value={billingType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate,
              billingType: value,
              pmActive,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.billingType ?? value;
          }
          if (errors.billingType?.hasError) {
            runValidationTasks("billingType", value);
          }
          setBillingType(value);
        }}
        onBlur={() => runValidationTasks("billingType", billingType)}
        errorMessage={errors.billingType?.errorMessage}
        hasError={errors.billingType?.hasError}
        {...getOverrideProps(overrides, "billingType")}
      >
        <option
          children="Invoice per visit"
          value="INVOICE_PER_VISIT"
          {...getOverrideProps(overrides, "billingTypeoption0")}
        ></option>
        <option
          children="Invoice per contract"
          value="INVOICE_PER_CONTRACT"
          {...getOverrideProps(overrides, "billingTypeoption1")}
        ></option>
      </SelectField>
      <SwitchField
        label="Pm active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={pmActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate,
              billingType,
              pmActive: value,
              isActive,
            };
            const result = onChange(modelFields);
            value = result?.pmActive ?? value;
          }
          if (errors.pmActive?.hasError) {
            runValidationTasks("pmActive", value);
          }
          setPmActive(value);
        }}
        onBlur={() => runValidationTasks("pmActive", pmActive)}
        errorMessage={errors.pmActive?.errorMessage}
        hasError={errors.pmActive?.hasError}
        {...getOverrideProps(overrides, "pmActive")}
      ></SwitchField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              clientId,
              description,
              jobSubtype,
              estDuration,
              pmFreq,
              contractCharge,
              startDate,
              expiryDate,
              billingType,
              pmActive,
              isActive: value,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
