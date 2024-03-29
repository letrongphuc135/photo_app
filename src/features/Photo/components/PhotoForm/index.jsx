import PropTypes from "prop-types";
import React from "react";

import { Button, FormGroup, Input, Label, Spinner } from "reactstrap";
import { PHOTO_CATEGORY_OPTIONS } from "constants/global";
import Images from "constants/images";
import { Formik, Form, FastField } from "formik";
import InputField from "custom-fields/InputField";
import SelectField from "custom-fields/SelectField";
import * as Yup from "yup";
import RandomPhotoField from "custom-fields/RandomPhotoField";
PhotoForm.propTypes = {
  onSubmit: PropTypes.func,
};

PhotoForm.defaultProps = {
  onSubmit: null,
};

function PhotoForm(props) {

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),

    categoryId: Yup.number().required("This field is required.").nullable(),

    photo: Yup.string().when("categoryId", {
      is: 1,
      then: Yup.string().required("This field is required."),
      otherwise: Yup.string().notRequired(),
    }),
  });

  // npm i --save react-select
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={validationSchema}
      onSubmit={props.onSubmit}
    >
      {(formikProps) => {
        //do something
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            {/* only re-render it when field change */}
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />

            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />

            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />

            <FormGroup>
              <Button color="primary">
                {isSubmitting && <Spinner size="sm" children=""/>}
                Add to album
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
}

export default PhotoForm;
