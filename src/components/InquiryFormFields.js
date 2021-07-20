import { useState, useEffect } from "react";
import { Formik, Form, useFormikContext } from "formik";
import FieldLayout from "./FieldLayout";
import InputField from "./InputField";
import Tooltip from "./Tooltip";
import { doAjaxDummy as doAjax } from "../utility";

export default function InquiryFormFields(props) {
  return (
    <Formik
      initialValues={{
        form: {
          type: "gf",
          id: 2,
          emailField: 1,
          fnameField: 2,
          lnameField: 3
        }
      }}
      onSubmit={({ values }, setSubmitting) => {
        console.log(values);
      }}
    >
      <Form>
        <InquiryFormFields1 />
      </Form>
    </Formik>
  );
}

export function InquiryFormFields1(props) {
  /*const [initializing, setInitializing] = useState(true);
	const [fetching, setFetching] = useState(false);*/
  const {
    values: { form },
    setFieldValue
  } = useFormikContext();
  /*const [local, setLocal] = useState({
		type: form.type
		id: form.id,
	});
	const [cache, setCache] = useState(null);
	const [ajaxError, setAjaxError] = useState(null);

	function populateForms( formType ) {
		setFetching('Loading Forms...');
		doAjax({action: 'mwqt_forms', formtype})
		.then(response => {
			setLocal({...local,type:formType});
			if ( !cache ) cache={};
			if ( !cache[formType]) = cache[formType]={};
			cache[formType].forms = response;
			setCache(cache);
			setAjaxError(null)
		})
		.catch(err => setAjaxError([err, () => populateForms(formType) ]
		.finally(() => setFetching(false))
	}

	function populateFields( formType, formId ) {
		setFetching('Loading fields...');
		doAjax({action: '', formType,formId})
		.then(response => {
			setLocal({...local, id:formId});
			if ( !cache ) cache={};
			if ( !cache[formType]) = cache[formType]={};
			cache[formType].fields = response;
			setCache(cache);
			setAjaxError(null)
		})
		.catch(err => setAjaxError([err, () => populateForms(formType, formId)]
		.finally(() => setFetching(false))
	}

	function init(formtype, formId){
		let promises = [];
		if (formType) promises.push(populateForms(formType));
		if (formId) promises.push(populateFields(formType, formId));
		promises.all(promises).then(() => setInitializing(false)).catch(err=>setAjaxError([err, () => init(formType, formId)]));
	}


	useEffect(() => {
		if (initializing) init(form.type, form.id);
		else if ( form.type !== local.type ) populateForms( form.type );
		else if ( form.id !== local.id ) populateField( form.type, form.id );
	}, [initializing, form.type, form.id]);

	*/
  const initializing = false;
  const fetching = false;
  const ajaxError = null;
  const cache = {
    gf: {
      forms: [
        [1, "imran"],
        [
          2,
          "ali",
          [
            [1, "email", "email"],
            [2, "name 1", "name"],
            [3, "name 2", "name"]
          ]
        ]
      ],
      fields: {
        1: [
          [1, "email1 ", "email"],
          [2, "name1 1", "name"],
          [3, "name1 2", "name"]
        ],
        2: [
          [1, "email2", "email"],
          [2, "name2 1", "name"],
          [3, "name2 2", "name"]
        ]
      }
    }
  };
  console.log("b4 render of view...... " + Date.now());
  const allForms = cache[form.type] && cache[form.type].forms;
  const allFormFields =
    cache[form.type] &&
    cache[form.type]["fields"][form.id] &&
    cache[form.type]["fields"][form.id];
  return (
    <>
      {initializing && <p>Initializing.....</p>}
      {fetching && <p>{fetching}</p>}
      {ajaxError && (
        <p>
          Ajax failed. <button onClik={ajaxError[1]}>Retry</button>
        </p>
      )}
      <InquiryFormFieldsView
        disabled={initializing || fetching}
        fetching={fetching}
        ajaxError={ajaxError}
        allForms={allForms}
        allFormFields={allFormFields}
        form={form}
        setFieldValue={setFieldValue}
      />
    </>
  );
}
//-----------------------------------
const defaultFormObj = {
  type: "",
  id: "",
  emailField: "",
  fnameField: "",
  lnameField: ""
};

