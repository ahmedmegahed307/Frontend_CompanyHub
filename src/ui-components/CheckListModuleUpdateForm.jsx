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
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CheckListModule } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CheckListModuleUpdateForm(props) {
  const {
    id: idProp,
    checkListModule: checkListModuleModelProp,
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
    visibleOn: "",
    JobTypes: "",
    isReq: false,
    connectionId: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [visibleOn, setVisibleOn] = React.useState(initialValues.visibleOn);
  const [JobTypes, setJobTypes] = React.useState(initialValues.JobTypes);
  const [isReq, setIsReq] = React.useState(initialValues.isReq);
  const [connectionId, setConnectionId] = React.useState(
    initialValues.connectionId
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = checkListModuleRecord
      ? { ...initialValues, ...checkListModuleRecord }
      : initialValues;
    setName(cleanValues.name);
    setVisibleOn(cleanValues.visibleOn);
    setJobTypes(cleanValues.JobTypes);
    setIsReq(cleanValues.isReq);
    setConnectionId(cleanValues.connectionId);
    setErrors({});
  };
  const [checkListModuleRecord, setCheckListModuleRecord] = React.useState(
    checkListModuleModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CheckListModule, idProp)
        : checkListModuleModelProp;
      setCheckListModuleRecord(record);
    };
    queryData();
  }, [idProp, checkListModuleModelProp]);
  React.useEffect(resetStateValues, [checkListModuleRecord]);
  const validations = {
    name: [],
    visibleOn: [],
    JobTypes: [],
    isReq: [],
    connectionId: [],
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
          visibleOn,
          JobTypes,
          isReq,
          connectionId,
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
            CheckListModule.copyOf(checkListModuleRecord, (updated) => {
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
      {...getOverrideProps(overrides, "CheckListModuleUpdateForm")}
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
              visibleOn,
              JobTypes,
              isReq,
              connectionId,
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
        label="Visible on"
        isRequired={false}
        isReadOnly={false}
        value={visibleOn}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              visibleOn: value,
              JobTypes,
              isReq,
              connectionId,
            };
            const result = onChange(modelFields);
            value = result?.visibleOn ?? value;
          }
          if (errors.visibleOn?.hasError) {
            runValidationTasks("visibleOn", value);
          }
          setVisibleOn(value);
        }}
        onBlur={() => runValidationTasks("visibleOn", visibleOn)}
        errorMessage={errors.visibleOn?.errorMessage}
        hasError={errors.visibleOn?.hasError}
        {...getOverrideProps(overrides, "visibleOn")}
      ></TextField>
      <TextField
        label="Job types"
        isRequired={false}
        isReadOnly={false}
        value={JobTypes}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              visibleOn,
              JobTypes: value,
              isReq,
              connectionId,
            };
            const result = onChange(modelFields);
            value = result?.JobTypes ?? value;
          }
          if (errors.JobTypes?.hasError) {
            runValidationTasks("JobTypes", value);
          }
          setJobTypes(value);
        }}
        onBlur={() => runValidationTasks("JobTypes", JobTypes)}
        errorMessage={errors.JobTypes?.errorMessage}
        hasError={errors.JobTypes?.hasError}
        {...getOverrideProps(overrides, "JobTypes")}
      ></TextField>
      <SwitchField
        label="Is req"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isReq}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              name,
              visibleOn,
              JobTypes,
              isReq: value,
              connectionId,
            };
            const result = onChange(modelFields);
            value = result?.isReq ?? value;
          }
          if (errors.isReq?.hasError) {
            runValidationTasks("isReq", value);
          }
          setIsReq(value);
        }}
        onBlur={() => runValidationTasks("isReq", isReq)}
        errorMessage={errors.isReq?.errorMessage}
        hasError={errors.isReq?.hasError}
        {...getOverrideProps(overrides, "isReq")}
      ></SwitchField>
      <TextField
        label="Connection id"
        isRequired={false}
        isReadOnly={false}
        value={connectionId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              visibleOn,
              JobTypes,
              isReq,
              connectionId: value,
            };
            const result = onChange(modelFields);
            value = result?.connectionId ?? value;
          }
          if (errors.connectionId?.hasError) {
            runValidationTasks("connectionId", value);
          }
          setConnectionId(value);
        }}
        onBlur={() => runValidationTasks("connectionId", connectionId)}
        errorMessage={errors.connectionId?.errorMessage}
        hasError={errors.connectionId?.hasError}
        {...getOverrideProps(overrides, "connectionId")}
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
          isDisabled={!(idProp || checkListModuleModelProp)}
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
              !(idProp || checkListModuleModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