export function InquiryFormFieldsView(props) {
  console.log("entered...... " + Date.now());
  const {
    disabled,
    allForms = [],
    allFormFields = [],
    form,
    setFieldValue
  } = props;
  console.log(form);
  const formOptionElems = getOptionElems(allForms);
  const emailFieldOptionElems = getOptionElems(
    allFormFields.filter((field) => "email" === field[2])
  );
  const nameFieldOptionElems = getOptionElems(
    allFormFields.filter((field) => "name" === field[2])
  );

  function handleChange(e) {
    console.log(
      "handleChange...... " + Date.now(),
      e.target.name,
      e.target.value
    );
    let newObj = null;
    switch (e.target.name) {
      case "form.type":
        newObj = { ...defaultFormObj, type: e.target.value };
        break;
      case "form.id":
        newObj = { ...defaultFormObj, type: form.type, id: e.target.value };
        break;
      case "form.emailField":
        newObj = { ...form, emailField: e.target.value };
        break;
      case "form.fnameField":
        newObj = { ...form, fnameField: e.target.value };
        break;
      case "form.lnameField":
        newObj = { ...form, lnameField: e.target.value };
        break;
    }
    setFieldValue("form", newObj);
    console.log("after handleChange...... " + Date.now());
  }
  console.log("b4 render...... " + Date.now());
  return (
    <>
      <FieldLayout
        label={
          <label name="form.type" htmlFor="form_type_cf7">
            Form Type
          </label>
        }
        input={
          <>
            <span>
              <label>
                <input
                  name="form.type"
                  type="radio"
                  value="cf7"
                  id="form_type_cf7"
                  disabled={disabled || !isPluginActive("cf7")}
                  onChange={handleChange}
                  checked={"cf7" === form.type}
                />{" "}
                Contact Form 7
              </label>
              {!isPluginActive("cf7") && <small>(Not Installed)</small>}
            </span>
            <span>
              <label>
                <InputField
                  name="form.type"
                  type="radio"
                  value="gf"
                  id="form_type_gf"
                  disabled={disabled || !isPluginActive("gf")}
                  onChange={handleChange}
                  checked={"gf" === form.type}
                />{" "}
                Gravity Forms
              </label>
              {!isPluginActive("gf") && <small>(Not Installed)</small>}
            </span>
          </>
        }
        tooltip={
          <Tooltip id="form.type">
            Select the form plugin you used to create quote inquiry form
          </Tooltip>
        }
      />
      <FieldLayout
        label={<label name="form.id">Form Name</label>}
        input={
          <select
            name="form.id"
            as="select"
            children={formOptionElems}
            disabled={disabled}
            onChange={handleChange}
            value={form.id}
          />
        }
        tooltip={
          <Tooltip id="form.type">
            Select the form you want customers to submit for quote inquiry. This
            form will be shown on the Cart page.
          </Tooltip>
        }
      />
      <FieldLayout
        label={<label name="form.emailField">Email Field</label>}
        input={
          <select
            name="form.emailField"
            as="select"
            children={emailFieldOptionElems}
            disabled={disabled}
            onChange={handleChange}
            value={form.emailField}
          />
        }
        tooltip={<Tooltip id="form.type">Select the email field. T</Tooltip>}
      />
      <FieldLayout
        label={<label name="form.fnameField">First Name Field</label>}
        input={
          <select
            name="form.fnameField"
            as="select"
            children={nameFieldOptionElems}
            disabled={disabled}
            onChange={handleChange}
            value={form.fnameField}
          />
        }
        tooltip={<Tooltip id="form.type">Select the first name field.</Tooltip>}
      />
      <FieldLayout
        label={<label name="form.lnameField">Last Name Field</label>}
        input={
          <select
            name="form.lnameField"
            as="select"
            children={nameFieldOptionElems}
            disabled={disabled}
            onChange={handleChange}
            value={form.lnameField}
          />
        }
        tooltip={<Tooltip id="form.type">Select the last name field.</Tooltip>}
      />
    </>
  );
}

function getOptionElems(items) {
  const defaultElem = (
    <option value="" key="__select__">
      __SELECT__
    </option>
  );
  let elems = [defaultElem];
  if (items) {
    elems = elems.concat(
      items.map((arr) => (
        <option value={arr[0]} key={arr[0]}>
          {arr[1]}
        </option>
      ))
    );
  }
  return elems;
}

function isPluginActive() {
  return true;
}
